import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ViewAccommodation.css";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const ViewAccommodation = () => {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);
  const [accommodationPackages, setAccommodationPackages] = useState(null);
  const [searchQuery, setSearchQuery] = useState(id);
  

  const fetchAccommodationPackages = async () => {
    try {
      const response = await fetch('http://localhost:5000/AccommodationPackage/get-AccommodationPackage');
      const data = await response.json();
      setAccommodationPackages(data.AccommodationPackages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/Accommodation/${id}`)
      .then((response) => response.json())
      .then((data) => setAccommodation(data.data))
      .catch((error) => console.log(error));

    fetchAccommodationPackages();
  }, [id]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  if (!accommodation) {
    return <div>Loading...</div>;
  }

  // Filter accommodationPackages based on searchQuery
  const filteredAccommodationPackages = accommodationPackages
    ? accommodationPackages.filter((pkg) =>
        pkg.Accommodation_id.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="Accommodation">
      <Navbar style={{ position: 'fixed', zIndex: '9999' }} />
      <div className="article">
        <h2>{accommodation.Hotel_Name}</h2>
        <img src={`http://localhost:5000/${accommodation.image}`} alt={`${accommodation.Hotel_Name}`} />
        <p>{accommodation.location}</p>
        <p>{accommodation.description}</p>
        <br></br>
        <h2>Packages</h2>

        {/* <input type="text" placeholder="Search by Accommodation ID" value={searchQuery} onChange={handleSearch} /> */}

        {filteredAccommodationPackages.length > 0 ? (
          <ul>
            {filteredAccommodationPackages.map(accommodationPackage => (
              <li key={accommodationPackage._id}>
                <h2>{accommodationPackage.package_title}</h2>
                <p>Price Range: {accommodationPackage.Price_Range}</p>
                <p>{accommodationPackage.package_description}</p>
                <p>{accommodationPackage.Package_Offers_Description}</p>
                {/* <p>Accommodation ID: {accommodationPackage.Accommodation_id}</p> */}
              </li>
            ))}
          </ul>
        ) : (
          <p>No packages .</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ViewAccommodation;
