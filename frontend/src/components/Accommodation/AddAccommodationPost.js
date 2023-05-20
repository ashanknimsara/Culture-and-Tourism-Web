import React, { useState } from "react";
import axios from "axios";
import "./AddAccommodationPost.css";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
const background = require('../../assets/images/bg.jpg');

export default function AddAccommodationPost() {

    const [Hotel_Name, setHotel_Name] = useState("");
    const [location, setlocation] = useState("");
    const [description, setdescription] = useState("");
    const [image, setImage] = useState("");




    const sendData = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("Hotel_Name", Hotel_Name);
        formData.append("location", location);
        formData.append("description", description);
        formData.append("image", image);

        axios.post("http://localhost:5000/Accommodation/newAccommodation", formData).then(() => {
            alert("newAccommodation Added")


        }).catch((err) => {
            alert(err)
        })


    }

    

    return (
        <div className="AddAccommodationform">
            <div className="bg-image" style={{ backgroundImage: `url(${background})` }}></div>
            <Navbar style={{ position: 'fixed', zIndex: '9999' }} />
            <br />

            <div className="blogpost-form" style={{ marginTop: '100px' }}>
                <div class="center"><h2>New Accommodation Details</h2></div>
                <form onSubmit={sendData}>
                    <div className="form-group">
                        <label for="name">Hotel Name</label>
                        <input type="text" className="form-control" id="Hotel_Name"  placeholder="Enter Hotel Name " required
                            onChange={(e) => { setHotel_Name(e.target.value); }}
                        />
                    </div>
                    <div className="form-group" >
                        <label for="location">Location</label>
                        <input type="text"  className="form-control" id="location"  placeholder="Enter Location" required
                            onChange={(e) => { setlocation(e.target.value); }}
                        />

                    </div>
                    <div className="form-group">
                        <label for="location">Description</label>
                        <textarea className="form-control" id="description"  placeholder="Enter Description" required
                            onChange={(e) => { setdescription(e.target.value); }}
                        />

                    </div>
                    <div className="form-group">
                        <label for="image">Image</label>
                        <input type="file" className="form-control" id="image" accept="image/*" required
                            onChange={(e) => { setImage(e.target.files[0]); }}
                        />
                    </div>
                    {/* <div class="centerb">
                    <input type="submit" name='Save' className='btn btn-secondary' />
                    </div>  */}
                    <div class="centerb"><button type="submit" className="btn btn-primary">Submit</button></div>
                </form>
            </div>
            <br />
            <Footer />
        </div>
    )
}
