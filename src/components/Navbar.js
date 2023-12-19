import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";


import navLogo from '../assets/img/nav-logo.png'
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';


export default function App() {
  const [openNavColorThird, setOpenNavColorThird] = useState(false);
 
  return (
    <>

      <MDBNavbar className="p-5 bg-white" expand='lg' light style={{ backgroundColor: '#e3f2fd' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'><img src={navLogo} alt="" className="nav--icon "/></MDBNavbarBrand>
          <MDBNavbarToggler
           
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavColorThird(!openNavColorThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColorThird} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0 gap-5 '>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='/' className="navigations">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/products' className="navigations">Products</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/brands' className="navigations">Brands</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/catalogs' className="navigations">Catalogs</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/blog' className="navigations">Blog</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/contact' className="navigations">Contact</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink><AiOutlineSearch className='nav__icon'/></MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
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