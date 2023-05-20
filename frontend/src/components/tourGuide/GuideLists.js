import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Navabar from "../common/Navbar";
import Footer from "../common/Footer";
import { useNavigate  } from "react-router-dom";

export default function GuideLists() {

  const navigate = useNavigate();

  const [guideList, setGuideList] = useState([])

  console.log(guideList)

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/guide/all")
      .then((res) => {
        console.log(res);
        setGuideList(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
    .delete(`http://localhost:5000/guide/${id}`)
    .then((res) => {
      console.log(res);
      window.location.reload()
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const user = [
    {
      name: "John Smith",
      email: "john123@gmail.com",
      mobileNumber: "07689234782",
      Category: "null",
      languages: "sinhala ,english,tamil",
      registrationNumber: "16383288bv",
      validity: "2025",
    },
    {
      name: "Martin Guptil",
      email: "john123@gmail.com",
      mobileNumber: "07689234782",
      Category: "null",
      languages: "sinhala ,english,tamil",
      registrationNumber: "16383288bv",
      validity: "2025",
    },
    {
      name: "Virat Kholi",
      email: "john123@gmail.com",
      mobileNumber: "07689234782",
      Category: "null",
      languages: "sinhala ,english,tamil",
      registrationNumber: "16383288bv",
      validity: "2025",
    },
    {
      name: "Stive Smith",
      email: "john123@gmail.com",
      mobileNumber: "07689234782",
      Category: "null",
      languages: "sinhala ,english,tamil",
      registrationNumber: "16383288bv",
      validity: "2025",
    },
  ];

  return (
    <div className="container">
      <Navabar />
      {
        <div
          className="card-deck container"
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {guideList?.map((user) => (
            <div class="card" style={{ margin: "5px" }}>
              <div className="card-body">
                <h5 className="card-title">
                  <p>{user.name}</p>
                </h5>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    {" "}
                    <p className=" card-subtitle mb-2 text-muted">
                      Email: <p className="card-text">{user.email}</p>
                    </p>
                  </li>
                  <li class="list-group-item">
                    {" "}
                    <p className=" card-subtitle mb-2 text-muted">
                      Mobile Number:<p>{user.mobileNumber}</p>{" "}
                    </p>
                  </li>
                  <li class="list-group-item">
                    {" "}
                    <p className=" card-subtitle mb-2 text-muted">
                      Category:<p>{user.Category}</p>{" "}
                    </p>
                  </li>
                  <li class="list-group-item">
                    {" "}
                    <p className=" card-subtitle mb-2 text-muted">
                      Language:<p>{user.languages}</p>{" "}
                    </p>
                  </li>
                  <li class="list-group-item">
                    {" "}
                    <p className=" card-subtitle mb-2 text-muted">
                      Registration Number:<p>{user.registrationNumber}</p>
                    </p>
                  </li>
                  <li class="list-group-item">
                    {" "}
                    <p className=" card-subtitle mb-2 text-muted">
                      Validity:<p>{user.validity}</p>{" "}
                    </p>
                  </li>
                 
                </ul>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary" onClick={() => navigate(`/viewGuide/${user._id}`)}>View</button>
                <button className="btn btn-danger mx-3" onClick={() => handleDelete(user._id)}>Delete</button>
              </div>
            </div>
          ))}
          {guideList?.length === 0 && <p>No guides to display</p>}
        </div>
      }
     
    </div>
  );
}
