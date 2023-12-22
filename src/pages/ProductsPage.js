import React, { useState } from 'react'
import {
    AiOutlineDownCircle,
    AiTwotoneAppstore,
    AiOutlineLayout,
    AiOutlineTrophy,
    AiOutlineCustomerService,
    AiOutlineException,
    AiOutlineShareAlt,
    AiOutlineRight
} from 'react-icons/ai';
import Navbar from '../components/Navbar'
import { Button } from "react-bootstrap";
import End from "../components/End"
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import bodyPhoto1 from '../assets/img/body-photo1.png';
import bodyPhoto2 from '../assets/img/body-photo2.png';
import bodyPhoto3 from '../assets/img/body-photo3.png';
import bodyPhoto4 from '../assets/img/body-photo4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


function ProductsPage() {
    const [brands, setBrands] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const productGridClass = isOpen ? 'col-md-9' : 'col-md-12';
    const productCardClass = isOpen ? 'col-md-4' : 'col-md-3';
    const [limit, setLimit] = useState(8);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getBrands();
        getCategories();
    }, [])

    useEffect(() => {
        getProducts();
    }, [limit, page]);


    const getCategories = async () => {
        const response = await fetch('https://eplsm.olimjohn.uz/api/product-category-list/')
        const data = await response.json()
        setCategories(data)
    }

    const getProducts = async () => {
        const offset = (page - 1) * limit;
        axios
            .get('https://eplsm.olimjohn.uz/api/product-list/', {
                params: { limit, p: true, offset },
            })
            .then((r) => {
                setCount(r?.data?.count);
                setProducts(r?.data?.results);
            });
    };

    const getBrands = async () => {
        axios.get('https://eplsm.olimjohn.uz/api/brand-list/').then((r) => {
            setBrands(r.data);
        })
    }

    const navigate = useNavigate();
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const getProductsByCategory = (id) => {
        axios.get('https://eplsm.olimjohn.uz/api/product-list/', { params: { category: id, p: true, limit: limit } }).then((r) => {
            setProducts(r.data.results);
            setCount(r.data.count);
        })
    }

    const getProductsByBrand = (id) => {
        axios.get('https://eplsm.olimjohn.uz/api/product-list/', { params: { brand: id, p: true, limit: limit } }).then((r) => {
            setProducts(r.data.results);
            setCount(r.data.count);
        })
    }

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

        // Show the first 2 pages
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

        // Show ellipsis if not at the beginning
        if (page > pagesToShow + 1) {
            pages.push(<button
                className={`col-md-1 number__0 `}
            >
                ...
            </button>);
        }

        // Show the current page and the next one
        // for (let i = Math.max(1, page - pagesToShow); i <= Math.min(totalPages, page + pagesToShow); i++) {
        //     pages.push(
        //         <button
        //             key={i}
        //             className={`col-md-3 number__${page === i ? 'active' : '0'}`}
        //             onClick={() => handlePageChange(i)}
        //         >
        //             {i}
        //         </button>
        //     );
        // }

        // Show ellipsis if not at the end
        if (page < totalPages - pagesToShow) {
            pages.push(<button
                className={`col-md-1 number__0`}
            >
                ...
            </button>);
        }

        // Show the last 2 pages
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
        axios.get('https://eplsm.olimjohn.uz/api/product-list/', {
            params: {
                limit: limit, p: true, q:

                    inputValue
            }
        }).then((r) => {
            setProducts(r.data.results);
            setCount(r.data.count);
        })
    }

    return (
        <>

            <Navbar />

            <div className="bg-image">
                <div className="products-important  ">
                    <h1 className='products--products '>Products</h1>
                    <p>
                        <Link to="/" className='singleProduct_home'> <c className="home-products ">Home <AiOutlineRight /></c> </Link>
                        <Link to="/products" className="singleProduct_home"><c className="products-products">Products</c></Link>
                    </p>
                </div>
            </div>

            <section className='sofaaa__background'>
                <div className="row mx-auto">

                    <div className="col-md-4 inline">
                        <div onClick={toggleSidebar} className={isOpen ? 'filterOpen' : 'filterClosed'}>
                            <FontAwesomeIcon icon={faSlidersH} style={{ marginRight: '14px' }} color={isOpen ? 'warning' : 'dark'} /><span className='ml-2'>{isOpen ? 'Filter' : 'Filter'}</span>
                        </div>
                        <AiTwotoneAppstore className='appstore-icon' />
                        <AiOutlineLayout className='appstore-icon' />
                        <p className='rad-1'>{`Showing 1–${products.length} of ${count} results`}</p>
                    </div>


                    <div className="col-md-8 mt-20">
                        <p className='show-text'>Show</p>
                        <p className="display-number">
                            <input
                                type="number" onChange={(e) => setLimit(e.target.value)}
                                className="form-control w-px-60 rounded-0" value={limit}
                            />
                        </p>


                        <p className='sortby-text'>Sort by</p>
                        <p className='display-number'>
                            <select name="sort" id="sort" className='form-control rounded-0 w-px-188'>
                                <option value="">Default</option>
                            </select>
                        </p>
                    </div>

                </div>
            </section>

            <div className="container-fluid">
                <div className="col-md-12 d-flex">
                    <div className={`col-md-3 sidebar ${isOpen ? '' : 'd-none'}`}>
                        <ul className="">
                            <li><h2 className="menu__itemm" href="#">Title</h2></li>

                            <div className="ms-4 me-4">
                                <input
                                    type="search" onChange={(e) => handleSearch(e.target.value)}
                                    className="form-control rounded" placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="search-addon" />
                            </div>

                            <li><h2 className="menu__itemm" href="#">Categories</h2></li>

                            {
                                categories?.map(information => {
                                    return <Link to="" className="filter-texts" onClick={() => getProductsByCategory(information.id)}>{information?.title}</Link>
                                })
                            }

                            <li><h2 className="menu__itemm" href="#">Brand</h2></li>

                            {
                                brands?.map(brand => {
                                    return <Link to="" className="filter-texts" onClick={() => getProductsByBrand(brand.id)}>{brand?.title}</Link>
                                })
                            }

                        </ul>
                    </div>
                    <div className={productGridClass}>
                        <div className="d-inline-flex flex-wrap ">
                            {products.map(product => (
                                <div className={`${productCardClass} conter-content`} key={product.id}>
                                    <div className="photo-container mt-5  text-center">
                                        <div className="defaultVisible ">
                                            <img className={'cardPhotoStyle'} src={product?.images[0]?.photo} alt={product.name} />
                                            {product.discount && (
                                                <div>
                                                    <p className="numberr">{product.discount}</p>
                                                </div>
                                            )}
                                            {product.deduction && (
                                                <div>
                                                    <p className="numberr4">{product.deduction}</p>
                                                </div>
                                            )}
                                            <div className={`body-container777${product.isNew ? '4' : ''}`}>
                                                <h3 className="body-title">{product.title}</h3>
                                                <p className="body-text">{product.sub_title}</p>
                                            </div>
                                        </div>

                                        <div className="onHoverVisibleProduct position-absolute">
                                            <Button className="btn btn-light rounded-0 w-50 rad-0" onClick={() => navigate(`/single-product/${product.guid}`)}>
                                                {product.title}
                                            </Button>
                                            <br />
                                            <h6 className="share"><AiOutlineShareAlt /> Share</h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="container">
                <div className='conter-content mt-5 mb-5'>
                    <div className='d-flex'>
                        <button className='col-md-3 number__0'>1</button>
                        <button className='col-md-3 number__0'>2</button>
                        <button className='col-md-3 number__0'>3</button>
                        <button className='col-md-4 number__next'>Next</button>
                    </div>
                </div>
            </div> */}

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

export default ProductsPage