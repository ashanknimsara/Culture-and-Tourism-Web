import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./AgencyDetails.css";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const AgencyDetails = () => {
  const [agency, setAgency] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/Agency/get/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch agency details.");
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.Agency) {
          setAgency(data.Agency);
        } else {
          throw new Error("Invalid response data.");
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!agency) {
    return (
      <div>
        <Navbar style={{ position: 'fixed', zIndex: '9999' }} />
        <div>Loading...</div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar style={{ position: 'fixed', zIndex: '9999' }} />
      <div className="agency">
        <h2>{agency.name}</h2>
        <img src={`http://localhost:5000/${agency.image}`} alt={agency.name} />
        <p><h4>{agency.Description}</h4></p>
        <h3>Contact Info :</h3>
        <h4>
          <a href={`mailto:${agency.email}`}>{agency.email}</a>
        </h4>
        <h4>
          <a href={`tel:${agency.contactNo}`}>{agency.contactNo}</a>
        </h4>
      </div>
      <Footer />
    </div>
  );
};

export default AgencyDetails;
