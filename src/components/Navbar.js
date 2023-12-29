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
            {/* <MDBIcon icon='bars' fas /> */}

            <div><AiOutlineAlignCenter /></div>
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColorThird} navbar className='ms -auto'>

            <MDBNavbarNav className=' me-0 mb-2 mb-lg-0 gap-5'>
              {/* <MDBNavbarItem className='active'> */}
              <Link className="navigations" aria-current='page' to='/' style={{ color: pathname === '/' ? "#b88e2f" : "#000" }}>Home</Link>
              {/* </MDBNavbarItem> */}
              {/* <MDBNavbarItem> */}
              <Link className="navigations" style={{ color: pathname.includes('products') ? "#b88e2f" : "#000" }} to='/products' >Products</Link>
              {/* </MDBNavbarItem> */}
              {/* <MDBNavbarItem> */}
              <Link to='/brands' className="navigations" style={{ color: pathname.includes('brands') ? "#b88e2f" : "#000" }}>Brands</Link>
              {/* </MDBNavbarItem> */}
              {/* <MDBNavbarItem> */}
              <Link to='/categories' className="navigations" style={{ color: pathname.includes('categories') ? "#b88e2f" : "#000" }}>Categories</Link>
              {/* </MDBNavbarItem> */}
              {/* <MDBNavbarItem> */}
              <Link to='/catalogs' className="navigations" style={{ color: pathname.includes('catalogs') ? "#b88e2f" : "#000" }}>Catalogs</Link>
              {/* </MDBNavbarItem> */}
              {/* <MDBNavbarItem> */}
              <Link to='/blog' className="navigations" style={{ color: pathname.includes('blog') ? "#b88e2f" : "#000" }}>Blog</Link>
              {/* </MDBNavbarItem> */}
              {/* <MDBNavbarItem> */}
              <Link to='/contact' className="navigations" style={{ color: pathname.includes('contact') ? "#b88e2f" : "#000" }}>Contact</Link>
              {/* </MDBNavbarItem> */}
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