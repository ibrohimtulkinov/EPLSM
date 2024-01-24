import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import Slider from "react-slick";

const Card = () => {
  const [logo, setLogo] = useState();
  const getLogo = async () => {
    const response = await fetch("https://api.eplsm.uz/api/slider-list/");
    const data = await response.json();
    setLogo(data);
  };

  useEffect(() => {
    getLogo();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider style={{ overflowX: "hidden" }}>
      {logo?.map((item) => {
        return (
          <div className="">
            <div
              key={item?.id}
              className="w-100 py-5"
              style={{
                background: `url(${item?.photo}) no-repeat center center / cover`,
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex justify-content-end px-4 container">
                <div className="hero-content-wrapper my-5">
                  <p className="card-title">New Arrival</p>
                  <h1 className="card-header">{item?.title}</h1>
                  <p className="card-text">{item?.description}</p>
                  <button className="card-button">BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Card;
