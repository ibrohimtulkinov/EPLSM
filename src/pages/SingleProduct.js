import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import {AiOutlineRight  } from 'react-icons/ai';
import singleProduct from '../assets/img/single_produc.png';
import single2 from '../assets/img/single2.png';
import single3 from '../assets/img/single3.png';
import single4 from '../assets/img/single4.png';
import ReactImageMagnify from 'react-image-magnify';
import End from "../components/End"
import {Link} from "react-router-dom";
import singleproductt from '../assets/img/single-productt.png';
import singleproducttt from '../assets/img/single-producttt.png';
import bodyPhoto1 from '../assets/img/body-photo1.png';
import bodyPhoto2 from '../assets/img/body-photo2.png';
import bodyPhoto3 from '../assets/img/body-photo3.png';
import bodyPhoto4 from '../assets/img/body-photo4.png';
import {Button} from "react-bootstrap";
import {AiOutlineShareAlt  } from 'react-icons/ai';
import {
    AiOutlineDownCircle,
    AiOutlineTrophy,
    AiOutlineCustomerService,
    AiOutlineException,
} from 'react-icons/ai';

function SingleProduct() {
    const [selectedImage, setSelectedImage] = useState(singleProduct);
    const data = [
        { image: singleProduct},
        { image: single4},
        { image: single2},
        { image: single3},
    ]

    const handleChangeImage=(data) => {
        setSelectedImage(data.image)
    }

    return(
        <>
            <Navbar />
            <div className='d-flex sofa__background'>
                <Link to="/" className='singleProduct_home'  ><c className='sofa__ '>Home</c><AiOutlineRight className='icon-right'/></Link>
                <Link to="/products" className='singleProduct_Product' ><c className='sofa___ '>Product</c><AiOutlineRight className='icon-right'/></Link>
                <Link to="/SingleProduct"  className='singleProduct_Asgaard '><c className='sofa__sofa '>Asgaard sofa</c></Link>
            </div>
            <div className='row'>
               <div className="d-flex">
                   <div className="d-block mt-5 ms-5 me-5">
                       {
                           data.map((image)=>(
                               <div className='col-md-2'>
                                   <img src={image.image} alt="" width='100px' className='single_photos' height='100px'  onClick={()=>handleChangeImage(image)}/>
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
            <div className='container'>
                <div className='text-center d-flex mt-5'>
                    <p className='singleproduct-description col-md-4'>Description</p>
                    <p className='singleproduct-info col-md-6'>Additional Information</p>
                    <p className='singleproduct-info col-md-4'>Reviews [5]</p>
                </div>
            </div>

            <div className='container'>
              <div className='row text-start mt-4'>
                <p className='text-of-singleproduct text-start'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and  sound of Marshall, unplugs the chords, and takes the show on the road.</p>

                <p className='text-of-singleproduct text-start'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest  speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange  and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you  to fine tune the controls  to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
              </div>
            </div>
        
        <div className='container mt-5'>
            <div className='row d-flex '>
                <img src={singleproducttt} className='col-6' alt="" />
                <img src={singleproductt} className='col-6' alt="" />
            </div>
        </div>

        <div className="container mt-5">
        <div className="conter-content">
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


            <div className='mt-5 mb-5 icons__background'>
                <div className='d-xxl-flex d-xl-flex d-sm-block'>
                <div className='col-md-3  col-sm-2'>
                        <c className="icons__ mt-2"><AiOutlineTrophy/></c>
                        <div className='icons_header'>
                            <p className='icons__header mt-5'>High Quality</p>
                            <p className='icons__text'>crafted from top materials</p>
                        </div>
                    </div>
                    <div className='col-md-3  col-sm-2'>
                        <c className="icons__ mt-2"><AiOutlineDownCircle/></c>
                        <div className='icons_header'>
                            <p className='icons__header mt-5'>Warranty Protection</p>
                            <p className='icons__text'>Over 2 years</p>
                        </div>
                    </div>
                    <div className='col-md-3  col-sm-2'>
                        <c className="icons__ mt-2"><AiOutlineException/></c>
                        <div className='icons_header'>
                            <p className='icons__header mt-5'>Free Shipping</p>
                            <p className='icons__text'>Order over 150 $</p>
                        </div>
                    </div>
                    <div className='col-md-3  col-sm-2'>
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