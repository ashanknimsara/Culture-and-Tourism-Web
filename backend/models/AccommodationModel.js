const mongoose = require("mongoose");

const AccommodationSchema = new mongoose.Schema({
    Hotel_Name: { 
        type: String, 
        required: true 
    },
    location: { 
        type: String, 
        required: true 
    },
    
    description: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        required: true 
    },
});

module.exports = mongoose.model("Accommodation", AccommodationSchema);
