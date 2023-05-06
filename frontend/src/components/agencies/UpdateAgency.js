import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert2";
import { useParams } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
const background = require('../../assets/images/bg.jpg');

export default function UpdateAgency(props) {

    const [name, setName]= useState("");
    const [location, setLocation]= useState("");
    const [email, setEmail]= useState("");
    const [contactNo, setContactNo]= useState("");
    const [Description, setDescription]= useState("");

    const { id } = useParams();

    useEffect(() => {
        function getAgency() {
            axios.get(`http://localhost:5000/Agency/get/${id}`).then((res) => {

                if (res.data.status) {
                    setName(res.data.Agency.name);
                    setLocation(res.data.Agency.location);
                    setEmail(res.data.Agency.email);
                    setContactNo(res.data.Agency.contactNo);
                    setDescription(res.data.Agency.Description)
                }
            }).catch((err) => {
                alert(err);
            });
        }
        getAgency();
    }, []);

    function update(e) {

        e.preventDefault();

        const data = {
            name,
            location,
            email,
            contactNo,
            Description
        };

        axios.put(`http://localhost:5000/Agency/update/${id}`, data).then(() => {

            swal.fire({
                title: "Success!",
                text: "Updated Successfully",
                icon: "success",
                button: false,
            });

        }).catch((err) => {
            swal.fire({
                title: "Error!",
                text: "Couldn't Update your Details",
                icon: "error",
            });
        });

        setTimeout(() => {
            window.location.replace("http://localhost:3000/ViewAdmin");
        }, 2500)
    }

    return (
            <div className="bg">
            <div className="bg-image" style={{backgroundImage: `url(${background})` }}></div>
            <Navbar style={{position: 'fixed', zIndex: '9999'}}/>
            <br/>
            <div className="Payment-form" style={{marginTop: '100px'}}>
                <div class="center"><h2>Update Travel Agency</h2></div>
                <form onSubmit={update}>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="fname" required defaultValue={name} 
                            onChange={(e)=>{
                                setName(e.target.value);
                            }}/>
                    </div>
                    <div className="form-group">
                        <label for="location">Location</label>
                        <input type="text" className="form-control" id="lname" required defaultValue={location}
                        onChange={(e)=>{
                                setLocation(e.target.value);
                            }}/>
                    </div>
                    <div className="form-group">
                        <label for="Email">Email address</label>
                        <input type="email" className="form-control" id="Email1" required defaultValue={email}
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label for="contactNo">Contact Number</label>
                        <input type="text" className="form-control" id="inquiry" required defaultValue={contactNo}
                        onChange={(e)=>{
                            setContactNo(e.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                      <label for="description">Description</label>
                      <textarea className="form-control" id="description" required defaultValue={Description}
                        onChange={(e)=>{
                          setDescription(e.target.value);
                        }}></textarea>
                    </div>
                    <div class="centerb"><button type="submit" className="btn btn-primary">Submit</button></div>
                </form>
            </div>
            <br/>
            <Footer/>
        </div>
    )


}