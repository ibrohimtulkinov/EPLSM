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
import { Link } from "react-router-dom";
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

function SingleProduct() {
  const [selectedImage, setSelectedImage] = useState(singleProduct);
  const data = [
    { image: singleProduct },
    { image: single4 },
    { image: single2 },
    { image: single3 },
  ]

  


  const navigate = useNavigate();
  const [products, setProducts] = useState()
  const [limit, setLimit] = useState(4);

  const getProducts = async (param1) => {
    const response = await fetch(`https://eplsm.olimjohn.uz/api/product-list/?${param1}`);
    const data = await response.json()
    setProducts(data.results)
  }

  useEffect(() => {
    getProducts(`limit=${limit}&p=true`);
  }, [limit]);

  const handleShowMore = () => {
    setLimit(limit + 4);
  };





  const handleChangeImage = (data) => {
    setSelectedImage(data.image)
  }

  const [activeTab, setActiveTab] = useState("Description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabs = () => {
    switch (activeTab) {
      case "Description":
        return <Description />

      case "AddtiotionalInformation":
        return <AdditionalInformation />

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
        <Link to="/SingleProduct" className='singleProduct_Asgaard '><c className='sofa__sofa '>Asgaard sofa</c></Link>
      </div>
      <div className='row mx-auto '>
        <div className="d-flex">
          <div className="d-block mt-5 ms-5 me-5">
            {
              data.map((image) => (
                <div className='col-md-2'>
                  <img src={image.image} alt="" width='100px' className='single_photos' height='100px' onClick={() => handleChangeImage(image)} />
                </div>
              ))
            }
          </div>
          <div className='col-md-4 mt-5'>
            <ReactImageMagnify {...{
              smallImage: {
                alt: 'Product',
                src: selectedImage,
                width: 500,
                height: 400
              },
              largeImage: {
                src: selectedImage,
                width: 1000,
                height: 1600
              }
            }} />
          </div>
          <div className='col-md-3 mt-5'>
            <p className='single-product-main'>Asgaard sofa</p>
            <p className='single-product-text mt-4'>Setting the bar as one of the loudest speakers in its class, the <br /> Kilburn is a compact, stout-hearted hero with a well-balanced <br /> audio which boasts a clear midrange and extended highs for a  <br /> sound.</p>
            <p className='singleProduct_'> <d className="singleBrand_">Brand</d>  Roche</p>
            <p className='singleProduct_'> <d className="singleBrand_">Category</d>  Sofa</p>
          </div>
        </div>
      </div>
      <div className='border-top border-product'></div>
      <div>
        <div className='container'>
          <div className='text-center d-flex mt-5'>
            <button onClick={() => handleTabClick("Description")} className='singleproduct-description col-md-4'>Description</button>
            <button onClick={() => handleTabClick("AddtiotionalInformation")} className='singleproduct-info col-md-6'>Additional Information</button>
            <button onClick={() => handleTabClick("Review")} className='singleproduct-info col-md-4'>Reviews [5]</button>
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
                  <Button className="btn btn-light text-warning rounded-0 w-50 rad-0" onClick={() => navigate('/SingleProduct')}>Syltherine</Button>
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

      {/* <Sofaa /> */}
    </>
  )
}


export default SingleProduct