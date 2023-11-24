import React from "react"
import exploreImages from '../assets/img/explore-images.png';

export default function Explore() {
    return (
  <section className="explore">
    <div className="container-lg">
      <div className="row">
        <div className="col-md-7 text-start ">
           <h1 className="explore-title ">50+ Beautiful rooms <br/> inspiration</h1>
           <p className="explore-text ">Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
           <a href="#"><button className="explore-button ">Explore More</button></a>
        </div>
    <div className="col-md-2">
        <img src={exploreImages} alt="" className="explore-image"/>
        <div className="explore-images-header">
           <p className="explore-images-title" >01-Bed Room</p>
           <p className="explore-images-text">Inner Pease</p>
        </div>
    </div>
    </div>
    </div>
    </section>
    )
}