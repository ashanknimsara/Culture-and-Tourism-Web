const express = require("express");
const router = express.Router();
const AccommodationPackageSchema = require("../models/AccommodationPackageModel")

router.post("/add-AccommodationPackage", async (req, res) => {
    let package_title = req.body.package_title;
    let Price_Range = req.body.Price_Range;
    let package_description = req.body.package_description;
    let Package_Offers_Description = req.body.Package_Offers_Description;
    let createdAt = Date.now();
    let Accommodation_id = req.body.Accommodation_id;
  
    let newAccommodationPackage = new AccommodationPackageSchema({
      package_title: package_title,
      Price_Range: Price_Range,
      package_description: package_description,
      Package_Offers_Description: Package_Offers_Description,
      createdAt: createdAt,
      Accommodation_id: Accommodation_id,
    });
  
    try {
      await newAccommodationPackage.save();
      res.json({ msg: "Completed" });
    } catch (err) {
      res.json({ msg: err });
    }
  });
  router.get("/get-AccommodationPackage", async (req, res) => {
    try {
      const AccommodationPackages = await AccommodationPackageSchema.find({});
      res.json({ AccommodationPackages });
    } catch (err) {
      res.json({ msg: err });
    }
  });

  router.get("/allAccommodationPackage", async (req, res) => {
    try {
        const accommodationPackage = await AccommodationPackageSchema.find();
        return res.status(200).json({
            status: true,
            message: "Accommodations retrieved successfully",
            data: accommodationPackage,
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Server error",
            data: undefined,
        });
    }
});

  router.put("/update-AccommodationPackage/:id" , async(req,res)=>{

    let AccommodationPackage_id = req.params.id;

    var package_title = req.body.package_title;
    var Price_Range = req.body.Price_Range;
    var package_description = req.body.package_description;
    var Package_Offers_Description = req.body.Package_Offers_Description;
    var Accommodation_id = req.body.Accommodation_id;

    var newAccommodationPackage = new AccommodationPackageSchema({
        _id:AccommodationPackage_id,
        package_title:package_title,
        Price_Range:Price_Range,
        package_description:package_description,
        Package_Offers_Description:Package_Offers_Description,
        Accommodation_id:Accommodation_id,
    
    })

    AccommodationPackageSchema.updateOne({_id:AccommodationPackage_id},newAccommodationPackage)
    .then(()=>{
        res.status(200).send({
            status:"AccommodationPackage updated"
        });
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with updated AccommodationPackage",error :err.message});
    })
})

router.delete("/delete-AccommodationPackage/:id" , async(req,res)=>{
    let AccommodationPackage_id = req.params.id;

    //console.log(attandance_id)

    await AccommodationPackageSchema.deleteOne({_id:AccommodationPackage_id})
    .then(()=>{
        res.status(200).send({
            status:"AccommodationPackage deleted"
        });
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete AccommodationPackage",error :err.message});
    })
})

router.get("/get-AccommodationPackage/:id", async(req, res) => {

    console.log(req.params.id)
    const AccommodationPackage = await AccommodationPackageSchema.findOne({_id:req.params.id}).populate('package_title').populate('Price_Range').populate('package_description').populate('Package_Offers_Description').populate('Accommodation_id')
    res.json({"result":AccommodationPackage})
})

router.get("/get-AccommodationPackage/:Accommodation_id", async (req, res) => {
    try {
      const { Accommodation_id } = req.params;
      const filter = Accommodation_id ? { Accommodation_id } : {}; // Apply filtering only if Accommodation_id is provided
  
      const AccommodationPackages = await AccommodationPackageSchema.find(filter);
      res.json({ AccommodationPackages });
    } catch (err) {
      res.json({ msg: err });
    }
  });
  



 module.exports = router;