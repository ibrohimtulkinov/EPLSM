import React from "react"
import { Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import searchIcon from '../assets/img/search-icon.png';
import navLogo from '../assets/img/nav-logo.png'

export default function Navbar() {
    return (
        <nav className="">
            <Link to="/"><Image src={navLogo} alt="" className="nav--icon ms-5" /></Link>
            <ul className='navbarCenter'>
                <li >
                    <Link to="/"  className="navigations">Home</Link>
                </li>
                <li >
                    <Link to="/products" className="navigations">Products</Link>
                </li>
                <li >
                   <Link to="/brands" className="navigations">Brands</Link>
                </li>
                <li >
                   <Link to="/catalogs" className="navigations">Catalogs</Link>
                </li>
                <li >
                    <Link to="/blog" className="navigations">Blog</Link>
                </li>
                <li >
                    <Link to="/contact" className="navigations">Contact</Link>
                </li>
                <img className="search-logo" src={searchIcon} alt="" />
            </ul>
        </nav>
    )
}