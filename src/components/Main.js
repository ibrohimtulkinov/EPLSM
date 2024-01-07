import React from "react"
import mainPhoto1 from '../assets/img/main-photo1.png';
import mainPhoto2 from '../assets/img/main-photo2.png';
import mainPhoto3 from '../assets/img/main-photo3.png';
import {useEffect} from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Slider from "react-slick";

export default function Main() {
    const navigate = useNavigate();
    const [products, setProducts] = useState()
    const getProducts = async () => {
        const response = await fetch("https://api.eplsm.uz/api/product-category-list/")
        const data = await response.json()
        setProducts(data)
    }

    useEffect(() => {
        getProducts()
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <section className="main-div my-4">
            <h1 className="main-title">Browse The Range</h1>
            <p className="main-text mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Slider {...settings} style={{width: '90%', overflow: 'hidden', marginLeft: '10%'}}>
                {
                    products?.map(item => {
                        return <div onClick={() => navigate(`/categories/${item.guid}`)}
                                    className='d-block w-px-450'>
                            <img src={item.photo} className='img-fluid h-px-488' alt=""/>
                            <span className='text-center fs-4 fw-600'>{item?.title}</span>
                        </div>
                    })
                }
            </Slider>
        </section>
    )
}