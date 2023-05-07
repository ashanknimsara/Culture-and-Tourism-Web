const mongoose = require("mongoose");

const guideSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  languages: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
  },
  validity: {
    type: String,
    required: true,
  },
});

module.exports = Guide = mongoose.model("guide", guideSchema);
