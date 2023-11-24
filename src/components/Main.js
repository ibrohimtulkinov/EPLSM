import React from "react"
import mainPhoto1 from '../assets/img/main-photo1.png';
import mainPhoto2 from '../assets/img/main-photo2.png';
import mainPhoto3 from '../assets/img/main-photo3.png';

export default function Main() {
    return (
      <section>
          <h1 className="main-title">Browse The Range</h1>
          <p className="main-text mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="container">
            <div className="photo---container  ">

            <a href="#" className="photo">
                 <img src={mainPhoto1} alt="#" />
               <div className="glow-wrap">
                 <i className="glow" > </i>
               </div>
               </a>

              <div className="caption">Dining</div>
            </div>
          <div className="photo---container ">

          <a href="#" className="photo">
                 <img src={mainPhoto2} alt="#" />
               <div className="glow-wrap">
                 <i className="glow"> </i>
               </div>
               </a>

              <div className="caption">Living</div>
          </div>
          <div className="photo---container ">

          <a href="#" className="photo">
                 <img src={mainPhoto3} alt="#"/>
               <div className="glow-wrap">
                 <i className="glow"> </i>
               </div>
               </a>

              <div className="caption">Bedroom</div>
          </div>
           </div>
      </section>
    )
}