import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import React, { useEffect, useState } from "react";
import "./Accommodation.css";


function Accommodation() {
  const [accommodations, setaccommodations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Accommodation/allAccommodation")
      .then((response) => response.json())
      .then((data) => setaccommodations(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
        <Navbar style={{position: 'fixed', zIndex: '9999'}}/>
        <div className="Accommodation-grid"> {/* Add the article-grid class here */}
      {accommodations.map((accommodation) => (
        <div className="article-card" key={accommodation._id}> {/* Add the article-card class here */}
          <img src={`http://localhost:5000/${accommodation.image}`} alt={`${accommodation.Hotel_Name}`} /> {/* Add the alt attribute for accessibility */}
          <h2>{accommodation.Hotel_Name}</h2>
          <p>{accommodation.location}</p>
          <a href={`/Accommodation/${accommodation._id}`}>More Details</a> {/* Add a link to the full article */}
        </div>
      ))}
    </div>
        
        <Footer/>
    </div>
    
  );
}

export default Accommodation;
