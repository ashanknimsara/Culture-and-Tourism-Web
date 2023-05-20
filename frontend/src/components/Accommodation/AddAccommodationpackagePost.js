import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./AddAccommodationPost.css";
import Navbar from "../common/Navbar";
const background = require('../../assets/images/bg.jpg');

export default function AddAccommodationpackagePost() {
  const { id } = useParams();
  const [package_title, setPackageTitle] = useState("");
  const [Price_Range, setPriceRange] = useState("");
  const [package_description, setPackageDescription] = useState("");
  const [Package_Offers_Description, setPackageOffersDescription] = useState("");
  const [Accommodation_id] = useState(id);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      package_title: package_title,
      Price_Range: Price_Range,
      package_description: package_description,
      Package_Offers_Description: Package_Offers_Description,
      Accommodation_id: Accommodation_id,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/AccommodationPackage/add-AccommodationPackage",
        formData
      );
      console.log("Response:", response.data);
      // Handle success
      alert("Accommodation Package Added");
    } catch (error) {
      console.error("Error:", error.response.data);
      // Handle error
      alert("An error occurred: " + error.message);
    }

    setPackageTitle("");
    setPriceRange("");
    setPackageDescription("");
    setPackageOffersDescription("");

  };

  return (
    <div className="AddAccommodationform">
            <div className="bg-image" style={{ backgroundImage: `url(${background})` }}></div>
            <Navbar style={{ position: 'fixed', zIndex: '9999' }} />
            <br />

            <div className="blogpost-form" style={{ marginTop: '100px' }}>
                <div class="center"><h2>Add Accommodation Package</h2></div>
     
      <form onSubmit={handleSubmit}>
        <div>
          <label>Package Title</label>
          <input  className="form-control" type="text" value={package_title} onChange={(e) => setPackageTitle(e.target.value)} required
          />
        </div>
        <div>
          <label>Price Range</label>
          <input className="form-control" type="text" value={Price_Range} onChange={(e) => setPriceRange(e.target.value)} required
          />
        </div>
        <div>
          <label>Package Description</label>
          <textarea className="form-control" value={package_description} onChange={(e) => setPackageDescription(e.target.value)} required
          ></textarea>
        </div>
        <div>
          <label>Package Offers Description</label>
          <textarea className="form-control" value={Package_Offers_Description} onChange={(e) => setPackageOffersDescription(e.target.value)} required
          ></textarea>
        </div>
        
        {/* <button type="submit">Submit</button> */}
        <div class="centerb"><button type="submit" className="btn btn-primary">Submit</button></div>
      </form>
    </div>
    </div>
  );
}
