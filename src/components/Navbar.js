import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
// import { MDBNavbar, MDBContainer, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBIcon } from 'mdb-react-ui-kit';

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

      <MDBNavbar className="p-5 bg-white justify-content-between h-100" expand='lg' light style={{ backgroundColor: '#e3f2fd' }}>
        <MDBContainer fluid>
          <div>
            <MDBNavbarBrand href='/'><img src={navLogo} alt="" className="nav--icon" /></MDBNavbarBrand>
          </div>
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
          <MDBCollapse open={openNavColorThird} navbar className='ms -auto'>

            <MDBNavbarNav className=' me-0 mb-2 mb-lg-0 gap-5'>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='/' className="navigations">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/products' className="navigations ">Products</MDBNavbarLink>
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
            </MDBNavbarNav>

            <MDBNavbarItem className='div-icon'>
              <MDBNavbarLink className={openNavColorThird ? 'nav_icon_open' : ''}><AiOutlineSearch style={{ width: '30px' }} className='nav__icon' /></MDBNavbarLink>
            </MDBNavbarItem>

          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}