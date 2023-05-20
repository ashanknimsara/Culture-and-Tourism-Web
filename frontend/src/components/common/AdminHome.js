import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import '../../assets/styles/AdminHome.css';
import Navbar from "./AdminNavbar";
import { NavLink } from 'react-router-dom'

function AdminHome() {
  return (
    <div>
      <Navbar/>
      <div className="card-container">
        <Card className="card">
          <CardContent>
            <Typography variant="h5" component="h2">
              Manage Travel Agencies
            </Typography>
            
            <Button variant="contained" color="primary" className="button">
            <NavLink to="/manage/agency">Travel Agencies</NavLink>
            </Button>
          </CardContent>
        </Card>
        <Card className="card">
          <CardContent>
            <Typography variant="h5" component="h2">
              Manage Travel Blog
            </Typography>
            
            <Button variant="contained" color="primary" className="button">
            <NavLink to="manageblog">Blogs</NavLink>
            </Button>
          </CardContent>
        </Card>
        <Card className="card">
          <CardContent>
            <Typography variant="h5" component="h2">
              Manage Accomodations
            </Typography>
            
            <Button variant="contained" color="primary" className="button">
            <NavLink to="#">Accomodations</NavLink>
            </Button>
          </CardContent>
        </Card>
        <Card className="card">
          <CardContent>
            <Typography variant="h5" component="h2">
              Manage Tour Guides
            </Typography>
            
            <Button variant="contained" color="primary" className="button">
            <NavLink to="#">Tour Guides</NavLink>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AdminHome;
