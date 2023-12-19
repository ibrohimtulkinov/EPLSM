import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Button } from "react-bootstrap";
import End from "../components/End"
import { Link } from "react-router-dom"
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
import { useEffect } from "react";



function Brands() {
  const [products, setProducts] = useState()

  const getProducts = async () => {
    const response = await fetch('https://eplsm.olimjohn.uz/api/brand-list/')
    const data = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  console.log({ products });

  return (
    <>

      <Navbar />

      <div className="bg-image">
        <div className="products-important text-start ">
          <h1 className='products--products '>Brands</h1>
          <p>
            <Link to="/" className='singleProduct_home'> <c className="home-products ">Home <AiOutlineRight /></c> </Link>
            <Link to="/brands" className="singleProduct_home"><c className="products-products">Brands</c></Link>
          </p>
        </div>
      </div>




      <section>

        <div class="row  row-cols-3 row-cols-md-4 row-cols-lg-5 col-md-12  gap-5 mt-5 mx-auto">
          {
            products?.map(item => {
              return <div class="col-md-4 col-sm-4 col-7 div_shadow mx-auto">
                <Link to={`/singlebrand/${item.guid}`}><img src={item?.photo_medium} class="photoofbrands " alt="Photo 1 " /></Link>
                <div class="d-flex justify-content-between pb-4 ">
                  <Link className='brand_link' to="/singlebrand"><span className='brand_text'>{item?.title}</span></Link>
                  <Link to="/singlebrand"><span className='brans_icon'><AiOutlineArrowRight /></span></Link>
                </div>
              </div>
            })
          }

          {/* <div class="col-md-4 col-sm-4 col-7 div_shadow mx-auto">
    <Link to="/singlebrand"><img src={pntgree} class="photoofbrands" alt="Photo 2"/></Link>
    <div class="d-flex justify-content-between pb-4">
      <Link  className='brand_link' to="/singlebrand"><span className='brand_text'>PNTGREE</span></Link>
      <Link to="/singlebrand"><span className='brans_icon'><AiOutlineArrowRight /></span></Link>
  </div>
  </div>
  <div class="col-md-4 col-sm-4 col-7 div_shadow mx-auto">
  <Link to="/singlebrand"><img src={Constructionbrand} class="photoofbrands" alt="Photo 2"/></Link>
  <div class="d-flex justify-content-between pb-4">
      <Link  className='brand_link' to="/singlebrand"><span className='brand_text'>MY-CONSTRUCTION</span></Link>
      <Link to="/singlebrand"><span className='brans_icon'><AiOutlineArrowRight /></span></Link>
  </div>
  </div>
  <div class="col-md-4 col-sm-4 col-7 div_shadow mx-auto">
  <Link to="/singlebrand"><img src={loremipsum} class="photoofbrands" alt="Photo 2"/></Link>
  <div class="d-flex justify-content-between pb-4">
      <Link  className='brand_link' to="/singlebrand"><span className='brand_text'>HIGH-JOURNEY</span></Link>
      <Link to="/singlebrand"><span className='brans_icon'><AiOutlineArrowRight /></span></Link>
  </div>
  </div>
</div>

<div class="row col-md-12  row-cols-3 row-cols-md-4 row-cols-lg-5 gap-5 mt-5 mx-auto">
  <div class="col-md-4 col-sm-4 col-7 div_shadow mx-auto">
   <Link to="/singlebrand"><img src={pntgree} class="photoofbrands " alt="Photo 1 "/></Link>
    <div class="d-flex justify-content-between pb-4 ">
      <Link className='brand_link' to="/singlebrand"><span className='brand_text'>PNTGREE</span></Link>
      <Link to="/singlebrand"><span className='brans_icon'><AiOutlineArrowRight /></span></Link>
  </div>
  </div>
  <div class="col-md-4 col-sm-4 col-7 div_shadow mx-auto">
    <Link to="/singlebrand"><img src={vng} class="photoofbrands" alt="Photo 2"/></Link>
    <div class="d-flex justify-content-between pb-4">
      <Link  className='brand_link' to="/singlebrand"><span className='brand_text'>VNG</span></Link>
      <Link to="/singlebrand"><span className='brans_icon'><AiOutlineArrowRight /></span></Link>
  </div>
  </div>
  <div class="col-md-4 col-sm-4 col-7 div_shadow mx-auto">
  <Link to="/singlebrand"><img src={loremipsum} class="photoofbrands" alt="Photo 2"/></Link>
  <div class="d-flex justify-content-between pb-4">
      <Link  className='brand_link' to="/singlebrand"><span className='brand_text'>HIGH-JOURNEY</span></Link>
      <Link to="/singlebrand"><span className='brans_icon'><AiOutlineArrowRight /></span></Link>
  </div>
  </div>
  <div class="col-md-4 col-sm-4 col-7 div_shadow mx-auto">
  <Link to="/singlebrand"><img src={Constructionbrand} class="photoofbrands" alt="Photo 2"/></Link>
  <div class="d-flex justify-content-between pb-4">
      <Link  className='brand_link' to="/singlebrand"><span className='brand_text'> MY-CONSTRUCTION</span></Link>
      <Link to="/singlebrand"><span className='brans_icon'><AiOutlineArrowRight /></span></Link>
  </div>
  </div>
</div>


<div class="row col-md-12  row-cols-3 row-cols-md-4 row-cols-lg-5 gap-5 mt-5 mx-auto">
  <div class="col-md-4 col-sm-4 col-7 div_shadow mx-auto">
   <Link to="/singlebrand"><img src={Constructionbrand } class="photoofbrands " alt="Photo 1 "/></Link>
    <div class="d-flex justify-content-between pb-4 ">
      <Link className='brand_link' to="/singlebrand"><span className='brand_text'>MY-CONSTRUCTION</span></Link>
      <Link to="/singlebrand"><span className='brans_icon'><AiOutlineArrowRight /></span></Link>
  </div>
  </div>
  <div class="col-md-4 col-sm-4 col-7 div_shadow mx-auto">
    <Link to="/singlebrand"><img src={pntgree} class="photoofbrands" alt="Photo 2"/></Link>
    <div class="d-flex justify-content-between pb-4">
      <Link  className='brand_link' to="/singlebrand"><span className='brand_text'>PNTGREE</span></Link>
      <Link to="/singlebrand"><span className='brans_icon'><AiOutlineArrowRight /></span></Link>
  </div>
  </div>
  <div class="col-md-4 col-sm-4 col-7 div_shadow mx-auto">
  <Link to="/singlebrand"><img src={vng} class="photoofbrands" alt="Photo 2"/></Link>
  <div class="d-flex justify-content-between pb-4">
      <Link  className='brand_link' to="/singlebrand"><span className='brand_text'>VNG</span></Link>
      <Link to="/singlebrand"><span className='brans_icon'><AiOutlineArrowRight /></span></Link>
  </div>
  </div>
  <div class="col-md-4 col-sm-4 col-7 div_shadow mx-auto">
  <Link to="/singlebrand"><img src={loremipsum} class="photoofbrands" alt="Photo 2"/></Link>
  <div class="d-flex justify-content-between pb-4">
      <Link  className='brand_link' to="/singlebrand"><span className='brand_text'>HIGH-JOURNEY</span></Link>
      <Link to="/singlebrand"><span className='brans_icon'><AiOutlineArrowRight /></span></Link>
  </div>
  </div>
</div>

<div class="row col-md-12  row-cols-3 row-cols-md-4 row-cols-lg-5 gap-5 mt-5 mx-auto">
  <div class="col-md-4 col-sm-4 col-7 div_shadow mx-auto">
   <Link to="/singlebrand"><img src={loremipsum} class="photoofbrands " alt="Photo 1 "/></Link>
    <div class="d-flex justify-content-between pb-4 ">
      <Link className='brand_link' to="/singlebrand"><span className='brand_text'>HIGH-JOURNEY</span></Link>
      <Link to="/singlebrand"><span className='brans_icon'><AiOutlineArrowRight /></span></Link>
  </div>
  </div>
  <div class="col-md-4 col-sm-4 col-7 div_shadow mx-auto">
    <Link to="/singlebrand"><img src={Constructionbrand} class="photoofbrands" alt="Photo 2"/></Link>
    <div class="d-flex justify-content-between pb-4">
      <Link  className='brand_link' to="/singlebrand"><span className='brand_text'>MY-CONSTRUCTION </span></Link>
      <Link to="/singlebrand"><span className='brans_icon'><AiOutlineArrowRight /></span></Link>
  </div>
  </div>
  <div class="col-md-4 col-sm-4 col-7 div_shadow mx-auto">
  <Link to="/singlebrand"><img src={pntgree} class="photoofbrands" alt="Photo 2"/></Link>
  <div class="d-flex justify-content-between pb-4">
      <Link  className='brand_link' to="/singlebrand"><span className='brand_text'>PNTGREE</span></Link>
      <Link to="/singlebrand"><span className='brans_icon'><AiOutlineArrowRight /></span></Link>
  </div>
  </div>
  <div class="col-md-4 col-sm-4 col-7 div_shadow mx-auto">
  <Link to="/singlebrand"><img src={vng} class="photoofbrands" alt="Photo 2"/></Link>
  <div class="d-flex justify-content-between pb-4">
      <Link  className='brand_link' to="/singlebrand"><span className='brand_text'>VNG </span></Link>
      <Link to="/singlebrand"><span className='brans_icon'><AiOutlineArrowRight /></span></Link>
  </div>
  </div> */}
        </div>
      </section>



      <div className="container">
        <div className='conter-content mt-5 mb-5'>
          <div className='d-flex'>
            <button className='col-md-3 number__0'>1</button>
            <button className='col-md-3 number__0'>2</button>
            <button className='col-md-3 number__0'>3</button>
            <button className='col-md-4 number__next'>Next</button>
          </div>
        </div>
      </div>

      <div className=' mb-5  brandicons-background'>
        <div className='d-xxl-flex d-xl-flex d-sm-block ms-5'>
          <div className='col-md-3  col-sm-2'>
            <c className="icons__ mt-2"><AiOutlineTrophy /></c>
            <div className='icons_header'>
              <p className='icons__header mt-5'>High Quality</p>
              <p className='icons__text'>crafted from top materials</p>
            </div>
          </div>
          <div className='col-md-3  col-sm-2'>
            <c className="icons__ mt-2"><AiOutlineDownCircle /></c>
            <div className='icons_header'>
              <p className='icons__header mt-5'>Warranty Protection</p>
              <p className='icons__text'>Over 2 years</p>
            </div>
          </div>
          <div className='col-md-3  col-sm-2'>
            <c className="icons__ mt-2"><AiOutlineException /></c>
            <div className='icons_header'>
              <p className='icons__header mt-5'>Free Shipping</p>
              <p className='icons__text'>Order over 150 $</p>
            </div>
          </div>
          <div className='col-md-3  col-sm-2'>
            <c className="icons__ mt-2"><AiOutlineCustomerService /></c>
            <div className='icons_header'>
              <p className='icons__header mt-5'>24 / 7 Support</p>
              <p className='icons__text'>Dedicated support</p>
            </div>
          </div>
        </div>
      </div>

      <End />

    </>
  )
}

export default Brands