import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import {Button} from "react-bootstrap";
import End from "../components/End"
import {Link} from "react-router-dom"
import {
    AiOutlineRight,
    AiOutlineArrowRight,
    AiOutlineTrophy,
    AiOutlineCustomerService,
    AiOutlineException,
    AiOutlineDownCircle
} from 'react-icons/ai';
import vng from '../assets/img/Vng_brand.png';
import pntgree from '../assets/img/Pntgree_brand.png';
import loremipsum from '../assets/img/Loremipsum_brand.png';
import Constructionbrand from '../assets/img/Constructionbrand.png';


function Brands() {
    return(
   <>

      <Navbar />

            <div className="bg-image">
                <div className="products-important text-start ">
                    <h1 className='products--products '>Brands</h1>
                    <p>
                        <Link to="/" className='singleProduct_home'> <c className="home-products ">Home <AiOutlineRight/></c> </Link> 
                       <Link to="/brands" className="singleProduct_home"><c className="products-products">Brands</c></Link> 
                    </p>
                </div>
            </div>

            <section>
            <div className='cotainer brand-under d-flex mt-5'>
            
                    <div className='col-md-2 col-2 brands-shadow'>
                         <Link to="/singlebrand" ><img src={vng} alt="" className='vng_photo' /></Link>
                        <div className='d-flex'>
                          <Link   to="/singlebrand" className='link-decoration'><p className='brand-text'>VNG</p></Link>
                          <Link  to="/singlebrand"><p className='vng-icon'><AiOutlineArrowRight /></p></Link>
                        </div>
                    </div>
                    <div className='col-md-2  brands-shadow'>
                        <Link><img src={pntgree} alt=""  className='vng_photo'/></Link>
                        <div className='d-flex'>
                          <Link className='link-decoration'><p className='brand-text'>PNTGREE</p></Link>
                          <Link><p className='pntgree-icon'><AiOutlineArrowRight /></p></Link>
                        </div>
                    </div>
                    <div className='col-md-2  brands-shadow'>
                        <Link><img src={Constructionbrand} alt="" className='constructive_photo' /></Link>
                        <div className='d-flex'>
                          <Link className='link-decoration'><p className='brand-text'>MY-CONSTRUCTION</p></Link>
                          <Link><p className='Constructionbrand-icon'><AiOutlineArrowRight /></p></Link>
                        </div>
                    </div>
                    <div className='col-md-2  brands-shadow'>
                        <Link><img src={loremipsum} alt="" className='vng_photo' /></Link>
                        <div className='d-flex'>
                          <Link className='link-decoration'><p className='brand-text'>HIGH-JOURNEY</p></Link>
                          <Link><p className='loremipsum-icon'><AiOutlineArrowRight /></p></Link>
                        </div>
                    </div>
            
            </div>
            </section>

            <section>
            <div className='cotainer brand-under d-flex mt-5'>
            
                    <div className='col-md-2 brands-shadow'>
                         <Link><img src={pntgree} alt="" className='vng_photo' /></Link>
                        <div className='d-flex'>
                          <Link className='link-decoration'><p className='brand-text'>PNTGREE</p></Link>
                          <Link><p className='pntgree-icon'><AiOutlineArrowRight /></p></Link>
                        </div>
                    </div>
                    <div className='col-md-2  brands-shadow'>
                        <Link><img src={vng} alt=""  className='vng_photo'/></Link>
                        <div className='d-flex'>
                          <Link className='link-decoration'><p className=' brand-text'>VNG</p></Link>
                          <Link><p className=' vng-icon'><AiOutlineArrowRight /></p></Link>
                        </div>
                    </div>
                    <div className='col-md-2  brands-shadow'>
                        <Link><img src={loremipsum} alt="" className='vng_photo' /></Link>
                        <div className='d-flex'>
                          <Link className='link-decoration'><p className='brand-text'>HIGH-JOURNEY</p></Link>
                          <Link><p className='loremipsum-icon'><AiOutlineArrowRight /></p></Link>
                        </div>
                    </div>
                    <div className='col-md-2  brands-shadow'>
                        <Link><img src={Constructionbrand} alt="" className='constructive_photo' /></Link>
                        <div className='d-flex'>
                          <Link className='link-decoration'><p className='brand-text'>MY-CONSTRUCTION</p></Link>
                          <Link><p className='Constructionbrand-icon'><AiOutlineArrowRight /></p></Link>
                        </div>
                    </div>
            
            </div>
            </section>

            <section>
            <div className='cotainer brand-under d-flex mt-5'>
            
                    <div className='col-md-2 brands-shadow'>
                         <Link><img src={Constructionbrand} alt="" className='constructive_photo' /></Link>
                        <div className='d-flex'>
                          <Link className='link-decoration'><p className='brand-text'>MY-CONSTRUCTION</p></Link>
                          <Link><p className='Constructionbrand-icon'><AiOutlineArrowRight /></p></Link>
                        </div>
                    </div>
                    <div className='col-md-2  brands-shadow'>
                        <Link><img src={pntgree} alt=""  className='vng_photo'/></Link>
                        <div className='d-flex'>
                          <Link className='link-decoration'><p className='brand-text'>PNTGREE</p></Link>
                          <Link><p className='pntgree-icon'><AiOutlineArrowRight /></p></Link>
                        </div>
                    </div>
                    <div className='col-md-2  brands-shadow'>
                        <Link><img src={vng} alt="" className='vng_photo' /></Link>
                        <div className='d-flex'>
                          <Link className='link-decoration'><p className='brand-text'>VNG</p></Link>
                          <Link><p className='vng-icon'><AiOutlineArrowRight /></p></Link>
                        </div>
                    </div>
                    <div className='col-md-2  brands-shadow'>
                        <Link><img src={loremipsum} alt="" className='vng_photo' /></Link>
                        <div className='d-flex'>
                          <Link className='link-decoration'><p className='brand-text'>HIGH-JOURNEY</p></Link>
                          <Link><p className='loremipsum-icon'><AiOutlineArrowRight /></p></Link>
                        </div>
                    </div>
            
            </div>
            </section>

            <section>
            <div className='cotainer brand-under d-flex mt-5'>
            
                    <div className='col-md-2 brands-shadow'>
                         <Link><img src={loremipsum} alt="" className='vng_photo' /></Link>
                        <div className='d-flex'>
                          <Link className='link-decoration'><p className='brand-text'>HIGH-JOURNEY</p></Link>
                          <Link><p className='loremipsum-icon'><AiOutlineArrowRight /></p></Link>
                        </div>
                    </div>
                    <div className='col-md-2  brands-shadow'>
                        <Link><img src={Constructionbrand} alt=""  className='constructive_photo'/></Link>
                        <div className='d-flex'>
                          <Link className='link-decoration'><p className='brand-text'>MY-CONSTRUCTION</p></Link>
                          <Link><p className='Constructionbrand-icon'><AiOutlineArrowRight /></p></Link>
                        </div>
                    </div>
                    <div className='col-md-2  brands-shadow'>
                        <Link><img src={pntgree} alt="" className='vng_photo' /></Link>
                        <div className='d-flex'>
                          <Link className='link-decoration'><p className='brand-text'>PNTGREE</p></Link>
                          <Link><p className='pntgree-icon'><AiOutlineArrowRight /></p></Link>
                        </div>
                    </div>
                    <div className='col-md-2  brands-shadow'>
                        <Link><img src={vng} alt="" className='vng_photo' /></Link>
                        <div className='d-flex'>
                          <Link className='link-decoration'><p className='brand-text'>VNG</p></Link>
                          <Link><p className='vng-icon'><AiOutlineArrowRight /></p></Link>
                        </div>
                    </div>
            
            </div>
            </section>

            <div className="container">
                <div className='conter-content mt-5 mb-5'>
                    <div className='d-flex'>
                        <div className='col-md-3 number__0'>1</div>
                        <div className='col-md-3 number__0'>2</div>
                        <div className='col-md-3 number__0'>3</div>
                        <div className='col-md-4 number__next'>Next</div>
                    </div>
                </div>
            </div>


            <div className='mb-5 brandicons-background'>
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

export default Brands