const express = require("express");
const router = express.Router();

const Guide = require("../models/guideManage");

router.get("/test", (req, res) => res.send("route testing!"));

router.get("/all", (req, res) => {
  Guide.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(404).json({ err: "cant found" }));
});
router.get("/:id", (req, res) => {
  Guide.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(404).json({ noCartfound: "No Guide found" }));
});
router.post("/send", (req, res) => {
  Guide.create(req.body)
    .then((item) => res.json({ msg: "succesfully added" }))
    .catch((err) => res.status(400).json({ error: "Unable to add" }));
});
router.put("/:id", (req, res) => {
  Guide.findByIdAndUpdate(req.params.id, req.body)
    .then((item) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});
router.delete("/:id", (req, res) => {
  Guide.findByIdAndRemove(req.params.id, req.body)
    .then((item) => res.json({ msg: " deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a Guide" }));
});
module.exports = router;
