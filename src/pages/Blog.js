import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import {Button} from "react-bootstrap";
import End from "../components/End"
import {Link} from "react-router-dom"
import {
    AiOutlineRight
} from 'react-icons/ai';


function Blog() {
    return(
   <>

      <Navbar />

            <div className="bg-image  ">
                <div className="products-important text-start "> 
                    <h1 className='products--products '>Blog</h1>
                    <p>
                        <Link to="/" className='singleProduct_home'> <c className="home-products ">Home <AiOutlineRight/></c> </Link> 
                       <Link to="/blog" className="singleProduct_home"><c className="products-products">Blog</c></Link> 
                    </p>
                </div>
            </div>

    </>
    )
}

export default Blog