
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


function SingleProduct() {
    const [brandDetail, setBrandDetail] = useState()
    const { guid } = useParams();
    const getBrandDetail = async () => {
        const response = await fetch(`https://eplsm.olimjohn.uz/api/brand-detail/${guid}`)
        const data = await response.json()
        setBrandDetail(data);
    }

    useEffect(() => {
        getBrandDetail();
    }, [])

    return (
        <>

            <Navbar />


            <div className='d-flex sofa__background'>
                <Link to="/" className='singleProduct_home'  ><c className='sofa__ '>Home</c><AiOutlineRight className='icon-right' /></Link>
                <Link to="/brands" className='singleProduct_Product' ><c className='sofa___ '>Brands</c><AiOutlineRight className='icon-right' /></Link>
                <Link to="/singlebrand" className='singleProduct_Asgaard '><c className='sofa__sofa '>Roche</c></Link>
            </div>
            <div className='row m-auto'>
                <div className=' col-md-3 text-center'>
                    <img src={brandDetail?.photo_medium} alt="" className='col-7 mt-5' />
                </div>
                <div className='col-md-5 mt-5 '>
                    <p className='single-brand-main'>{brandDetail?.title}</p>
                    <p className='single-brand-text mt-4'>{brandDetail?.description}</p>
                    <div className='text-start'>
                        <p className='singleBrand_'> Catalog</p>
                        <a href={brandDetail?.catalog_file} className='pdf mt-4 '><AiOutlineFileText className='text-white bg-danger me-2 blog-icon'/>catalog_2024.01.01.pdf</a>
                    </div>
                </div>
            </div>


            <Body />


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



export default SingleProduct