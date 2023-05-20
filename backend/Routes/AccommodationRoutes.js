const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Accommodation  = require("../models/AccommodationModel");
const { AdminAuth } = require("../middlewares/AdminAuth");
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

    router.post("/newAccommodation", upload.single("image"), async (req, res) => {
    try {
        const { Hotel_Name, location, description } = req.body;
        const image = req.file ? req.file.path : "";

        const accommodation = new Accommodation({ Hotel_Name, location, description,image});
        await accommodation.save();

        return res.status(201).json({
            status: true,
            message: "Accommodation created successfully",
            data: accommodation,
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: " error",
            data: undefined,
        });
    }
});

router.get("/allAccommodation", async (req, res) => {
    try {
        const accommodation = await Accommodation.find();
        return res.status(200).json({
            status: true,
            message: "Accommodations retrieved successfully",
            data: accommodation,
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Server error",
            data: undefined,
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const accommodation = await Accommodation.findById(req.params.id);
        if (!accommodation)
            return res.status(404).json({ status: false, message: "Not found" });

        return res.status(200).json({
            status: true,
            message: `Accommodation ${accommodation._id} retrieved successfully`,
            data: accommodation,
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Server error",
            data: undefined,
        });
    }
});


router.put("/update/:id", upload.single("image"), async (req, res) => {
    try {
        const { Hotel_Name, location, description } = req.body;
        const image = req.file ? req.file.path : "";

        const accommodation = await Accommodation.findById(req.params.id);
        if (!accommodation)
            return res.status(404).json({ status: false, message: "Not found" });

        // Delete the old image file if it's different from the new one
        if (image && image !== accommodation.image) {
            fs.unlinkSync(accommodation.image);
        }

        accommodation.Hotel_Name = Hotel_Name;
        accommodation.location = location;
        accommodation.description = description;
        accommodation.image = image || accommodation.image;

        const updatedAccommodation = await accommodation.save();
        return res.status(200).json({
            status: true,
            message: `Accommodation ${accommodation._id} updated successfully`,
            accommodation: updatedAccommodation,
        });
    } catch (err) {
        return res.status(500).json({ status: false, message: err.message });
    }
});

    router.delete("/delete/:id", async (req, res) => {    
    try {
        const accommodation = await Accommodation.findById(req.params.id);
        if (!accommodation)
            return res.status(404).json({ status: false, message: "Not found" });

        // Remove the associated image file from the media folder
        if (accommodation.image) {
            fs.unlinkSync(path.join(__dirname, `../${accommodation.image}`));
        }

        await Accommodation.findByIdAndDelete(req.params.id);

        return res
            .status(200)
            .json({ status: true, message: `Accommodation ${accommodation._id} deleted successfully` });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: "Server error, Accommodation deletion failed",
        });
    }
});

module.exports = router;
