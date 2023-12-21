// import React, { useState } from 'react';
// import { AiOutlineSearch } from "react-icons/ai";
// import {
//     AiOutlineDownCircle,
//     AiOutlineTrophy,
//     AiOutlineCustomerService,
//     AiOutlineException,
// } from 'react-icons/ai';
// import navLogo from '../assets/img/nav-logo.png';
// import {
//     MDBNavbar,
//     MDBContainer,
//     MDBIcon,
//     MDBNavbarNav,
//     MDBNavbarItem,
//     MDBNavbarLink,
//     MDBNavbarToggler,
//     MDBNavbarBrand,
//     MDBCollapse
// } from 'mdb-react-ui-kit';
// // Initialization for  ES Users
// import { Collapse, initMDB } from "mdb-react-ui-kit";

// initMDB({ Collapse });  

// export default function App() {
//     const [openNavColorThird, setOpenNavColorThird] = useState(false);

//     return (
//         <>
//             <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
//                 <div class="container-fluid">
//                     <a class="navbar-brand" href="#">Navbar w/ text</a>
//                     <button
//                         data-mdb-collapse-init
//                         class="navbar-toggler"
//                         type="button"
//                         data-mdb-target="#navbarText"
//                         aria-controls="navbarText"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                     >
//                         <i class="fas fa-bars"></i>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarText">
//                         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="#">Home</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Features</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Pricing</a>
//                             </li>
//                         </ul>
//                         <span class="navbar-text">
//                             Navbar text with an inline element
//                         </span>
//                     </div>
//                 </div>
//             </nav>

//         </>
//     );
// }