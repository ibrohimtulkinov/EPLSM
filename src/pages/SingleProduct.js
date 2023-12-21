import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { AiOutlineRight } from 'react-icons/ai';
import singleProduct from '../assets/img/single_produc.png';
import single2 from '../assets/img/single2.png';
import single3 from '../assets/img/single3.png';
import single4 from '../assets/img/single4.png';
import ReactImageMagnify from 'react-image-magnify';
import { useEffect } from "react";
import End from "../components/End"
import Sofaa from "../components/sofaa";
import { Link, useParams } from "react-router-dom";
import bodyPhoto1 from '../assets/img/body-photo1.png';
import bodyPhoto2 from '../assets/img/body-photo2.png';
import bodyPhoto3 from '../assets/img/body-photo3.png';
import bodyPhoto4 from '../assets/img/body-photo4.png';
import { Button } from "react-bootstrap";
import { AiOutlineShareAlt } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import {
  AiOutlineDownCircle,
  AiOutlineTrophy,
  AiOutlineCustomerService,
  AiOutlineException,
} from 'react-icons/ai';
import Description from '../components/Description';
import AdditionalInformation from '../components/AdditionalInformation';
import Review from '../components/Review';
import axios from 'axios';

function SingleProduct() {
  const [selectedImage, setSelectedImage] = useState();

  const navigate = useNavigate();
  const [product, setProduct] = useState();
  const [products, setProducts] = useState();
  const [limit, setLimit] = useState(4);

  const url = 'https://eplsm.olimjohn.uz/api';

  const { guid } = useParams();

  useEffect(() => {
    axios.get(url + `/product-detail/${guid}`).then((r) => {
      setProduct(r.data);
      setSelectedImage(r.data.images[0].photo_medium);
      axios.get(url + '/product-list/', { params: { limit: limit, p: true, category: r.data?.category?.id } }).then((r) => {
        setProducts(r.data.results);
      })
    })
  }, [limit, guid]);

  const handleShowMore = () => {
    setLimit(limit + 4);
  };

  const handleChangeImage = (image) => {
    setSelectedImage(image)
  }

  const [activeTab, setActiveTab] = useState("Description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabs = () => {
    switch (activeTab) {
      case "Description":
        return <Description product={product} />

      case "AddtiotionalInformation":
        return <AdditionalInformation product={product} />

      case "Review":
        return <Review />

    }
  };

  return (
    <>
      <Navbar />
      <div className='d-flex sofa__background'>
        <Link to="/" className='singleProduct_home'  ><c className='sofa__ '>Home</c><AiOutlineRight className='icon-right' /></Link>
        <Link to="/products" className='singleProduct_Product' ><c className='sofa___ '>Product</c><AiOutlineRight className='icon-right' /></Link>
        <Link to="/SingleProduct" className='singleProduct_Asgaard '><c className='sofa__sofa '>{product?.title}</c></Link>
      </div>
      <div className='row mx-auto '>
        <div className="d-flex ">
          <div className="d-block mt-5 ms-5 me-5 ">
            {
              product?.images?.map((image) => (
                <div className='my-2'>
                  <img src={image.photo_small} alt="" width='100px' className='single_photos' height='100px' onClick={() => handleChangeImage(image.photo_medium)} />
                </div>
              ))
            }
          </div>
          <div className='col-md-4 mt-5 '>
            <ReactImageMagnify {...{
              smallImage: {
                alt: 'Product',
                src: selectedImage,
                width: 350,
                height: 300
              },
              largeImage: {
                src: selectedImage,
                width: 500,
                height: 450
              }
            }} />
          </div>
          <div className='col-md-3 mt-5'>
            <p className='single-product-main'>{product?.title}</p>
            <p className='single-product-text mt-4'>{product?.description.length > 0 ? product?.description[0].description : ''}</p>
            <p className='singleProduct_'> <d className="singleBrand_">Brand</d>  {product?.brand?.title}</p>
            <p className='singleProduct_'> <d className="singleBrand_">Category</d>  {product?.category?.title}</p>
          </div>
        </div>
      </div>
      <div className='border-top border-product'> </div>
      <div>
        <div className='container'>
          <div className='text-center d-flex mt-5'>
            <button onClick={() => handleTabClick("Description")} className='singleproduct-description col-md-4'>Description</button>
            <button onClick={() => handleTabClick("AddtiotionalInformation")} className='singleproduct-info col-md-6'>Additional Information</button>
            {/* <button onClick={() => handleTabClick("Review")} className='singleproduct-info col-md-4'>Reviews [5]</button>  */}
          </div>

        </div>
        {renderTabs()}
      </div>




      <section>
        <div className='text-center mt-5 '>
          <p className='border-top'></p>
          <p className='mt-5 mb-4 related0'>Related Products</p>
        </div>
        <div className="d-inline-flex flex-wrap justify-content-center px-4">
          {
            products?.map(item => (
              <div className="conter-content">
                <div className="photo-container ">
                  <div className="defaultVisible">
                    <img className="body-photos" src={item?.images?.[0]?.photo_medium} alt="Фото 1" />
                    <div>
                      <p className="number">-30%</p>
                    </div>
                    <div className="body-container">
                      <h3 className="body-title ">{item?.title}</h3>
                      <p className="body-text">{item?.sub_title}</p>
                    </div>
                  </div>
                  <div className="onHoverVisible position-absolute">
                    <Button className="btn btn-light text-warning rounded-0 w-50 rad-0" onClick={() => navigate(`/single-product/${item.guid}`)}>{item?.title}</Button>
                    <br />
                    <h6 className="share"><AiOutlineShareAlt />Share</h6>
                  </div>
                </div>
              </div>
            ))
          }
        </div>


        <div className='text-center'>
          <button className="product-button" type='button' onClick={handleShowMore}>Show More</button>
        </div>
      </section>

      {/* 
        <div className="conter-content">
          <div className="photo-container">
            <div className="defaultVisible">
              <img className="body-photos" src={bodyPhoto2} alt="Фото 2" />
              <div className="body-container2">
                <h3 className="body-title">Leviosa</h3>
                <p className="body-text">Stylish cafe chair</p>
              </div>
            </div>
            <div className="onHoverVisible position-absolute">
              <Button className="btn btn-light text-warning rounded-0 w-50 rad-0">Leviosa</Button>
              <br />
              <h6 className="share"><AiOutlineShareAlt />Share</h6>
            </div>
          </div>
        </div> */}
      {/* 
        <div className="conter-content">
          <div className="photo-container">
            <div className="defaultVisible">
              <img className="body-photos" src={bodyPhoto3} alt="Фото 3" />
              <div>
                <p className="number">-50%</p>
              </div>
            </div>
            <div className="body-container3">
              <h3 className="body-title">Lolito</h3>
              <p className="body-text">Luxury big sofa</p>
            </div>
            <div className="onHoverVisible position-absolute">
              <Button className="btn btn-light text-warning rounded-0 w-50 rad-0">Lolito</Button>
              <br />
              <h6 className="share"><AiOutlineShareAlt />Share</h6>
            </div>
          </div>
        </div> */}

      {/* <div className="conter-content">
          <div className="photo-container">
            <div className="defaultVisible">
              <img className="body-photos" src={bodyPhoto4} alt="Фото 3" />
              <div>
                <p className="number4">New</p>
              </div>
            </div>
            <div className="body-container4">
              <h3 className="body-title">Respira</h3>
              <p className="body-text">Outdoor bar table and stool</p>
            </div>
            <div className="onHoverVisible position-absolute">
              <Button className="btn btn-light text-warning rounded-0 w-50 rad-0">Respira</Button>
              <br />
              <h6 className="share"><AiOutlineShareAlt />Share</h6>
            </div>
          </div>
        </div>*/}


      <div className='mt-5 mb-5 icons__background'>
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

      {/*  <Sofaa /> */}

    </>
  )
}


export default SingleProduct