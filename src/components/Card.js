import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { Carousel } from 'react-bootstrap';

const Card = () => {


  const [logo, setLogo] = useState()
  const getLogo = async () => {
    const response = await fetch('https://eplsm.olimjohn.uz/api/slider-list/')
    const data = await response.json()
    setLogo(data)
  }


  useEffect(() => {
    getLogo()
  }, [])


  return (
    <Carousel>


      {/* <Carousel.Item interval={1000}>
        <div className="cardd">
          <div className="under-card col-md-4 col-8 ">
            <p className="card-title">New Arrival</p>
            <h1 className="card-header ">Discover Products</h1>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
            <a href=""><button className="card-button">BUY NOW</button></a>
          </div>
        </div>
      </Carousel.Item> */}

      {
        logo?.map(logo => {
          return <Carousel.Item interval={1000}>
            <div style={{ background: `url(${logo?.photo}) no-repeat center center / cover`, backgroundSize: 'cover', width: '100%', height: '900px' }}>
              <div className="under-card col-md-4 col-8 ">
                <p className="card-title">New Arrival</p>
                <h1 className="card-header ">{logo?.title}</h1>
                <p className="card-text">{logo?.description}</p>
                <button className="card-button">BUY NOW</button>
              </div>
            </div>
          </Carousel.Item>
        })
      }


    </Carousel>
  );
};

export default Card;
