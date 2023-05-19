import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Navabar from "../common/Navbar";
import axios from "axios";

const GuideForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [Category, setCategory] = useState("");
  const [languages, setlanguages] = useState("");
  const [registrationNumber, setregistrationNumber] = useState("");
  const [validity, setvalidity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Mobile Number:", mobileNumber);
    axios
      .post(" ", {
        name: name,
        email: email,
        mobileNumber: mobileNumber,
        Category: Category,
        languages: languages,
        registrationNumber: registrationNumber,
        validity: validity,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navabar />
      <div className="register-form">
        <h2 style={{ margin: "20px" }}>Register</h2>
        <Form onSubmit={handleSubmit} style={{ margin: "20px" }}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label className="form-label">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formMobileNumber">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formId">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your ID"
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formMobileNumber">
            <Form.Label>languages</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your mobile number"
              value={languages}
              onChange={(e) => setlanguages(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formMobileNumber">
            <Form.Label>registrationNumber</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your mobile number"
              value={registrationNumber}
              onChange={(e) => setregistrationNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formMobileNumber">
            <Form.Label>validity state of license</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your mobile number"
              value={validity}
              onChange={(e) => setvalidity(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" style={{margin:'10px'}}>
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default GuideForm;
