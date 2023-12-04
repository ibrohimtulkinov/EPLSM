import React, {useState} from 'react'
import blog1 from "../assets/img/blog1.png"
import blog2 from "../assets/img/blog2.png"
import blog3 from "../assets/img/blog3.png"
import post1 from "../assets/img/post1.png"
import post2 from "../assets/img/post2.png"
import post3 from "../assets/img/post3.png"
import post4 from "../assets/img/post4.png"
import post5 from "../assets/img/post5.png"
import Navbar from '../components/Navbar'
import {Button} from "react-bootstrap";
import End from "../components/End"
import {Link} from "react-router-dom"
import {
    AiOutlineRight,
    AiOutlineCustomerService,
    AiOutlineException,
    AiOutlineDownCircle,
    AiOutlineTrophy,
    AiOutlineUser,
    AiTwotoneCalendar,
    AiOutlineInbox 
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

            <div className='container-fluid mt-5 ms-5 me-5'>
                <div className='row'>
                    <div className='col-md-5 col-8'>
                        <img src={blog1} alt="" className='blog_photos' />
                       <div className='d-flex blog-icons mt-3'>
                         <p><AiOutlineUser />Admin</p>
                         <p className='iconsss'><AiTwotoneCalendar />14 Oct 2022</p>
                         <p className='iconsss'><AiOutlineInbox />Wood</p>
                       </div>
                       
                     
                       <h3>Going all-in with millennial design</h3>
                       <p className='mt-3 blog-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                     
                       
                       <Link><p className='read-more border-bottom'>Read more</p></Link> 
                    </div>
                 
                    <div className='col-md-4 categories'>
                        <input type="search" className="blog-control"      
                            aria-label="Search"
                            aria-describedby="search-addon"
                         />
                         <div className='row ms-4  '>
                           <h3 className='mt-5'>Categories</h3>
                          <div className='col-md-4 mt-2 listof-categories '>
                            <p>Crafts</p>
                            <p>Design</p>
                            <p>Handmade</p>
                            <p>Interior</p>
                            <p>Wood</p>
                         </div>
                            <div className='col-md-4 mt-2 listof-categories'>
                                <p>2</p>
                                <p>8</p>
                                <p>7</p>
                                <p>1</p>
                                <p>6</p>
                            </div>
                            <div>
                              <h3 className='mt-5'>Recent Posts</h3>
                              <div className='d-flex mt-4'>
                                <img src={post1} alt="" className='post1' />
                                   <div className='d-block'>
                                      <p className='textt-blog'>Going all-in with <br/>millennial design</p>
                                      <p className='post-data'>03 Aug 2022</p>
                                   </div>
                              </div>
                              <div className='d-flex mt-4'>
                                <img src={post2} alt="" className='post1' />
                                   <div className='d-block'>
                                      <p className='textt-blog'>Exploring new ways <br/> of decorating</p>
                                      <p className='post-data'>03 Aug 2022</p>
                                   </div>
                              </div>
                            </div>
                         </div>
                         
                    </div>
                    
                    
                </div>
            </div>

            <div className='container-fluid ms-5 me-5'>
                <div className='row'>
                    <div className='col-md-5 col-8'>
                        <img src={blog1} alt="" className='blog_photos' />
                       <div className='d-flex blog-icons mt-3'>
                         <p><AiOutlineUser />Admin</p>
                         <p className='iconsss'><AiTwotoneCalendar />14 Oct 2022</p>
                         <p className='iconsss'><AiOutlineInbox />Wood</p>
                       </div>
                       
                     
                       <h3>Going all-in with millennial design</h3>
                       <p className='mt-3 blog-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                     
                       
                       <Link><p className='read-more border-bottom'>Read more</p></Link> 
                    </div>
                    <div className='col-md-4 categories__'>
                         <div className='row ms-4  '>
                            <div>
                              <div className='d-flex mt-4'>
                                <img src={post3} alt="" className='post1' />
                                   <div className='d-block'>
                                      <p className='textt-blog'>Handmade pieces <br/>that took time to make</p>
                                      <p className='post-data'>03 Aug 2022</p>
                                   </div>
                              </div>
                              <div className='d-flex mt-4'>
                                <img src={post4} alt="" className='post1' />
                                   <div className='d-block'>
                                      <p className='textt-blog'>Modern home in<br/> Milan</p>
                                      <p className='post-data'>03 Aug 2022</p>
                                   </div>
                              </div>
                              <div className='d-flex mt-4'>
                                <img src={post5} alt="" className='post1' />
                                   <div className='d-block'>
                                      <p className='textt-blog'>Colorful office<br/> redesign</p>
                                      <p className='post-data'>03 Aug 2022</p>
                                   </div>
                              </div>
                            </div>
                         </div>
                         
                    </div>
                    
                    
                </div>
            </div>

            <div className='container-fluid mt-5 ms-5 me-5'>
                <div className='row'>
                    <div className='col-md-5 col-8'>
                        <img src={blog3} alt="" className='blog_photos' />
                       <div className='d-flex blog-icons mt-3'>
                         <p><AiOutlineUser />Admin</p>
                         <p className='iconsss'><AiTwotoneCalendar />14 Oct 2022</p>
                         <p className='iconsss'><AiOutlineInbox />Wood</p>
                       </div>
                       <h3>Going all-in with millennial design</h3>
                       <p className='mt-3 blog-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                       <Link><p className='read-more border-bottom'>Read more</p></Link> 
                    </div>
                </div>
            </div>

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

            <div className='mt-5 mb-5 icons__background'>
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

export default Blog