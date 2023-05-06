import React,{useState} from "react";
import axios from "axios";
import "./AddAgency.css";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";


export default function AddAgency(){

    const [name, setNname]= useState("");
    const [location, setLocation]= useState("");
    const [email, setEmail]= useState("");
    const [contactNo, setContactNo]= useState("");
    const [Description, setDescription]= useState("");

    const sendData=async(e)=>{
        e.preventDefault();
        
        let newAgency = {
            name: name,
            location: location,
            email: email,
            contactNo: contactNo,
            Description: Description
        }

        axios.post("http://localhost:5000/Agency/add",newAgency).then(()=>{
            alert("Agency Added")


        }).catch((err)=>{
            alert(err)
        })
        
        setNname("");
        setLocation("");
        setEmail("");
        setContactNo("");
        setDescription("");

    }
    return(
        <>
        <Navbar/>
        <br/>
        <div className="Payment-form ">
            <div class="center"><h2>Add Travel Agency</h2></div>
            <form onSubmit={sendData}>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="fname" required placeholder="Enter Agency Name" 
                        onChange={(e)=>{
                            setNname(e.target.value);
                        }}/>
                </div>
                <div className="form-group">
                    <label for="location">Location</label>
                    <input type="text" className="form-control" id="lname" required placeholder="Enter location"
                    onChange={(e)=>{
                            setLocation(e.target.value);
                        }}/>
                </div>
                <div className="form-group">
                    <label for="Email">Email address</label>
                    <input type="email" className="form-control" id="Email1" required placeholder="Enter email"
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label for="contactNo">Contact Number</label>
                    <input type="text" className="form-control" id="inquiry" required placeholder="Enter Your Contact Number"
                    onChange={(e)=>{
                        setContactNo(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                  <label for="description">Description</label>
                  <textarea className="form-control" id="description" required placeholder="Enter Your Description"
                    onChange={(e)=>{
                      setDescription(e.target.value);
                    }}></textarea>
                </div>

                <div class="centerb"><button type="submit" className="btn btn-primary">Submit</button></div>
            </form>
        </div>
        <br/>
        <Footer/>
        </>

    )
}