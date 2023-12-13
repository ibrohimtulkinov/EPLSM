import React from "react"
import exploreImages from '../assets/img/explore-images.png';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import explore from '../assets/img/explore-images.png';
import explore2 from '../assets/img/explore2.png';
import explore3 from '../assets/img/explore3.png';
import explore4 from '../assets/img/explore4.png';

export default function Explore() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <section className="explore">
      <div className='carousel-container'>
        <div className='carousel-slide'>
          <div className="row">
            <div className="col-md-3 text-start  textof-explore mt-5">
              <h3 className="text-explore">50+ Beautiful rooms <br /> inspiration</h3>
              <p className="explore-text">Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
              <button className="explore-button">Explore More</button>
            </div>
            <Slider {...settings}>
              <div className="col-md-4">
                <img src={explore} alt="Room 1" className="col-md-4 col-4" />
              </div>
              <div className="col-md-4">
                <img src={explore2} alt="Room 1" className="col-md-4 col-4" />
              </div>
              <div className="col-md-4">
                <img src={explore3} alt="Room 3" className="col-md-4 col-4" />
              </div>
              <div className="col-md-4">
                <img src={explore4} alt="Room 3" className="col-md-4 col-4" />
              </div>
            </Slider>
          </div>
        </div>

      </div>
    </section>
  )
}