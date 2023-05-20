import React, { useState } from "react";
import axios from "axios";
import "./AddAgency.css";
import Navbar from "../common/AdminNavbar";
import Footer from "../common/Footer";
const background = require("../../assets/images/bg.jpg");

// Sample town data (replace it with the actual list of towns in Sri Lanka)
const townData = [
  "Colombo",
  "Mount Lavinia",
  "Kesbewa",
  "Moratuwa",
  "Maharagama",
  "Ratnapura",
  "Kandy",
  "Negombo",
  "Sri Jayewardenepura Kotte",
  "Kalmunai",
  "Trincomalee",
  "Galle",
  "Jaffna",
  "Athurugiriya",
  "Weligama",
  "Matara",
  "Kolonnawa",
  "Gampaha",
  "Puttalam",
  "Badulla",
  "Kalutara",
  "Bentota",
  "Matale",
  "Mannar",
  "Pothuhera",
  "Kurunegala",
  "Mabole",
  "Hatton",
  "Hambantota",
  "Oruwala",
];

export default function AddAgency() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [Description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const sendData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("email", email);
    formData.append("contactNo", contactNo);
    formData.append("Description", Description);
    formData.append("image", image); // Append the image to the form data

    axios
      .post("http://localhost:5000/Agency/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        alert("Agency Added");
      })
      .catch((err) => {
        alert(err);
      });

    setName("");
    setLocation("");
    setEmail("");
    setContactNo("");
    setDescription("");
    setImage(null);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="bg">
      <Navbar style={{ position: "fixed", zIndex: "9999" }} />
      <br />
      <div className="Payment-form" style={{ marginTop: "100px" }}>
        <div className="center">
          <h2>Add Travel Agency</h2>
        </div>
        <form onSubmit={sendData}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="fname"
              required
              placeholder="Enter Agency Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <div className="dropdown-icon">
              <select
                className="form-control"
                id="location"
                required
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              >
                <option value="">Select Location</option>
                {townData.map((town) => (
                  <option key={town} value={town}>
                    {town}
                  </option>
                ))}
              </select>
              <i className="fa fa-caret-down"></i> {/* Dropdown icon */}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="Email1"
              required
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactNo">Contact Number</label>
            <input
              type="text"
              className="form-control"
              id="inquiry"
              required
              placeholder="Enter Your Contact Number"
              onChange={(e) => {
                setContactNo(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              required
              placeholder="Enter Your Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              className="form-control-file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <div className="centerb">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      <br />
      <Footer />
    </div>
  );
}
