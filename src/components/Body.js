import { Button } from "react-bootstrap";
import React from "react"
import { AiOutlineShareAlt } from 'react-icons/ai';
import bodyPhoto1 from '../assets/img/body-photo1.png';
import bodyPhoto2 from '../assets/img/body-photo2.png';
import bodyPhoto3 from '../assets/img/body-photo3.png';
import bodyPhoto4 from '../assets/img/body-photo4.png';
import bodyPhoto5 from '../assets/img/body-photo5.png';
import bodyPhoto6 from '../assets/img/body-photo6.png';
import bodyPhoto7 from '../assets/img/body-photo7.png';
import bodyPhoto8 from '../assets/img/body-photo8.png';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";


export default function Body() {
  const navigate = useNavigate();
  const [products, setProducts] = useState()
  const [limit, setLimit] = useState(8);

  const getProducts = async (param1) => {
    const response = await fetch(`https://eplsm.olimjohn.uz/api/product-list/?${param1}`);
    const data = await response.json()
    setProducts(data.results)
  }

  useEffect(() => {
    getProducts(`limit=${limit}&p=true`);
  }, [limit]);

  const handleShowMore = () => {
    setLimit(limit + 4);
  };

  return (
    <section className="mx-auto">
      <h1 className="body-header mb-4 mt-5">Our Products</h1>

      <div className="d-inline-flex flex-wrap justify-content-center px-3 gap-5">
        {
          products?.map(item => (
            <div className="conter-content">
              <div className="photo-container ">
                <div className="defaultVisible">
                  <img className="body-photos" src={item?.images?.[0]?.photo_medium} alt="Фото 1" />
                  <div>
                    <p className="number">-30%</p>
                  </div>
                  <div className="body-container">
                    <h3 className="body-title ">{item?.title}</h3>
                    <p className="body-text">{item?.sub_title}</p>
                  </div>
                </div>
                <div className="onHoverVisible position-absolute">
                  <Button className="btn btn-light text-warning rounded-0 w-50 rad-0" onClick={() => navigate('/SingleProduct')}>Syltherine</Button>
                  <br />
                  <h6 className="share"><AiOutlineShareAlt />Share</h6>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div>
        <button className="body-button" type='button' onClick={handleShowMore}>Show More</button>
      </div>
    </section>
  )
}