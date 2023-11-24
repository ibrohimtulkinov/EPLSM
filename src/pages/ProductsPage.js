import React, {useState} from 'react'
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
import {Button} from "react-bootstrap";
import End from "../components/End"
import {Link} from "react-router-dom"
import bodyPhoto1 from '../assets/img/body-photo4.png';
import bodyPhoto2 from '../assets/img/body-photo4.png';
import bodyPhoto3 from '../assets/img/body-photo4.png';
import bodyPhoto4 from '../assets/img/body-photo4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

function ProductsPage() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const productGridClass = isOpen ? 'col-md-9' : 'col-md-12';
    const productCardClass = isOpen ? 'col-md-4' : 'col-md-3';

    const products = [
        {
            id: 1,
            name: "Syltherine",
            description: "Stylish cafe chair",
            image: bodyPhoto2,
            discount: "-30%",
            isNew: false
        },
        {
            id: 2,
            name: "Leviosa",
            description: "Stylish cafe chair",
            image: bodyPhoto1,
            discount: "",
            isNew: false
        },
        {
            id: 3,
            name: "Leviosa",
            description: "Stylish cafe chair",
            image: bodyPhoto4,
            discount: "",
            isNew: false
        },
        {
            id: 4,
            name: "Leviosa",
            description: "Stylish cafe chair",
            image: bodyPhoto3,
            discount: "",
            isNew: false
        },
        {
            id: 5,
            name: "Leviosa",
            description: "Stylish cafe chair",
            image: bodyPhoto2,
            discount: "",
            isNew: false
        },
        {
            id: 6,
            name: "sadfasdfsadf",
            description: "Stylish asdfsadfasdfsdf chair",
            image: bodyPhoto1,
            discount: "",
            isNew: false
        },
        {
            id: 7,
            name: "Levadsfasdfsadfiosa",
            description: "Stylish cafe chair",
            image: bodyPhoto4,
            discount: "",
            isNew: false
        },
        {
            id: 8,
            name: "dasfsf",
            description: "Stylish cafe chair",
            image: bodyPhoto2,
            discount: "",
            isNew: false
        },
        {
            id: 9,
            name: "asdfdsafadsf",
            description: "Stylish cafe chair",
            image: bodyPhoto1,
            discount: "",
            isNew: false
        },
    ]

    return (
        <>
            <Navbar/>
            <div className="products-background ">
                <div className="products-main text-start ">
                    <h1 className='products--products '>Products</h1>
                    <p>
                        <c className="home-products ">Home <AiOutlineRight/></c>
                        <c className="products-products">Products</c>
                    </p>
                </div>
            </div>
            <div className='under-background'>
                <div className='d-flex  col-4 col-md-6 col-xl-12 '>
                    <div onClick={toggleSidebar} className={isOpen ? 'filterOpen' : 'filterClosed'}>
                        <FontAwesomeIcon icon={faSlidersH} style={{marginRight: '14px'}} color={isOpen ? 'warning' : 'dark'} /><span className='ml-2'>{isOpen ? 'Filter' : 'Filter'}</span>
                    </div>

                    <AiTwotoneAppstore className='appstore-icon'/>
                    <AiOutlineLayout className='appstore-icon'/>
                    <p className='rad-1'>Showing 1–16 of 32 results</p>
                    <p className='show-text'>Show</p>
                    <p className='n-16'>16</p>
                    <p className='sortby-text'>Short by</p>
                    <p className='default-text'>Default</p>
                </div>
            </div>
            <div className="container-fluid">
                <div className="col-md-12 d-flex">
                    <div className={`col-md-3 sidebar ${isOpen ? '' : 'd-none'}`}>
                        <ul className="">
                            <li><h2 className="" href="#">Title</h2></li>

                            <div className="ms-4 me-4">
                                <input type="search" className="form-control rounded" placeholder="Search"
                                       aria-label="Search"
                                       aria-describedby="search-addon"/>
                            </div>

                            <li><h2 className="" href="#">Categories</h2></li>


                            <Link to="/SingleProduct" className="filter-texts">Sofa</Link>
                            <p className='filter-texts'>Chair</p>
                            <p className='filter-texts'>Table</p>
                            <p className='filter-texts'>Sofa</p>
                            <p className='filter-texts'>Chair</p>
                            <p className='filter-texts'>Table</p>


                            <li><h2 className="" href="#">Brand</h2></li>

                            <p className='filter-texts'>BMW</p>
                            <p className='filter-texts'>Mercedes - Benz</p>
                            <p className='filter-texts'>Audi</p>
                            <p className='filter-texts'>Toyota</p>
                            <p className='filter-texts'>BYD</p>

                        </ul>
                    </div>
                    <div className={productGridClass}>
                        <div className="d-inline-flex flex-wrap">
                            {products.map(product => (
                                <div className={`${productCardClass} conter-content`} key={product.id}>
                                    <div className="photo-container">
                                        <div className="defaultVisible">
                                            <img className={'cardPhotoStyle'} src={product.image} alt={product.name}/>
                                            {product.discount && (
                                                <div>
                                                    <p className="number">{product.discount}</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className={`body-container${product.isNew ? '4' : ''}`}>
                                            <h3 className="body-title">{product.name}</h3>
                                            <p className="body-text">{product.description}</p>
                                        </div>
                                        <div className="onHoverVisible position-absolute">
                                            <Button className="btn btn-light text-warning rounded-0 w-50 rad-0">
                                                {product.name}
                                            </Button>
                                            <br/>
                                            <h6 className="share"><AiOutlineShareAlt/> Share</h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
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

export default ProductsPage