import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap'
import { Component } from 'react'
import React from 'react'
import NetflixLogo from "../assets/netflix_logo.png"
import Lens from "../assets/images.png"
import Bell from "../assets/bell.png"
import Kids from "../assets/kids_icon.png"
import { Link, withRouter } from "react-router-dom" 

class NavBar extends React.Component {



  render() {

    return <>


      <nav style={{ zIndex: 1 }} className="navbar navbar-expand-lg navbar-dark  bd-navbar">
        <a className="navbar-brand" href="#"><img className="img" src={NetflixLogo} alt height={50} /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <Link to="/series">
            <li className="nav-item">
              <p className="nav-link">TV Shows</p>
              
            </li>
              </Link>
            <li className="nav-item">
              <a className="nav-link" href="#movies">Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#recently-added">Recently Added</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#my-list">My List</a>
            </li>
          </ul>
          <ul className="nav justify-content-end">
            <li className="nav-item mt-2">
              <a href="#"><img className="img" src={Lens} width={30} /></a>
              <div className="btn-group">
              </div></li>
            <li id="kids" className="nav-item mt-1 text muted">
              <a className="nav-link" href="#">KIDS</a>
            </li>
            <li className="nav-item mt-2">
              <a href="#"><img className="img" src={Bell} width={20} /></a>
              <div className="btn-group">
              </div></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className="img" src={Kids} alt width={35} height={30} />
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#"><img className="img" src="assets\avatar.png" alt width={40} />Me</a>
                <a className="dropdown-item" href="#"><img className="img" src="assets\kids_icon.png" alt width={40} />Kids</a>
                <a className="dropdown-item" href="editProfile.html">Manage profiles</a>
                <a className="dropdown-item" href="accountSetting.html">Account</a>
                <a className="dropdown-item" href="#">Help Center</a>
                <a className="dropdown-item" href="#">Sign Out of Netflix</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>




  }
}

export default withRouter(NavBar)