import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import '../../assets/styles/AdminHome.css';
import Navbar from "../common/AdminNavbar";
import { NavLink } from 'react-router-dom'

function ManageAccommendation() {
  return (
    <div>
      <Navbar/>
      <div className="card-container">
        <Card className="card">
          <CardContent>
            <Typography variant="h5" component="h2">
              Add Accommendation
            </Typography>
            <Typography color="textSecondary">
              Click the button below to add a new Accommendation.
            </Typography>
            <Button variant="contained" color="primary" className="button">
            <NavLink to="/NewAccommodation">Add Accommendation</NavLink>
            </Button>
          </CardContent>
        </Card>
        <Card className="card">
          <CardContent>
            <Typography variant="h5" component="h2">
              View All Accommendation
            </Typography>
            <Typography color="textSecondary">
              Click the button below to view all Accommendation.
            </Typography>
            <Button variant="contained" color="primary" className="button">
            <NavLink to="/admin/ManageAccommodation/">View Accommendation</NavLink>
            </Button>
          </CardContent>
        </Card>
        <Card className="card">
          <CardContent>
            <Typography variant="h5" component="h2">
              View All Accommendation Package
            </Typography>
            <Typography color="textSecondary">
              Click the button below to view all Accommendation Package.
            </Typography>
            <Button variant="contained" color="primary" className="button">
            <NavLink to="/admin/ManageAccommodationPackage/">View Accommendation Package</NavLink>
            </Button>
          </CardContent>
        </Card>
        
      </div>
    </div>
  );
}

export default ManageAccommendation;
