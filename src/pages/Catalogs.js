import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Button } from "react-bootstrap";
import End from "../components/End"
import { Link } from "react-router-dom"
import {
    AiOutlineRight
} from 'react-icons/ai';
import vng from '../assets/img/Vng_brand.png';
import pntgree from '../assets/img/Pntgree_brand.png';
import loremipsum from '../assets/img/Loremipsum_brand.png';
import Constructionbrand from '../assets/img/Constructionbrand.png';
import {
    AiOutlineDownCircle,
    AiOutlineTrophy,
    AiOutlineCustomerService,
    AiOutlineException,
    AiOutlineFileText
} from 'react-icons/ai';
import { useEffect } from "react";


function Catalogs() {
    const [brandDetail, setBrandDetail] = useState()

    const getBrandDetail = async () => {
        const response = await fetch('https://api.eplsm.uz/api/brand-list/')
        const data = await response.json()
        setBrandDetail(data)
    }

    useEffect(() => {
        getBrandDetail()
    }, [])

    const handleAdd = async (guid) => {
        await fetch(`https://api.eplsm.uz/api/brand-download/${guid}/`, { method: "get" })
            .then((res) => res.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement("a");
                link.href = url;
                link.download = "Document.pdf";

                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            });
    };


    return (
        <>

            <Navbar />

            <div className="bg-image ">
                <div className="products-important text-start ">
                    <h1 className='products--products '>Catalogs</h1>
                    <p>
                        <Link to="/" className='singleProduct_home'> <c className="home-products ">Home <AiOutlineRight /></c> </Link>
                        <Link to="/catalogs" className="singleProduct_home"><c className="products-products">Catalogs</c></Link>
                    </p>
                </div>
            </div>
            <section>
                {
                    brandDetail?.map(brandDetail => {
                        return <div className='row mx-auto mt-4'>
                            <div className='col-md-3 col-4'><img src={brandDetail?.photo_medium} alt="" /></div>
                            <div className='col-md-6 text-start '>
                                <p className='catalog-vng '>{brandDetail?.title}</p>
                                <div onClick={() => handleAdd(brandDetail.guid)} href={brandDetail?.catalog_file} className='pdf mt-4 '><AiOutlineFileText className='text-white bg-danger  me-2 blog-icon' />catalog_2024.01.01.pdf</div>
                                <div className='border-top catalog-border'></div>
                            </div>
                        </div>
                    })
                }

                {/* <div className='row  mx-auto'>
                    <div className='col-md-3 ms-5 col-4'><img src={pntgree} alt="" /></div>
                    <div className='col-md-6 text-start '>
                      <p className='catalog-vng ms-5'>PNTGREE</p>
                      <p className='pdf mt-4 ms-5'><AiOutlineFileText className='text-white bg-danger me-2 blog-icon'/>catalog_2024.01.01.pdf</p>
                      <div className='border-top catalog-border'></div>
                    </div>
                </div>
                <div className='row  mx-auto'>
                    <div className='col-md-3 ms-5 col-4'><img src={Constructionbrand} alt="" /></div>
                    <div className='col-md-6 text-start '>
                      <p className='catalog-vng ms-5'>MY-CONSTRUCTION</p>
                      <p className='pdf mt-4 ms-5'><AiOutlineFileText className='text-white bg-danger me-2 blog-icon'/>catalog_2024.01.01.pdf</p>
                      <div className='border-top catalog-border'></div>
                    </div>
                </div>
                <div className='row  mx-auto'>
                    <div className='col-md-3 ms-5 col-4'><img src={loremipsum} alt="" /></div>
                    <div className='col-md-6 text-start '>
                      <p className='catalog-vng ms-5'>HIGH-JOURNEY</p>
                      <p className='pdf mt-4 ms-5'><AiOutlineFileText className='text-white bg-danger me-2 blog-icon'/>catalog_2024.01.01.pdf</p>
                      <div className='border-top catalog-border'></div>
                    </div>
                </div>
                <div className='row  mx-auto'>
                    <div className='col-md-3 ms-5 col-4'><img src={pntgree} alt="" /></div>
                    <div className='col-md-6 text-start '>
                      <p className='catalog-vng ms-5'>PNTGREE</p>
                      <p className='pdf mt-4 ms-5'><AiOutlineFileText className='text-white bg-danger me-2 blog-icon'/>catalog_2024.01.01.pdf</p>
                      <div className='border-top catalog-border'></div>
                    </div>
                </div>
                <div className='row  mx-auto'>
                    <div className='col-md-3 ms-5 col-4'><img src={Constructionbrand} alt="" /></div>
                    <div className='col-md-6 text-start '>
                      <p className='catalog-vng ms-5'>MY-CONSTRUCTION</p>
                      <p className='pdf mt-4 ms-5'><AiOutlineFileText className='text-white bg-danger me-2 blog-icon'/>catalog_2024.01.01.pdf</p>
                      <div className='border-top catalog-border'></div>
                    </div>
                </div>
                <div className='row  mx-auto'>
                    <div className='col-md-3 ms-5 col-4'><img src={loremipsum} alt="" /></div>
                    <div className='col-md-6 text-start '>
                      <p className='catalog-vng ms-5'>HIGH-JOURNEY</p>
                      <p className='pdf mt-4 ms-5'><AiOutlineFileText className='text-white bg-danger me-2 blog-icon'/>catalog_2024.01.01.pdf</p>
                      <div className='border-top catalog-border'></div>
                    </div>
                </div> */}
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

export default Catalogs