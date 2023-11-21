import React from "react"

export default function Card() {
    return (
      <div className="cardd">
        <div className="under-card col-md-4">
          <p className="card-title">New Arrival</p>
          <h1 className="card-header">Discover Products</h1>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
          <a href=""><button className="card-button">BUY NOW</button></a>
        </div> 
      </div>
    )
}