import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import '../assets/styles/AdminHome.css';
import Navbar from "./common/AdminNavbar";
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
              Manage Blogs
            </Typography>
            
            <Button variant="contained" color="primary" className="button">
            <NavLink to="#">Blogs</NavLink>
            </Button>
          </CardContent>
        </Card>
        <Card className="card">
          <CardContent>
            <Typography variant="h5" component="h2">
              Card 3
            </Typography>
            <Typography color="textSecondary">
              Some text for card 3.
            </Typography>
            <Button variant="contained" color="primary" className="button">
              Button 3
            </Button>
          </CardContent>
        </Card>
        <Card className="card">
          <CardContent>
            <Typography variant="h5" component="h2">
              Card 4
            </Typography>
            <Typography color="textSecondary">
              Some text for card 4.
            </Typography>
            <Button variant="contained" color="primary" className="button">
              Button 4
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AdminHome;
