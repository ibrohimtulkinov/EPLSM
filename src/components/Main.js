import React from "react"
import mainPhoto1 from '../assets/img/main-photo1.png';
import mainPhoto2 from '../assets/img/main-photo2.png';
import mainPhoto3 from '../assets/img/main-photo3.png';

export default function Main() {
    return (
      <section className="">
          <h1 className="main-title">Browse The Range</h1>
          <p className="main-text mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="container ">
<div class="row text-center gap-5">
    
          <div className="photo col-md-3 ">
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
            </div>

</div>
   </div>
      </section>
    )
}