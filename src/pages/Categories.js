import Navbar from '../components/Navbar'
import React, { useState } from 'react'
import End from "../components/End"
import { Link } from "react-router-dom"
import {
    AiOutlineRight,
    AiOutlineArrowRight,
    AiOutlineTrophy,
    AiOutlineCustomerService,
    AiOutlineException,
    AiOutlineDownCircle,
    AiOutlineAndroid
} from 'react-icons/ai';
import { useEffect } from "react";
import axios from 'axios';

const Categories = () => {
    const [categories, setCategories] = useState([])
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(16);
    const [count, setCount] = useState(2);

    useEffect(() => {
        getCategories();
    }, [limit, page]);

    const getCategories = async () => {
        const offset = (page - 1) * limit;
        axios
            .get('https://api.eplsm.uz/api/product-category-list/', {
                params: { limit, p: true, offset },
            })
            .then((r) => {
                setCount(r?.data?.count);
                setCategories(r?.data?.results);
            });
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const renderPagination = () => {
        const totalPages = Math.ceil(count / limit);

        if (totalPages <= 4) {
            return Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    className={`col-md-3 number__${page === index + 1 ? 'active' : '0'}`}
                    onClick={() => handlePageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ));
        }

        const pagesToShow = 2;
        const pages = [];

        for (let i = 1; i <= pagesToShow; i++) {
            pages.push(
                <button
                    key={i}
                    className={`col-md-2 number__${page === i ? 'active' : '0'}`}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </button>
            );
        }

        if (page > pagesToShow + 1) {
            pages.push(<button
                className={`col-md-1 number__0 `}
            >
                ...
            </button>);
        }
        if (page < totalPages - pagesToShow) {
            pages.push(<button
                className={`col-md-1 number__0`}
            >
                ...
            </button>);
        }

        for (let i = totalPages - 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    className={`col-md-2 number__${page === i ? 'active' : '0'}`}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </button>
            );
        }

        return pages;
    };

    const handleSearch = (inputValue) => {
        axios.get('https://api.eplsm.uz/api/product-category-list/', {
            params: {
                limit: limit, p: true, q: inputValue
            }
        }).then((r) => {
            setCategories(r.data.results);
            setCount(r.data.count);
        })
    }

    return (
        <div>
            <Navbar />
            <div className="bg-image">
                <div className="products-important text-start ">
                    <h1 className='products--products '>Categories</h1>
                    <p>
                        <Link to="/" className='singleProduct_home'> <c className="home-products ">Home <AiOutlineRight /></c> </Link>
                        <Link to="/categories" className="singleProduct_home"><c className="products-products">Categories</c></Link>
                    </p>
                </div>
            </div>

            <section className='sofaaa__background'>
                <div className="row mx-auto">
                    <div className=" text-start inline justify-content-between">
                        <div className='main-brand-div'>
                            <p className='show-words  ps-3'>Show</p>
                            <p className="display-number">
                                <input
                                    type="number" onChange={(e) => setLimit(e.target.value)}
                                    className="form-control w-px-60 rounded-0 ms-2" value={limit}
                                />
                            </p>
                            <p className=' rad-1 mb-0'>{`Showing 1–${categories.length} of ${count} results`}</p>
                        </div>
                        <div>
                            <p className='rad-11 me-5'>
                                <input
                                    type="search" onChange={(e) => handleSearch(e.target.value)}
                                    className="form-control rounded w-px-250" placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="search-addon" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section >

                <div class="row  mt-5 p-5 overflow-x-hidden">
                    {count > 0 ?
                        categories?.map(item => {
                            return <div className='col-12 col-sm-12  col-md-6  col-lg-4  col-xl-3 px-3 '>

                                <div class="  div_shadow  mt-4 w-100" style={{ padding: "22px 40px", paddingBottom: "30px" }}>
                                    <Link to={`/categories/${item.guid}`}><img src={item?.photo_medium} class="photoofbrands " alt="Photo 1 " /></Link>
                                    <div class="d-flex justify-content-between " style={{ marginTop: "21px" }}>
                                        <Link className='brand_link' to={`/categories/${item.guid}`}><span className='brand_text'>{item?.title}</span></Link>
                                        <Link to={`/categories/${item.guid}`}><span className='brans_icon'><AiOutlineArrowRight /></span></Link>
                                    </div>
                                </div>
                            </div>
                        })
                        :
                        (<h3 className='text-center my-4'>
                            Nothing was found!
                            <AiOutlineAndroid />
                        </h3>)
                    }
                </div>

            </section>

            <div className="container justify-content-center">
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
            </div>

            <div className='brandicons-background'>
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
        </div>
    )
}

export default Categories