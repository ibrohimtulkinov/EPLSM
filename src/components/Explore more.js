import React from "react"
import exploreImages from '../assets/img/explore-images.png';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import explore from '../assets/img/explore-images.png';
import explore2 from '../assets/img/explore2.png';
import explore3 from '../assets/img/explore3.png';
import explore4 from '../assets/img/explore4.png';
import { useEffect } from "react";
import { useState } from "react";

export default function Explore() {

  const [products, setProducts] = useState()
  const getProducts = async () => {
    const response = await fetch('https://eplsm.olimjohn.uz/api/slider-list/')
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
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <section className="explore">
      <div className='carousel-container'>
        <div className='carousel-slide'>
          <div className="row">
            <div className="col-md-5 align-middle text-start mx-auto">
              <h3 className="text-explore">50+ Beautiful rooms <br /> inspiration</h3>
              <p className="explore-text">Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
              <button className="explore-button  w-25 ">Explore More</button>
            </div>
            <div className="col-md-5 me-auto">
              <Slider {...settings}>
                   
                    {
                      products?.map(item => {
                        return <div>
                                 <img src={item?.photo} alt="Room 1" className="col-md-3 col-3" />
                              </div>
                      })
                    }
               

                {/* <div>
                  <img src={explore2} alt="Room 1" className="col-md-3 col-3" />
                </div>
                <div>
                  <img src={explore3} alt="Room 3" className="col-md-3 col-3" />
                </div>
                <div>
                  <img src={explore4} alt="Room 3" className="col-md-3 col-3" />
                </div> */}
              </Slider>
            </div>
          </div>
        </div>

      </div>
    </section >
  )
}