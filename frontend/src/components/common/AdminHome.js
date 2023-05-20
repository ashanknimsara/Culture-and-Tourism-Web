import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import '../../assets/styles/AdminHome.css';
import Navbar from './AdminNavbar';
import { NavLink, useNavigate } from 'react-router-dom';


function AdminHome() {
  const [name, setName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/admin/profile', {
      credentials: 'include',
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch user profile.');
        }
      })
      .then((userImp) => {
        setName(userImp.name);
      })
      .catch((error) => {
        console.error(error);
        // Handle the error or redirect to the login page
        navigate('/login');
      });
  }, [navigate]);

  if (!name) {
    return null; // You can render a loading spinner or message here if needed
  }

  return (
    <div>
      <Navbar />
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
              <NavLink to="/manage/manageblog">Blogs</NavLink>
            </Button>
          </CardContent>
        </Card>
        <Card className="card">
          <CardContent>
            <Typography variant="h5" component="h2">
              Manage Accommodations
            </Typography>
            
            <Button variant="contained" color="primary" className="button">
              <NavLink to="/manage/Accommendation">Accommodations</NavLink>
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
