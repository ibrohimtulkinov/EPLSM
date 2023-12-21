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
import axios from 'axios';


function Brands() {
  const [brands, setBrands] = useState()
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [count, setCount] = useState(2);

  useEffect(() => {
    getBrands();
  }, [limit, page]);

  const getBrands = async () => {
    const offset = (page - 1) * limit;
    axios
      .get('https://eplsm.olimjohn.uz/api/brand-list/', {
        params: { limit, p: true, offset },
      })
      .then((r) => {
        setCount(r?.data?.count);
        setBrands(r?.data?.results);
      });
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(count / limit);

    if (totalPages <= 4) {
      return Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`col-md-3 number__${page === index + 1 ? 'active' : '0'}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ));
    }

    const pagesToShow = 2;
    const pages = [];

    // Show the first 2 pages
    for (let i = 1; i <= pagesToShow; i++) {
      pages.push(
        <button
          key={i}
          className={`col-md-2 number__${page === i ? 'active' : '0'}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    // Show ellipsis if not at the beginning
    if (page > pagesToShow + 1) {
      pages.push(<button
        className={`col-md-1 number__0 `}
      >
        ...
      </button>);
    }

    // Show the current page and the next one
    // for (let i = Math.max(1, page - pagesToShow); i <= Math.min(totalPages, page + pagesToShow); i++) {
    //     pages.push(
    //         <button
    //             key={i}
    //             className={`col-md-3 number__${page === i ? 'active' : '0'}`}
    //             onClick={() => handlePageChange(i)}
    //         >
    //             {i}
    //         </button>
    //     );
    // }

    // Show ellipsis if not at the end
    if (page < totalPages - pagesToShow) {
      pages.push(<button
        className={`col-md-1 number__0`}
      >
        ...
      </button>);
    }

    // Show the last 2 pages
    for (let i = totalPages - 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`col-md-2 number__${page === i ? 'active' : '0'}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

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
            brands?.map(item => {
              return <div class="col-md-4 col-sm-4 col-7 div_shadow mx-auto">
                <Link to={`/singlebrand/${item.guid}`}><img src={item?.photo_medium} class="photoofbrands " alt="Photo 1 " /></Link>
                <div class="d-flex justify-content-between pb-4 ">
                  <Link className='brand_link' to="/singlebrand"><span className='brand_text'>{item?.title}</span></Link>
                  <Link to={`/singlebrand/${item.guid}`}><span className='brans_icon'><AiOutlineArrowRight /></span></Link>
                </div>
              </div>
            })
          }

        </div>
      </section>


      <div className="container justify-content-center">
        <div className="conter-content mt-5 mb-5">
          <div className="d-flex">
            {page > 1 && (
              <button
                className="col-md-4 number__prev"
                onClick={() => handlePageChange(page - 1)}
              >
                Previous
              </button>
            )}
            {renderPagination()}
            {page < Math.ceil(count / limit) && (
              <button
                className="col-md-4 number__next"
                onClick={() => handlePageChange(page + 1)}
              >
                Next
              </button>
            )}
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

    </>
  )
}

export default Brands