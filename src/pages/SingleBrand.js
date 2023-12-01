import React from 'react'
import Navbar from '../components/Navbar'
import {AiOutlineRight  } from 'react-icons/ai';
import singleProduct from '../assets/img/single_produc.png';
import ReactImageMagnify from 'react-image-magnify';
import {Link} from "react-router-dom";
import singleproductt from '../assets/img/single-productt.png';
import singleproducttt from '../assets/img/single-producttt.png';
import bodyPhoto1 from '../assets/img/body-photo1.png';
import bodyPhoto2 from '../assets/img/body-photo2.png';
import bodyPhoto3 from '../assets/img/body-photo3.png';
import bodyPhoto4 from '../assets/img/body-photo4.png';
import roche from "../assets/img/roche.png"
import {Button} from "react-bootstrap";
import {AiOutlineShareAlt  } from 'react-icons/ai';
import {
    AiOutlineDownCircle,
    AiOutlineTrophy,
    AiOutlineCustomerService,
    AiOutlineException,
} from 'react-icons/ai';
import End from "../components/End"


function SingleProduct() {

    return(
        <>

            <Navbar />


            <div className='d-flex sofa__background'>
            <Link to="/" className='singleProduct_home'  ><c className='sofa__ '>Home</c><AiOutlineRight className='icon-right'/></Link>
            <Link to="/brands" className='singleProduct_Product' ><c className='sofa___ '>Brands</c><AiOutlineRight className='icon-right'/></Link>
            <Link to="/singlebrand"  className='singleProduct_Asgaard '><c className='sofa__sofa '>Roche</c></Link>
            </div>
            
            <div className='row'>
               <div className='col-md-4 ms-5 '>
                    <img src={roche} alt="" />
                </div>
                <div className='col-md-5 mt-5'>
                    <p className='single-brand-main'>Roche</p>
                    <p className='single-brand-text mt-4'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the  unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                    <p className='single-brand-text mt-4'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. .</p>
                    <p className='singleBrand_' > Catalog</p>
                </div>
            </div>
         
          <div className='text-center brand-product'>
              Related Products
          </div>
        
       

        <div className="container mt-5">
        <div className="conter-content ">
          <div className="photo-container ">
            <div className="defaultVisible">
              <img className="body-photos" src={bodyPhoto1} alt="Фото 1" />
              <div>
                <p className="number">-30%</p>
              </div>
              <div className="body-container">
                <h3 className="body-title ">Syltherine</h3>
                <p className="body-text">Stylish cafe chair</p>
              </div>
            </div>
            <div className="onHoverVisible position-absolute">
            
              <Button className="btn btn-light text-warning rounded-0 w-50 rad-0">Syltherine</Button>
              <br />
              <h6 className="share"><AiOutlineShareAlt />Share</h6>
              
            </div>
          </div>
        </div>


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
        </div>

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
        </div>

        <div className="conter-content">
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
      </div>
      </div>
      <div className="container mt-5">
        <div className="conter-content ">
          <div className="photo-container ">
            <div className="defaultVisible">
              <img className="body-photos" src={bodyPhoto1} alt="Фото 1" />
              <div>
                <p className="number">-30%</p>
              </div>
              <div className="body-container">
                <h3 className="body-title ">Syltherine</h3>
                <p className="body-text">Stylish cafe chair</p>
              </div>
            </div>
            <div className="onHoverVisible position-absolute">
            
              <Button className="btn btn-light text-warning rounded-0 w-50 rad-0">Syltherine</Button>
              <br />
              <h6 className="share"><AiOutlineShareAlt />Share</h6>
              
            </div>
          </div>
        </div>


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
        </div>

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
        </div>

        <div className="conter-content">
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
      </div>
      </div>
      <div className="container mt-5">
        <div className="conter-content ">
          <div className="photo-container ">
            <div className="defaultVisible">
              <img className="body-photos" src={bodyPhoto1} alt="Фото 1" />
              <div>
                <p className="number">-30%</p>
              </div>
              <div className="body-container">
                <h3 className="body-title ">Syltherine</h3>
                <p className="body-text">Stylish cafe chair</p>
              </div>
            </div>
            <div className="onHoverVisible position-absolute">
            
              <Button className="btn btn-light text-warning rounded-0 w-50 rad-0">Syltherine</Button>
              <br />
              <h6 className="share"><AiOutlineShareAlt />Share</h6>
              
            </div>
          </div>
        </div>


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
        </div>

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
        </div>

        <div className="conter-content">
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
      </div>
      </div>
      
      <div className='text-center'>
        <a href="#"><button className="product-button">Show More</button></a>
      </div>


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



export default SingleProduct