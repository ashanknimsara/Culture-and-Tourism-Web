const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Article  = require("../models/ArticleModel");
const { AdminAuth } = require("../middlewares/AdminAuth");
const serveStatic = require("serve-static");

//const { AdminToken } = require("../models/AdminToken");

// Configure Multer for storing images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "Media");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage });


// Localhost:5000/articles/new - POST - Create a new article
//router.post("/new", AdminAuth, upload.single("image"), async (req, res) => {
    router.post("/new", upload.single("image"), async (req, res) => {
    try {
        const { title, content } = req.body;
        const image = req.file ? req.file.path : "";

        const article = new Article({ title, content, image });
        await article.save();

        return res.status(201).json({
            status: true,
            message: "Article created successfully",
            data: article,
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: " error",
            data: undefined,
        });
    }
});


// Localhost:5000/articles/all - GET - Get all articles
router.get("/all", async (req, res) => {
    try {
        const articles = await Article.find();
        return res.status(200).json({
            status: true,
            message: "Articles retrieved successfully",
            data: articles,
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Server error",
            data: undefined,
        });
    }
});

// Localhost:5000/articles/:id - GET - Get a specific article
router.get("/:id", async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article)
            return res.status(404).json({ status: false, message: "Not found" });

        return res.status(200).json({
            status: true,
            message: `Article ${article._id} retrieved successfully`,
            data: article,
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Server error",
            data: undefined,
        });
    }
});

// Localhost:5000/articles/update/:id - PUT - Update an existing article
//router.put("/update/:id", AdminAuth, upload.single("image"), async (req, res) => {
router.put("/update/:id", upload.single("image"), async (req, res) => {
    try {
        const { title, content } = req.body;
        const image = req.file ? req.file.path : "";

        const article = await Article.findById(req.params.id);
        if (!article)
            return res.status(404).json({ status: false, message: "Not found" });

        // Delete the old image file if it's different from the new one
        if (image && image !== article.image) {
            fs.unlinkSync(article.image);
        }

        article.title = title;
        article.content = content;
        article.image = image || article.image;

        const updatedArticle = await article.save();
        return res.status(200).json({
            status: true,
            message: `Article ${article._id} updated successfully`,
            article: updatedArticle,
        });
    } catch (err) {
        return res.status(500).json({ status: false, message: err.message });
    }
});

// Localhost:5000/articles/delete/:id - DELETE - Delete an existing article
//router.delete("/delete/:id", AdminAuth, async (req, res) => {
    router.delete("/delete/:id", async (req, res) => {    
    try {
        const article = await Article.findById(req.params.id);
        if (!article)
            return res.status(404).json({ status: false, message: "Not found" });

        // Remove the associated image file from the media folder
        if (article.image) {
            fs.unlinkSync(path.join(__dirname, `../${article.image}`));
        }

        await Article.findByIdAndDelete(req.params.id);

        return res
            .status(200)
            .json({ status: true, message: `Article ${article._id} deleted successfully` });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: "Server error, article deletion failed",
        });
    }
});

module.exports = router;