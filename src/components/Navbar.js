import React from "react"
import { Image } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="">
            <Link to="/"><Image src="./img/nav-logo.png" alt="" className="nav--icon ms-5" /></Link>
            <ul>
                <li >
                    <Link to="/"  className="navigations">Home</Link>
                </li>
                <li >
                    <Link to="/products" className="navigations">Products</Link>
                </li>
                <li >
                    <a href="" className="navigations">Brands</a>
                </li>
                <li >
                    <a href="" className="navigations">Catalogs</a>
                </li>
                <li >
                    <a href="" className="navigations">Blog</a>
                </li>
                <li >
                    <a href="" className="navigations">Contact</a>
                </li>
                <img className="search-logo" src="./img/search-icon.png" alt="" />
            </ul>
        </nav>
    )
}