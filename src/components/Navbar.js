import React from "react"
import { Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import navLogo from '../assets/img/nav-logo.png'

export default function Navbar() {
    return (

        <nav className="col-md-12 col-6">
            <Link to="/"><Image src={navLogo} alt="" className="nav--icon ms-5 d-none d-sm-block" /></Link>
            <ul className='navbarCenter gap-5'>
                <li >
                    <Link to="/"  className="navigations  col-2 ">Home</Link>
                </li>
                <li >
                    <Link to="/products" className="navigations col-2">Products</Link>
                </li>
                <li >
                   <Link to="/brands" className="navigations col-2">Brands</Link>
                </li>
                <li >
                   <Link to="/catalogs" className="navigations col-2">Catalogs</Link>
                </li>
                <li >
                    <Link to="/blog" className="navigations col-2">Blog</Link>
                </li>
                <li >
                    <Link to="/contact" className="navigations col-2">Contact</Link>
                </li>
            </ul>
        </nav>

    )
}















// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import { Image } from "react-bootstrap"
// import navLogo from '../assets/img/nav-logo.png'

// const NavigationBar = () => {
//   return (
//     <Navbar bg="light" expand="lg">

//       <Navbar.Brand href="/"><Image src={navLogo} alt="" className="nav--icon ms-5" /></Navbar.Brand>

//       <Navbar.Toggle aria-controls="basic-navbar-nav" />

//       <Navbar.Collapse id="basic-navbar-nav">

//         <Nav className="mr-auto ">
//           <Nav.Link href="#home" className="navigations">Home</Nav.Link>
//           <Nav.Link href="#profile" className="navigations">Profile</Nav.Link>
//           <Nav.Link href="#logout" className="navigations">Logout</Nav.Link>
//           <Nav.Link href="#logout" className="navigations">Logout</Nav.Link>
//           <Nav.Link href="#logout" className="navigations">Logout</Nav.Link>
//           <Nav.Link href="#logout" className="navigations">Logout</Nav.Link>
//         </Nav>
    

        

//       </Navbar.Collapse>

//     </Navbar>
//   );
// }

// export default NavigationBar;