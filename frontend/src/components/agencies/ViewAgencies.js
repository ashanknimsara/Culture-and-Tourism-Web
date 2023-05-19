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

  useEffect(() => {
    axios.get("http://localhost:5000/Agency").then((res) => {
      setAgencies(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAgencies = agencies.filter((val) => {
    if (searchTerm === "") {
      return val;
    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    } else if (val.location.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
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
            label="Search for an agency"
            variant="outlined"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        <div className="row1">
          {filteredAgencies.map((agency, index) => (
            <div key={agency._id} className="col-md-4">
              <Card className="mmm">
                <CardContent>
                  <img src={`http://localhost:5000/${agency.image}`} alt={`${agency.name}`} />
                  <Typography variant="h5" component="h2">
                    {agency.name}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {agency.location}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
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
