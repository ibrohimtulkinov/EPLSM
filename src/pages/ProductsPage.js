 import React from 'react'
 import {AiOutlineDownCircle  , AiTwotoneAppstore, AiOutlineLayout, AiOutlineTrophy,AiOutlineCustomerService , AiOutlineException, AiOutlineShareAlt,AiOutlineRight  } from 'react-icons/ai';
 import Navbar from '../components/Navbar'
 import { Button } from "react-bootstrap";
 import End from "../components/End"
 import { Link } from "react-router-dom"
 
 
 
 function ProductsPage() {
   return (
     <>
        <Navbar />
    <div className="products-background ">
        <div className="products-main text-start ">
          <h1 className='products--products '>Products</h1>
          <p><c className="home-products ">Home <AiOutlineRight /> </c> <c className="products-products">Products</c></p>
        </div> 
    </div>
    <div className='under-background'>
      <div className='d-flex  col-4 col-md-6 col-xl-12 '>
       <p className='filter-item fw-bold'>Filter</p>
       
       <AiTwotoneAppstore className='appstore-icon'/>
       <AiOutlineLayout className='appstore-icon'/>
       <p className='rad-1'>Showing 1–16 of 32 results</p>
       <p className='show-text'>Show</p>
       <p className='n-16'>16</p>
       <p className='sortby-text'>Short by</p>
       <p className='default-text'>Default</p>
      </div>
    </div>
     
      

    <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <li><h2 class="menu__itemm" href="#">Title</h2></li>
             
      <div class="ms-4 me-4">
        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
       </div>
      
      <li><h2 class="menu__itemm" href="#">Categories</h2></li>
  

        <Link to="/SingleProduct"  className="filter-texts">Sofa</Link>
          <p className='filter-texts'>Chair</p>
          <p className='filter-texts'>Table</p>
          <p className='filter-texts'>Sofa</p>
          <p className='filter-texts'>Chair</p>
          <p className='filter-texts'>Table</p>


      <li><h2 class="menu__itemm" href="#">Brand</h2></li>

          <p className='filter-texts'>BMW</p>
          <p className='filter-texts'>Mercedes - Benz</p>
          <p className='filter-texts'>Audi</p>
          <p className='filter-texts'>Toyota</p>
          <p className='filter-texts'>BYD</p>

    </ul>
  </div>



  
       
  <>
      <div className="container mt-5 col-md-3">

        <div className="conter-content">
          <div className="photo-container ">
            <div className="defaultVisible">
              <img className="body-photos" src="./img/body-photo1.png" alt="Фото 1" />
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
          <img className="body-photos" src="./img/body-photo2.png" alt="Фото 2" />
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
          <img className="body-photos" src="./img/body-photo3.png" alt="Фото 3" />
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
          <img className="body-photos" src="./img/body-photo4.png" alt="Фото 3" />
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
      </>

      <>
      <div className="container mt-5">

        <div className="conter-content">
          <div className="photo-container ">
            <div className="defaultVisible">
              <img className="body-photos" src="./img/body-photo1.png" alt="Фото 1" />
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
          <img className="body-photos" src="./img/body-photo2.png" alt="Фото 2" />
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
          <img className="body-photos" src="./img/body-photo3.png" alt="Фото 3" />
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
          <img className="body-photos" src="./img/body-photo4.png" alt="Фото 3" />
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
      </>

      <>
      <div className="container mt-5">

        <div className="conter-content">
          <div className="photo-container ">
            <div className="defaultVisible">
              <img className="body-photos" src="./img/body-photo1.png" alt="Фото 1" />
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
          <img className="body-photos" src="./img/body-photo2.png" alt="Фото 2" />
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
          <img className="body-photos" src="./img/body-photo3.png" alt="Фото 3" />
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
          <img className="body-photos" src="./img/body-photo4.png" alt="Фото 3" />
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
      </>

      <>
      <div className="container mt-5">

        <div className="conter-content">
          <div className="photo-container ">
            <div className="defaultVisible">
              <img className="body-photos" src="./img/body-photo1.png" alt="Фото 1" />
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
          <img className="body-photos" src="./img/body-photo2.png" alt="Фото 2" />
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
          <img className="body-photos" src="./img/body-photo3.png" alt="Фото 3" />
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
          <img className="body-photos" src="./img/body-photo4.png" alt="Фото 3" />
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
      </>
       
      <div className='container mt-5 mb-5'>
        <div className='d-flex'>
            <div className='col-md-3 number__0'>1</div>
            <div className='col-md-3 number__0'>2</div>
            <div className='col-md-3 number__0'>3</div>
            <div className='col-md-4 number__next'>Next</div>
        </div>
      </div>

         
      <div className=' mt-5 mb-5 icons__background'>
        <div className='d-flex'>
            <div className='col-md-3 '>
               <c className="icons__ mt-2 ms-5"><AiOutlineTrophy /></c>
               <div className='icons_header'>
                  <p className='icons__header mt-5'>High Quality</p>
                  <p  className='icons__text'>crafted from top materials</p>
               </div>
            </div>
            <div className='col-md-3'>
              <c className="icons__ mt-2"><AiOutlineDownCircle /></c>
              <div className='icons_header'>
                 <p className='icons__header mt-5'>Warranty Protection</p>
                 <p  className='icons__text'>Over 2 years</p>
               </div>
            </div>
            <div className='col-md-3'>
              <c className="icons__ mt-2"><AiOutlineException /></c>
              <div className='icons_header'>
                 <p className='icons__header mt-5'>Free Shipping</p>
                 <p  className='icons__text'>Order over 150 $</p>
               </div>
            </div>
            <div className='col-md-3'>
              <c className="icons__ mt-2"><AiOutlineCustomerService /></c>
              <div className='icons_header'>
                 <p className='icons__header mt-5'>24 / 7 Support</p>
                 <p  className='icons__text'>Dedicated support</p>
               </div>
            </div>
        </div>
      </div>

      <End />

     </>
   )
 }
 
 export default ProductsPage