import React from "react"
import mainPhoto1 from '../assets/img/main-photo1.png';
import mainPhoto2 from '../assets/img/main-photo2.png';
import mainPhoto3 from '../assets/img/main-photo3.png';
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <section className="main-div">
      <h1 className="main-title">Browse The Range</h1>
      <p className="main-text mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="container">
        <div class="row col-9">
          {
            products?.map(item => {
              return <div className="photo col-md-4 mt-5  text-center" onClick={() => navigate(`/categories/${item.guid}`)}>
                <img src={item?.photo_medium} alt="#" />
                <div className="glow-wrap">
                  <i className="glow" > </i>
                </div>
                <p className="caption">{item?.title}</p>
              </div>

            })
          }
        </div>
      </div>
    </section>
  )
}