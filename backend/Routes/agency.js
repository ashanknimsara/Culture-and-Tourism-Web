const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Agency = require("../models/Agency");





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

router.route("/add").post(upload.single("image"), (req, res) => {
  const name = req.body.name;
  const location = req.body.location;
  const email = req.body.email;
  const contactNo = req.body.contactNo;
  const Description = req.body.Description;
  const image = req.file ? req.file.path : "";

  const newAgency = new Agency({
    name,
    location,
    email,
    contactNo,
    Description,
    image,
  });

  newAgency
    .save()
    .then(() => {
      res.json("Agency Added");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to add agency" });
    });
});

router.route("/").get((req,res)=>{
    Agency.find().then((Agency)=>{
        res.json(Agency)
    }).catch((err)=>{
        console.log(err)
    })
})

router.put("/update/:id", upload.single("image"), async (req, res) => {
    try {
      const { name, location, email, contactNo, Description } = req.body;
  
      const agency = await Agency.findById(req.params.id);
      if (!agency)
        return res.status(404).json({ status: false, message: "Not found" });
  
      agency.name = name;
      agency.location = location;
      agency.email = email;
      agency.contactNo = contactNo;
      agency.Description = Description;
      
      if (req.file) {
        // Delete previous image if it exists
        if (agency.image) {
          fs.unlinkSync(agency.image);
        }
        agency.image = req.file.path;
      }
  
      const updatedAgency = await agency.save();
      return res.status(200).json({
        status: true,
        message: `Agency ${agency._id} updated successfully`,
        agency: updatedAgency,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  });

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await Agency.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Agency deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete data",error: err.message});
    })
})
router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;  
    const user = await Agency.findById(userId).then((Agency)=>{
        res.status(200).send({status: "Agency fetched",Agency:Agency})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get agency",error: err.message});
    })
})

module.exports = router;