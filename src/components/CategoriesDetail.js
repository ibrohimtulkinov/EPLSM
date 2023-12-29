import { Link, useNavigate, useParams } from "react-router-dom"
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { AiOutlineRight } from 'react-icons/ai';
import singleProduct from '../assets/img/single_produc.png';
import ReactImageMagnify from 'react-image-magnify';
import singleproductt from '../assets/img/single-productt.png';
import singleproducttt from '../assets/img/single-producttt.png';
import bodyPhoto1 from '../assets/img/body-photo1.png';
import bodyPhoto2 from '../assets/img/body-photo2.png';
import bodyPhoto3 from '../assets/img/body-photo3.png';
import bodyPhoto4 from '../assets/img/body-photo4.png';
import roche from "../assets/img/roche.png"
import { Button } from "react-bootstrap";
import { AiOutlineShareAlt } from 'react-icons/ai';
import {
    AiOutlineDownCircle,
    AiOutlineTrophy,
    AiOutlineCustomerService,
    AiOutlineException,
    AiOutlineFileText
} from 'react-icons/ai';
import End from "../components/End";
import Body from "../components/Body";
import { useEffect } from "react";
import axios from "axios";


function CategoriesDetail() {
    const [categoryDetail, setCategoryDetail] = useState()
    const { guid } = useParams();
    const [limit, setLimit] = useState(8);
    const [products, setProducts] = useState([]);
    const url = 'https://api.eplsm.uz/api';
    const navigate = useNavigate();

    const getCategoryDetail = async () => {
        const response = await fetch(`https://api.eplsm.uz/api/product-category-detail/${guid}`)
        const data = await response.json()
        setCategoryDetail(data);
        axios.get(url + '/product-list/', { params: { p: true, limit: limit, category: data?.id } }).then((r) => {
            setProducts(r.data.results);
        })
    }

    useEffect(() => {
        getCategoryDetail();

    }, [guid])

    const handleShowMore = () => {
        setLimit(limit + 4);
    };

    return (
        <>
            <Navbar />


            <div className='d-flex sofa__background'>
                <Link to="/" className='singleProduct_home'  ><c className='sofa__ '>Home</c><AiOutlineRight className='icon-right' /></Link>
                <Link to="/categories" className='singleProduct_Product' ><c className='sofa___ '>Categories</c><AiOutlineRight className='icon-right' /></Link>
                <Link to={''} className='singleProduct_Asgaard '><c className='sofa__sofa '>{categoryDetail?.title}</c></Link>
            </div>

            <div className='row m-auto'>
                <div className=' col-md-3 text-center'>
                    <img src={categoryDetail?.photo_medium} alt="" className='col-7 mt-5' />
                </div>
                <div className='col-md-5 mt-5'>
                    <p className='single-brand-main'>{categoryDetail?.title}</p>
                </div>
            </div>


            <section className="mx-auto">
                <h1 className="body-header mb-4 mt-5">Our Products</h1>

                <div className="d-inline-flex flex-wrap justify-content-center px-3 gap-5">
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
                                        <Button className="btn btn-light rounded-0 w-50 rad-0" onClick={() => navigate(`/single-product/${item.guid}`)}>{item?.title}</Button>
                                        <br />
                                        <h6 className="share"><AiOutlineShareAlt />Share</h6>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <button className="body-button" type='button' onClick={handleShowMore}>Show More</button>
                </div>
            </section>


            <div className='mt-5 mb-5 icons__background'>
                <div className='d-flex flex-wrap justify-content-around ms-5'>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-2'>
                        <div className='d-flex align-items-center'>
                            <span className="icons me-3"><AiOutlineTrophy size="4em" /></span>
                            <div className='text-start'>
                                <p className='icons__header'>High Quality</p>
                                <p className='icons__text'>Crafted from top materials</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-2'>
                        <div className='d-flex align-items-center'>
                            <span className="icons me-3"><AiOutlineDownCircle size="4em" /></span>
                            <div className='text-start'>
                                <p className='icons__header'>Warranty Protection</p>
                                <p className='icons__text'>Over 2 years</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-2'>
                        <div className='d-flex align-items-center'>
                            <span className="icons me-3"><AiOutlineException size="4em" /></span>
                            <div className='text-start'>
                                <p className='icons__header'>Free Shipping</p>
                                <p className='icons__text'>Order over 150 $</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-2'>
                        <div className='d-flex align-items-center'>
                            <span className="icons me-3"><AiOutlineCustomerService size="4em" /></span>
                            <div className='text-start'>
                                <p className='icons__header'>24/7 Support</p>
                                <p className='icons__text'>Dedicated support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <End />


        </>
    )
}



export default CategoriesDetail