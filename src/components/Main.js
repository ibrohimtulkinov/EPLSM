import React from "react"

export default function Main() {
    return (
      <section>
          <h1 className="main-title">Browse The Range</h1>
          <p className="main-text mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="container">
            <div className="photo---container  ">

            <a href="#" class="photo">
                 <img src="./img/main-photo1.png" />
               <div class="glow-wrap">
                 <i class="glow"></i>
               </div>
               </a>

              <div className="caption">Dining</div>
            </div>
          <div className="photo---container ">

          <a href="#" class="photo">
                 <img src="./img/main-photo2.png" />
               <div class="glow-wrap">
                 <i class="glow"></i>
               </div>
               </a>

              <div className="caption">Living</div>
          </div>
          <div className="photo---container ">

          <a href="#" class="photo">
                 <img src="./img/main-photo3.png" />
               <div class="glow-wrap">
                 <i class="glow"></i>
               </div>
               </a>

              <div className="caption">Bedroom</div>
          </div>
           </div>
      </section>
    )
}