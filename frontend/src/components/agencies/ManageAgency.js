import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import '../../assets/styles/AdminHome.css';
import Navbar from "../common/AdminNavbar";
import { NavLink } from 'react-router-dom'

function ManageAgency() {
  return (
    <div>
      <Navbar/>
      <div className="card-container">
        <Card className="card">
          <CardContent>
            <Typography variant="h5" component="h2">
              Add Travel Agency
            </Typography>
            <Typography color="textSecondary">
              Click the button below to add a new travel agency.
            </Typography>
            <Button variant="contained" color="primary" className="button">
            <NavLink to="/AddAgency">Add Agency</NavLink>
            </Button>
          </CardContent>
        </Card>
        <Card className="card">
          <CardContent>
            <Typography variant="h5" component="h2">
              View All Agencies
            </Typography>
            <Typography color="textSecondary">
              Click the button below to view all agencies.
            </Typography>
            <Button variant="contained" color="primary" className="button">
            <NavLink to="/ViewAdmin">View Agencies</NavLink>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ManageAgency;
