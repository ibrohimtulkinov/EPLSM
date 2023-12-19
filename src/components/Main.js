import React from "react"
import mainPhoto1 from '../assets/img/main-photo1.png';
import mainPhoto2 from '../assets/img/main-photo2.png';
import mainPhoto3 from '../assets/img/main-photo3.png';
import { useEffect } from "react";
import { useState } from "react";

export default function Main() {

  const [products, setProducts] = useState()
  const getProducts = async () => {
    const response = await fetch("https://eplsm.olimjohn.uz/api/product-category-list/")
    const data = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  console.log({ products });

    return (
      <section className="">
          <h1 className="main-title">Browse The Range</h1>
          <p className="main-text mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="container">
<div class="row text-center gap-5">
    {
      products?.map(item => {
      return <div className="photo col-md-3 ">
                 <img src={item?.photo_medium}  alt="#" />
               <div className="glow-wrap">
                 <i className="glow" > </i>
               </div>
               <p className="caption">{item?.title}</p>
            </div>
    })
    }
          {/* <div className="photo col-md-3 ">
                 <img src={mainPhoto1} alt="#" />
               <div className="glow-wrap">
                 <i className="glow" > </i>
               </div>
               <p className="caption">Dinner</p>
            </div>

            <div className="photo col-md-3">
                 <img src={mainPhoto2} alt="#" />
               <div className="glow-wrap">
                 <i className="glow" > </i>
               </div>
               <p className="caption">Living</p>
            </div>

            <div className="photo col-md-3 ">
                 <img src={mainPhoto3} alt="#" />
               <div className="glow-wrap">
                 <i className="glow" > </i>
               </div>
               <p className="caption">Bedroom</p>
            </div> */}

</div>
   </div>
      </section>
    )
}