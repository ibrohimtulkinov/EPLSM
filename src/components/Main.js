import React from "react"
import mainPhoto1 from '../assets/img/main-photo1.png';
import mainPhoto2 from '../assets/img/main-photo2.png';
import mainPhoto3 from '../assets/img/main-photo3.png';
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

export default function Main() {
    const navigate = useNavigate();
    const [limit, setLimit] = useState(10);
    const [products, setProducts] = useState([]);

    const getProducts = async (param1) => {
        const response = await fetch(`https://api.eplsm.uz/api/product-category-list/?${param1}`);
        const data = await response.json()
        setProducts(data?.results)
    }

    useEffect(() => {
        getProducts(`limit=${limit}&p=true`);
    }, [limit]);


    const handleShowMore = () => {
        setLimit(limit + 5);
    };


    return (
        <>
            <section className="main-div my-4 mx-auto ">
                <div>
                    <h1 className="main-title">Browse The Range</h1>
                    <p className="main-text mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                {
                    products?.map(item => (
                        <div onClick={() => navigate(`/categories/${item.guid}`)} className=" border-color  border-div ms-3 mt-3">
                            <div className="img-hover-zoom--colorize">
                                <img src={item.photo} className="mainphoto px-5 pt-5" alt="" />
                            </div>
                            <div className="mt-4 pb-4 ">
                                <span className='text-center main-point '>{item?.title}</span>
                            </div>
                        </div>
                    ))
                }


            </section >
            <div className="div-block">
                <button className="body-button" type='button' onClick={handleShowMore}>Show More</button>
            </div>

            {/* < div className=" border-color border-div ms-3 mt-3">
                    <div className="img-hover-zoom--colorize">
                        <img src={mainPhoto3} className="mainphoto  px-5 pt-5" alt="" />
                    </div>
                    <div className="mt-4 pb-4 ">
                        <span className='text-center    main-title'>Bed</span>
                    </div>
            
                <div className=" border-color border-div ms-3 mt-3">
                    <div className="img-hover-zoom--colorize">
                        <img src={mainPhoto3} className="mainphoto  px-5 pt-5" alt="" />
                    </div>
                    <div className="mt-4 pb-4 ">
                        <span className='text-center   main-title'>Bed</span>
                    </div>
                </div>
                <div className=" border-color border-div ms-3 mt-3">
                    <div className="img-hover-zoom--colorize">
                        <img src={mainPhoto3} className="mainphoto  px-5 pt-5" alt="" />
                    </div>
                    <div className="mt-4 pb-4 ">
                        <span className='text-center  main-title'>Bed</span>
                    </div>
                </div> */}

            {/* <section className="main-div my-4 mx-auto ">
                <div className=" border-color border-div ms-3 mt-3">
                    <div className="img-hover-zoom--colorize">
                        <img src={mainPhoto3} className="mainphoto  px-5 pt-5" alt="" />
                    </div>
                    <div className="mt-4 pb-4 ">
                        <span className='text-center main-title'>Bed</span>
                    </div>
                </div>
                <div className=" border-color border-div ms-3 mt-3">
                    <div className="img-hover-zoom--colorize">
                        <img src={mainPhoto3} className="mainphoto  px-5 pt-5" alt="" />
                    </div>
                    <div className="mt-4 pb-4 ">
                        <span className='text-center    main-title'>Bed</span>
                    </div>
                </div>
                <div className="border-color border-div ms-3 mt-3">
                    <div className="img-hover-zoom--colorize">
                        <img src={mainPhoto3} className="mainphoto  px-5 pt-5" alt="" />
                    </div>
                    <div className="mt-4 pb-4 ">
                        <span className='text-center  main-title'>Bed</span>
                    </div>
                </div>
                <div className=" border-color border-div ms-3 mt-3">
                    <div className="img-hover-zoom--colorize">
                        <img src={mainPhoto3} className="mainphoto  px-5 pt-5" alt="" />
                    </div>
                    <div className="mt-4 pb-4 ">
                        <span className='text-center  main-title'>Bed</span>
                    </div>
                </div>
            </section> */}
        </>
    )
}









// <section className="main-div my-4">
// <h1 className="main-title">Browse The Range</h1>
// <p className="main-text mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
// <Slider {...settings} style={{ width: '90%', overflow: 'hidden', marginLeft: '10%' }}>
//     {
//         products?.map(item => {
//             return <div onClick={() => navigate(`/categories/${item.guid}`)}
//                 className='d-block w-px-450 '>
//                 <img src={item.photo} className='img-fluid h-px-488 shadow' alt="" />
//                 <span className='text-center fs-4 fw-600'>{item?.title}</span>
//             </div>
//         })
//     }
// </Slider>
// </section>