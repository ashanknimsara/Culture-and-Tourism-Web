const router = require("express").Router();
const { response } = require("express");
const { create } = require("../models/Agency");
let Agency = require("../models/Agency");


router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const location = req.body.location;
    const email = req.body.email;
    const contactNo = req.body.contactNo;
    const Description = req.body.Description;

    const newAgency = new Agency({

        name,
        location,
        email,
        contactNo,
        Description
    })

    newAgency.save().then(()=>{
        res.json("Agency Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Agency.find().then((Agency)=>{
        res.json(Agency)
    }).catch((err)=>{
        console.log(err)
    })
})

// router.route("/update/:id").put(async(req,res)=>{
//     try {
//         let userId = req.params.id;
//         const {name,location,email,contactNo,Description}=req.body;

//         const updateAgency = {
//             name,
//             location,
//             email,
//             contactNo,
//             Description
//         }

//         const options = { new: true }; // returns the updated document
//         const updatedAgency = await Agency.findOneAndUpdate({_id: userId}, updateAgency, options);

//         if (!updatedAgency) {
//             res.status(404).send({status: "Agency not found"});
//         } else {
//             res.status(200).send({status: "Agency updated"});
//         }
//     } catch (err) {
//         console.log(err);
//         res.status(500).send({status: "Error with updating data", error: err.message});
//     }
// });
router.put("/update/:id", async (req, res) => {
    try {
        const {name,location,email,contactNo,Description}=req.body;

        const agency = await Agency.findById(req.params.id);
        if (!agency)
            return res.status(404).json({ status: false, message: "Not found" });


        agency.name = name;
        agency.location = location;
        agency.email= email;
        agency.contactNo = contactNo;
        agency.Description = Description;
        

        const updatedAgency = await agency.save();
        return res.status(200).json({
            status: true,
            message: `Agency ${Agency._id} updated successfully`,
            Agency: updatedAgency,
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