import React, { useState } from 'react'
import blog1 from "../assets/img/blog1.png"
import blog2 from "../assets/img/blog2.png"
import blog3 from "../assets/img/blog3.png"
import post1 from "../assets/img/post1.png"
import post2 from "../assets/img/post2.png"
import post3 from "../assets/img/post3.png"
import post4 from "../assets/img/post4.png"
import post5 from "../assets/img/post5.png"
import Navbar from '../components/Navbar'
import { Button } from "react-bootstrap";
import End from "../components/End"
import { Link } from "react-router-dom"
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
import { useEffect } from "react";
import axios from 'axios';


function Blog() {
    const url = 'https://eplsm.olimjohn.uz/api';
    const [post, setPost] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [limit, setLimit] = useState(8);
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        if (search) getBlogBySearch(search)
    }, [search])

    useEffect(() => {
        getPostList();
        getRecentPostList();
    }, [])

    console.log({
        post
    })
    const getPostList = async () => {
        const response = await fetch('https://eplsm.olimjohn.uz/api/post-list/')
        const data = await response.json()
        setPost(data);
    }

    const getRecentPostList = () => {
        axios.get(url + '/post-list/', { params: { date: true } }).then((r) => {
            setRecentPosts(r.data);
        })
    }

    const getBlogBySearch = (input) => {
        axios.get('https://eplsm.olimjohn.uz/api/post-list/', {
            params: {
                limit: limit, p: true, q: input
            }
        }).then((r) => {
            setPost(r.data?.results)
        })
    }

    const handleSearch = (inputValue) => {
        setSearch(inputValue)
    }

    return (
        <>

            <Navbar />

            <div className="bg-image  ">
                <div className="products-important text-start ">
                    <h1 className='products--products '>Blog</h1>
                    <p>
                        <Link to="/" className='singleProduct_home'> <c className="home-products ">Home <AiOutlineRight /></c> </Link>
                        <Link to="/blog" className="singleProduct_home"><c className="products-products">Blog</c></Link>
                    </p>
                </div>
            </div>


            <div className='row container-fluid mt-5'>
                <div className='col-md-9 col-sm-12 text-center'>
                    {
                        post?.map(information => {
                            return <div className='w-75 mx-auto text-start'><img src={information?.photo_medium} alt="" className='blog_photos' />
                                <div className='d-flex blog-icons mt-3'>
                                    <p><AiOutlineUser />{information?.username}</p>
                                    <p className='iconsss'><AiTwotoneCalendar />{information.date.split('T', 2)[0]}</p>
                                    <p className='iconsss'><AiOutlineInbox />Wood</p>
                                </div>
                                <h3>{information?.title}</h3>
                                <p className='mt-3 blog-text'>{information?.description}</p>
                                <Link ><p className='read-more border-bottom'>Read more</p></Link>
                            </div>
                        })
                    }

                    {/* <div className="ms-4 me-4">
                        <input
                            type="search" onChange={(e) => handleSearch(e.target.value)}
                            className="form-control rounded" placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon" />
                    </div> */}


                </div>
                <div className='col-md-3 text-start'>

                    <input
                        type="search" onChange={(e) => handleSearch(e.target.value)}
                        className="form-control rounded" placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"

                    />


                    <div className='filter-sidebar-blog mt-3'>
                        <div className="filter-sidebar-blog-box w-75 mx-auto">
                            <h3 className=''>Categories</h3>
                            <div className="filer-sidebar-category-text d-flex mt-5">
                                <p className='w-75'>Crafts</p>
                                <p className='w-25'>2</p>
                            </div>
                            <div className="filer-sidebar-category-text d-flex mt-3">
                                <p className='w-75'>Design</p>
                                <p className='w-25'>8</p>
                            </div>
                            <div className="filer-sidebar-category-text d-flex mt-3">
                                <p className='w-75'>Handmade</p>
                                <p className='w-25'>7</p>
                            </div>
                            <div className="filer-sidebar-category-text d-flex mt-3">
                                <p className='w-75'>Interior</p>
                                <p className='w-25'>1</p>
                            </div>
                            <div className="filer-sidebar-category-text d-flex mt-3">
                                <p className='w-75'>Wood</p>
                                <p className='w-25'>6</p>
                            </div>
                        </div>
                    </div>


                    <h3 className=''>Recent Posts</h3>
                    {
                        recentPosts?.map((item) => (
                            <div className='d-flex mt-4'>
                                <img src={item.photo_medium} alt="" className='post1' />
                                <div className='d-block'>
                                    <p className='textt-blog'>{item.title}</p>
                                    <p className='post-data'>{item.date.split('T', 2)[0]}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div >




            {/* 
              <div className='col-md-12 container '>
                <div className='row gap-3 justify-content-between'>
                         {
                            information?.map(information => {
                                return <div className='col-md-7 text-start'>
                                       <h3>{information?.title}</h3>
                                   <p className='mt-3 blog-text'>{information?.description}</p>
                                  <Link><p className='read-more border-bottom'>Read more</p></Link> 
                                 <img src={information?.photo_medium} alt="" className='blog_photos mt-3' />
                                 <div className='d-flex blog-icons mt-3'>
                                       <p><AiOutlineUser />{information?.username}</p>
                                        <p className='iconsss'><AiTwotoneCalendar />{information?.date}</p>
                                       <p className='iconsss'><AiOutlineInbox />Wood</p>
                                     </div> 
                                   <h3>{information?.title}</h3>
                                    <p className='mt-3 blog-text'>{information?.description}</p>
                     
                       
                             <Link ><p className='read-more border-bottom'>Read more</p></Link>
                          </div>
                            })
                         }
                   
                </div>

             </div>  */}

            {/* 
             <div className='col-md-12 container mt-3'>
                <div className='row gap-3 justify-content-between'>

                     {
                        information?.map(information => {
                        return <div className='col-md-7 text-start'>
                       <img src={information?.photo_medium} alt="" className='blog_photos' />
                       <div className='d-flex blog-icons mt-3'>
                         <p><AiOutlineUser />{information?.username}</p>
                         <p className='iconsss'><AiTwotoneCalendar />{information?.date}</p>
                         <p className='iconsss'><AiOutlineInbox />Wood</p>
                       </div> 
                       <h3>{information?.title}</h3>
                       <p className='mt-3 blog-text'>{information?.description}</p>
                       <Link ><p className='read-more border-bottom'>Read more</p></Link> 
                    </div>
                   })
                  }
                </div>
             </div> */}




            {/* offset */}





            {/* <div className="container justify-content-center">
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
            </div> */}





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
        </>
    )
}

export default Blog;