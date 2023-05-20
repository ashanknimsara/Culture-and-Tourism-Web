import React, { useState, useEffect } from 'react';
import Navbar from "../common/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UpdateGuideSingleView() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [guide, setGuide] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    category: "",
    languages: "",
    registrationNumber: "",
    validity: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/guide/${id}`)
      .then((response) => {
        console.log(response);
        setData(response.data);
        setGuide(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    setGuide({ ...guide, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/guide/${id}`, guide)
      .then((response) => {
        console.log(response);
        setData(guide);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
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
              <h2>{data.name}</h2>
            </div>
            <div className="card-body" style={{ fontSize: "20px" }}>
              <form onSubmit={handleSubmit}>
                <p>
                  <input
                    type="text"
                    name="email"
                    value={guide.email}
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="mobileNumber"
                    value={guide.mobileNumber}
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="category"
                    value={guide.category}
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="languages"
                    value={guide.languages}
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="registrationNumber"
                    value={guide.registrationNumber}
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="validity"
                    value={guide.validity}
                    onChange={handleChange}
                  />
                </p>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </form>
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
