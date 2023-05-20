import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer"
import myImage from "../assets/images/travel2.jpg";


function LandingPage() {
  
  
  return (
    <div>
      <Navbar />
      <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
        <img alt="Travel background"
          src={myImage}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
