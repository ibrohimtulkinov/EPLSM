import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import {Button} from "react-bootstrap";
import End from "../components/End"
import {Link} from "react-router-dom"
import {
    AiOutlineRight
} from 'react-icons/ai';
import vng from '../assets/img/Vng_brand.png';
import pntgree from '../assets/img/Pntgree_brand.png';
import loremipsum from '../assets/img/Loremipsum_brand.png';
import Constructionbrand from '../assets/img/Constructionbrand.png';
import {
    AiOutlineDownCircle,
    AiOutlineTrophy,
    AiOutlineCustomerService,
    AiOutlineException,
} from 'react-icons/ai';


function Catalogs() {
    return(
   <>

      <Navbar />

            <div className="bg-image ">
                <div className="products-important text-start ">
                    <h1 className='products--products '>Catalogs</h1>
                    <p>
                        <Link to="/" className='singleProduct_home'> <c className="home-products ">Home <AiOutlineRight/></c> </Link> 
                       <Link to="/catalogs" className="singleProduct_home"><c className="products-products">Catalogs</c></Link> 
                    </p>
                </div>
            </div>
            <section>
                <div className='row'>
                    <div className='col-md-3 ms-5'><img src={vng} alt="" /></div>
                    <div className='col-md-6 '>
                      <p className='catalog-vng'>VNG</p>
                      <div className='border-top catalog-border'></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 ms-5'><img src={pntgree} alt="" /></div>
                    <div className='col-md-6 '>
                      <p className='catalog-pntgree'>PNTGREE</p>
                      <div className='border-top catalog-border'></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 ms-5'><img src={Constructionbrand} alt="" /></div>
                    <div className='col-md-6 '>
                      <p className='catalog-construction'>MY-CONSTRUCTION</p>
                      <div className='border-top catalog-border'></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 ms-5'><img src={loremipsum} alt="" /></div>
                    <div className='col-md-6 '>
                      <p className='catalog-loremipsum'>HIGH-JOURNEY</p>
                      <div className='border-top catalog-border'></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 ms-5'><img src={pntgree} alt="" /></div>
                    <div className='col-md-6 '>
                      <p className='catalog-pntgree'>PNTGREE</p>
                      <div className='border-top catalog-border'></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 ms-5'><img src={Constructionbrand} alt="" /></div>
                    <div className='col-md-6 '>
                      <p className='catalog-construction'>MY-CONSTRUCTION</p>
                      <div className='border-top catalog-border'></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 ms-5'><img src={loremipsum} alt="" /></div>
                    <div className='col-md-6 '>
                      <p className='catalog-loremipsum'>HIGH-JOURNEY</p>
                      <div className='border-top catalog-border'></div>
                    </div>
                </div>
            </section>


            <div className=' brands__background'>
                <div className='d-flex'>
                    <div className='col-md-3 '>
                        <c className="icons__ mt-2 ms-5"><AiOutlineTrophy/></c>
                        <div className='icons_header'>
                            <p className='icons__header mt-5'>High Quality</p>
                            <p className='icons__text'>crafted from top materials</p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <c className="icons__ mt-2"><AiOutlineDownCircle/></c>
                        <div className='icons_header'>
                            <p className='icons__header mt-5'>Warranty Protection</p>
                            <p className='icons__text'>Over 2 years</p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <c className="icons__ mt-2"><AiOutlineException/></c>
                        <div className='icons_header'>
                            <p className='icons__header mt-5'>Free Shipping</p>
                            <p className='icons__text'>Order over 150 $</p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <c className="icons__ mt-2"><AiOutlineCustomerService/></c>
                        <div className='icons_header'>
                            <p className='icons__header mt-5'>24 / 7 Support</p>
                            <p className='icons__text'>Dedicated support</p>
                        </div>
                    </div>
                </div>
            </div>

            <End/>

    </>
    )
}

export default Catalogs