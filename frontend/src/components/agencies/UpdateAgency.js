import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert2";
import { useParams } from "react-router-dom";
import Navbar from "../common/AdminNavbar";
import Footer from "../common/Footer";


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


export default function UpdateAgency(props) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [Description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    function getAgency() {
      axios
        .get(`http://localhost:5000/Agency/get/${id}`)
        .then((res) => {
          if (res.data.status) {
            setName(res.data.Agency.name);
            setLocation(res.data.Agency.location);
            setEmail(res.data.Agency.email);
            setContactNo(res.data.Agency.contactNo);
            setDescription(res.data.Agency.Description);
            setImage(res.data.Agency.image);
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
    getAgency();
  }, [id]);

  function update(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("email", email);
    formData.append("contactNo", contactNo);
    formData.append("Description", Description);
    formData.append("image", image);

    axios
      .put(`http://localhost:5000/Agency/update/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        swal.fire({
          title: "Success!",
          text: "Updated Successfully",
          icon: "success",
          button: false,
        });
      })
      .catch((err) => {
        swal.fire({
          title: "Error!",
          text: "Couldn't Update your Details",
          icon: "error",
        });
      });

    setTimeout(() => {
      window.location.replace("http://localhost:3000/ViewAdmin");
    }, 2500);
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="bg">

      <Navbar style={{ position: "fixed", zIndex: "9999" }} />
      <br />
      <div className="Payment-form" style={{ marginTop: "100px" }}>
        <div className="center">
          <h2>Update Travel Agency</h2>
        </div>
        <form onSubmit={update}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="fname"
              required
              defaultValue={name}
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
                <option value="">{location}</option>
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
              defaultValue={email}
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
              defaultValue={contactNo}
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
              defaultValue={Description}
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
