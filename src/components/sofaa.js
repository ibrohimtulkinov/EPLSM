import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Image } from "react-bootstrap"
import navLogo from '../assets/img/nav-logo.png'
import { Link } from "react-router-dom"

const NavigationBar = () => {
  return (
    <Navbar>

      <Navbar.Brand href="/"><Image src={navLogo} alt="" className="nav--icon " /></Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-center navbar-vvv ">

        <Nav className="mr-auto gap-5 ">
          <Link to="/"  className="navigations  col-2 ">Home</Link>
          <Link to="/products" className="navigations col-2">Products</Link>
          <Link to="/brands" className="navigations col-2">Brands</Link>
          <Link to="/catalogs" className="navigations col-2">Catalogs</Link>
          <Link to="/blog" className="navigations col-2">Blog</Link>
          <Link to="/contact" className="navigations col-2">Contact</Link>
        </Nav>
    

        

      </Navbar.Collapse>

    </Navbar>
  );
}

export default NavigationBar;