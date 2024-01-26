import { Button } from "react-bootstrap";
import { AiOutlineShareAlt } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./common/ProductCard";
import Heading from "./common/Heading";
import { content } from "../localization/content";
import { LangContext } from "../context/langContext";

export default function Body() {
  const navigate = useNavigate();
  const [products, setProducts] = useState();
  const [limit, setLimit] = useState(8);

  const {lang} = useContext(LangContext)
  console.log("lang");

  const getProducts = async (param1) => {
    const response = await fetch(
      `https://api.eplsm.uz/api/product-list/?${param1}`,{
        headers:{
          'Accept-Language':lang
      }
      }
    );
    const data = await response.json();
    setProducts(data.results);
  };

  useEffect(() => {
    getProducts(`limit=${limit}&p=true`);
  }, [limit, lang]);

  const handleShowMore = () => {
    setLimit(limit + 8);
  };

  return (
    <>
      <section className="container py-5">
       <Heading className={"text-center mb-3"}>
          {
           content[lang]?.product
          }
        </Heading>
        <div className="px-2">
          <div className="row justify-content-center   ">
            {products?.map((item) => (
              <ProductCard
                guid={item?.guid}
                id={item?.id}
                subTitle={item?.sub_title}
                title={item?.title}
                image={item?.images?.[0]?.photo_medium}
                className={"col-md-4 col-lg-3 col-sm-6 mb-4 home-product"}
                key={item?.id}
              />
            ))}
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
         <button className="body-button" type="button" onClick={handleShowMore}>
        {
           content[lang]?.show
          }
        </button>
      </section>

      {/* <MyCarousel /> */}
    </>
  );
}

{
  /* <div className="col-md-2 col-sm-10">
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
          </div> */
}
