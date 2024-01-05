import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
// import { MDBNavbar, MDBContainer, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBIcon } from 'mdb-react-ui-kit';
import { AiOutlineAlignCenter } from "react-icons/ai";
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
import { Link, useLocation } from 'react-router-dom';


export default function App() {
  const [openNavColorThird, setOpenNavColorThird] = useState(false);
  const { pathname } = useLocation()
  console.log({ pathname });
  return (
    <>

      <MDBNavbar className="p-4  bg-white justify-content-between h-100" expand='lg' light style={{ backgroundColor: '#e3f2fd' }}>
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

            <div><AiOutlineAlignCenter /></div>
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColorThird} navbar className='ms -auto'>

            <MDBNavbarNav className=' me-0 mb-2 mb-lg-0 gap-5'>
              <Link className={pathname === '/' ? 'navigationActive' : 'navigations'} aria-current='page' to='/'>Home</Link>
              <Link className={pathname.includes('products') ? 'navigationActive' : 'navigations'} to='/products' >Products</Link>
              <Link className={pathname.includes('brands') ? 'navigationActive' : 'navigations'} to='/brands'>Brands</Link>
              <Link className={pathname.includes('categories') ? 'navigationActive' : 'navigations'} to='/categories'>Categories</Link>
              <Link className={pathname.includes('catalogs') ? 'navigationActive' : 'navigations'} to='/catalogs'>Catalogs</Link>
              <Link className={pathname.includes('blog') ? 'navigationActive' : 'navigations'} to='/blog'>Blog</Link>
              <Link className={pathname.includes('contact') ? 'navigationActive' : 'navigations'} to='/contact'>Contact</Link>
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