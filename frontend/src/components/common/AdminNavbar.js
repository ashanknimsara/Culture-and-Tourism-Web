import "../../assets/styles/navbar.css"
import React, {useState } from "react";
import { NavLink } from 'react-router-dom'

import { ReactComponent as Hamburger } from '../../assets/images/menu.svg'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h3>Admin Panel</h3>
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
              <NavLink to="/blog">Travel Blog</NavLink>
            </li>
            <li>
              <NavLink to="/manage/agency">Travel Agencies</NavLink>
            </li>
            <li>
              <NavLink to="/accomodations">Accomodations</NavLink>
            </li>
            <li>
              <NavLink to="/tour-guides">Tour Guides</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar