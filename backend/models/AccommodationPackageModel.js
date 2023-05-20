const mongoose = require("mongoose");

const AccommodationPackageSchema = new mongoose.Schema({
    package_title: { 
        type: String, 
        required: true 
    },
    Price_Range: { 
        type: String, 
        required: true 
    },
    
    package_description: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    Package_Offers_Description: { 
        type: String,  
    },

    Accommodation_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Accommodation"
    },
});

module.exports = mongoose.model("AccommodationPackage", AccommodationPackageSchema);
