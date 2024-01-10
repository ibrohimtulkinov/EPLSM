import { Button } from "react-bootstrap";
import React from "react"
import { AiOutlineShareAlt } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function Body() {
  const navigate = useNavigate();
  const [products, setProducts] = useState()
  const [limit, setLimit] = useState(8);

  const getProducts = async (param1) => {
    const response = await fetch(`https://api.eplsm.uz/api/product-list/?${param1}`);
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
    <>
      <section className="mx-auto overflow-x-hidden">
        <h1 className="body-header mb-4 mt-5">Our Products</h1>
        <div className="row justify-content-center overflow-x-hidden">

          <div className="row justify-content-center gap-5  ">
            {
              products?.map(item => (
                <div className="col-md-2 col-sm-5 card-div">
                  <div className="conter-content">
                    <div className="photo-container ">
                      <div className="defaultVisible mx-auto">
                        <img src={item?.images?.[0]?.photo_medium} class="body-photos" alt="..." />
                        <div class="card card-header mx-auto">
                          <h5 class="body-title text-start">{item?.title}</h5>
                          <p class="body-text text-start">{item?.sub_title}</p>
                        </div>
                      </div>
                      <div className="onHoverVisible position-absolute mx-auto">
                        <Button className="btn btn-light  rounded-0 w-50 rad-0" onClick={() => navigate(`/single-product/${item.guid}`)}>{item?.title}</Button>
                        <br />
                        <h6 className="share"><AiOutlineShareAlt />Share</h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        {/* 
        <div className="d-inline-flex flex-wrap justify-content-center px-3 gap-5 mt-5">
          {
            products?.map(item => (
              <div className="conter-content">
                <div className="photo-container">
                  <div className="defaultVisible">
                    <img className="body-photos" src={item?.images?.[0]?.photo_medium} alt="Фото 1" />
                    <div className="body-container ">
                      <h3 className="body-title ">{item?.title}</h3>
                      <p className="body-text">{item?.sub_title}</p>
                    </div>
                  </div>
                  <div className="onHoverVisible position-absolute">
                    <Button className="btn btn-light  rounded-0 w-50 rad-0" onClick={() => navigate(`/single-product/${item.guid}`)}>{item?.title}</Button>
                    <br />
                    <h6 className="share"><AiOutlineShareAlt />Share</h6>
                  </div>
                </div>
              </div>
            ))
          }
        </div> */}









      </section>
      <div className="div-block">
        <button className="body-button" type='button' onClick={handleShowMore}>Show More</button>
      </div>
      {/* <MyCarousel /> */}
    </>

  )
}







{/* <div className="col-md-2 col-sm-10">
            <div class="card" >
              <img src="..." class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-10">
            <div class="card" >
              <img src="..." class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div class="card" >
              <img src="..." class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div> */}