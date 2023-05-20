import "../../assets/styles/navbar.css"

import React, { useEffect, useState } from "react";
import { NavLink , Link } from 'react-router-dom'

import { ReactComponent as Hamburger } from '../../assets/images/menu.svg'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const [name, setName] = useState(null);
    useEffect(() => {
        fetch("http://localhost:5000/admin/profile", {
            credentials: "include",
        }).then((response) => {
            response.json().then((userImp) => {
                setName(userImp.name);
            });
        });
    }, []);
    
  function logout() {
    fetch("http://localhost:5000/admin/logout", {
        credentials: "include",
        method: "POST",
    })
    .then(() => {
        window.location.href = "/login";
    })
    .catch(error => console.log(error));
}

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h5>Admin Panel</h5>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
       <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/admin">Dashbord</NavLink>
            </li>
            <li>
              <NavLink to="/manage/manageblog">Travel Blog</NavLink>
            </li>
            <li>
              <NavLink to="/manage/agency">Travel Agencies</NavLink>
            </li>
            <li>
              <NavLink to="/manage/Accommendation">Accomodations</NavLink>
            </li>
            <li>
              <NavLink to="/tour-guides">Tour Guides</NavLink>
            </li>
            <div className="nav__credention__btn__section">
                    {name && (
                        <>
                            <button className="nav__btn" onClick={logout}>
                                logout
                            </button>
                        </>
                    )}
                    {!name && (
                        <>
                            <Link to="/login">
                                <button className="nav__btn">login</button>
                            </Link>
                            <Link to="/Signup">
                                <button className="nav__btn">register</button>
                            </Link>
                        </>
                    )}
                </div>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar