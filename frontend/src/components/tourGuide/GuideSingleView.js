import React from 'react'
import Navabar from "../common/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function GuideSingleView() {
    const [data, setData] = useState({})
    useEffect(()=>{
     axios.get("").then((response)=>{
     console.log(response)
     setData(response.data)
     }).catch((error)=>(
        console.log(error)
     ))
    },[])

    const testObj = {
      name: "John Smith",
      email: "john123@gmail.com",
      mobileNumber: "07689234782",
      Category: "null",
      languages: "sinhala ,english,tamil",
      registrationNumber: "16383288bv",
      validity: "2025",
    };

  return (
    <div>
      <Navabar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div style={{ textAlign: "center", width: "50%" }}>
          <h1>Guide Profile</h1>
          <hr />
          <div className="card">
            <div className="card-header">
              <h2>{testObj.name}</h2>
            </div>
            <div
              className="card-body"
              style={{fontSize:'20px'}}
            >
              <p>Email: {testObj.email}</p>
              <p>Mobile Number: {testObj.mobileNumber}</p>
              <p>Category: {testObj.Category}</p>
              <p>Languages: {testObj.languages}</p>
              <p>Registration Number: {testObj.registrationNumber}</p>
              <p>Validity: {testObj.validity}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
