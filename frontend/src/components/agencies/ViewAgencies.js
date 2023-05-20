import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ViewAgencies.css";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function ViewAgencies() {
  const [agencies, setAgencies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/Agency").then((res) => {
      setAgencies(res.data);
      const uniqueLocations = [...new Set(res.data.map(agency => agency.location))];
      setLocations(uniqueLocations);
    });
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
    setSearchTerm('');
  };

  const filteredAgencies = agencies.filter((agency) => {
    if (selectedLocation !== '' && agency.location !== selectedLocation) {
      return false;
    }

    if (searchTerm === '') {
      return true;
    }

    const searchValue = searchTerm.toLowerCase();
    return (
      agency.name.toLowerCase().includes(searchValue) ||
      agency.location.toLowerCase().includes(searchValue)
    );
  });

  return (
    <div className="bg">
      <Navbar style={{ position: 'fixed', zIndex: '9999' }} />
      <div className="container1">
        <div className="center1">
          <br />
          <h1>Travel Agencies</h1>
        </div>
        <div className="center2">
          <TextField
            className="textfield"
            label="Search for an agency"
            variant="outlined"
            value={searchTerm}
            onChange={handleChange}
          />
          
        </div>
        <div className="filter">
        <select
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="">All Locations</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="row1">
          {filteredAgencies.map((agency, index) => (
            <div key={agency._id} className="col-md-4">
              <Card className="mmm">
                <CardContent>

                  <img className="card-img" src={`http://localhost:5000/${agency.image}`} alt={`${agency.name}`} />
                  <Typography className="card-title" variant="h5" component="h2">

                    {agency.name}
                  </Typography>
                  <Typography className="card-location" color="textSecondary" gutterBottom>
                    {agency.location}
                  </Typography>

                  <Typography className="card-description" color="textSecondary" gutterBottom>
                    {agency.description}
                  </Typography>
                  <Typography className="card-contact" color="textSecondary">
                    <Link to={`/AgencyByID/${agency._id}`}>More Details</Link>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <br />
      </div>
      <Footer />
    </div>
  );
}
