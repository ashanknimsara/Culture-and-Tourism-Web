const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const agencySchema = new Schema({

    name :{
        type : String,
        required: true
    },
    location :{
        type : String,
        required: true
    },
    email :{
        type: String,
        required: true
    },
    contactNo :{
        type: String,
        required: true
    },
    Description :{
        type: String,
        required: true
    },
    image: { type: String }

})

const Customer = mongoose.model("Agencies",agencySchema);

module.exports = Customer;