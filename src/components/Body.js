import { Button } from "react-bootstrap";
import React from "react"
import {AiOutlineShareAlt  } from 'react-icons/ai';


export default function Body() {
  return (
    <section>
      <h1 className="body-header">Our Products</h1>
      <div className="container mt-5">
        <div className="conter-content">
          <div className="photo-container ">
            <div className="defaultVisible">
              <img className="body-photos" src="./img/body-photo1.png" alt="Фото 1" />
              <div>
                <p className="number">-30%</p>
              </div>
              <div className="body-container">
                <h3 className="body-title ">Syltherine</h3>
                <p className="body-text">Stylish cafe chair</p>
              </div>
            </div>
            <div className="onHoverVisible position-absolute">
            
              <Button className="btn btn-light text-warning rounded-0 w-50 rad-0">Syltherine</Button>
              <br />
              <h6 className="share"><AiOutlineShareAlt />Share</h6>
              
            </div>
          </div>
        </div>


        <div className="conter-content">
        <div className="photo-container">
        <div className="defaultVisible">
          <img className="body-photos" src="./img/body-photo2.png" alt="Фото 2" />
          <div className="body-container2">
            <h3 className="body-title">Leviosa</h3>
            <p className="body-text">Stylish cafe chair</p>
          </div>
          </div>
          <div className="onHoverVisible position-absolute">
              <Button className="btn btn-light text-warning rounded-0 w-50 rad-0">Leviosa</Button>
              <br />
              <h6 className="share"><AiOutlineShareAlt />Share</h6>
            </div>
        </div>
        </div>

        <div className="conter-content">
        <div className="photo-container">
        <div className="defaultVisible">
          <img className="body-photos" src="./img/body-photo3.png" alt="Фото 3" />
          <div>
            <p className="number">-50%</p>
          </div>
          </div>
          <div className="body-container3">
            <h3 className="body-title">Lolito</h3>
            <p className="body-text">Luxury big sofa</p>
          </div>
        <div className="onHoverVisible position-absolute">
            <Button className="btn btn-light text-warning rounded-0 w-50 rad-0">Lolito</Button>
            <br />
            <h6 className="share"><AiOutlineShareAlt />Share</h6>
         </div>
         </div>
        </div>

        <div className="conter-content">
        <div className="photo-container">
        <div className="defaultVisible">
          <img className="body-photos" src="./img/body-photo4.png" alt="Фото 3" />
          <div>
            <p className="number4">New</p>
          </div>
          </div>
          <div className="body-container4">
            <h3 className="body-title">Respira</h3>
            <p className="body-text">Outdoor bar table and stool</p>
          </div>
          <div className="onHoverVisible position-absolute">
            <Button className="btn btn-light text-warning rounded-0 w-50 rad-0">Respira</Button>
            <br />
            <h6 className="share"><AiOutlineShareAlt />Share</h6>
         </div>
        </div>
      </div>
      </div>
  
      <div className="container">

      <div className="conter-content">
        <div className="photo-container">
        <div className="defaultVision">
          <img className="body-photoss" src="./img/body-photo5.png" alt="Фото 3" />
          </div>
          <div className="body-container5">
            <h3 className="body-title">Grifo</h3>
            <p className="body-text">Night lamp</p>
          </div>
          <div className="onHoverVisible position-absolute">
            <Button className="btn btn-light text-warning rounded-0 w-50 rad-0">Grifo</Button>
            <br />
            <h6 className="share"><AiOutlineShareAlt />Share</h6>
         </div>
        </div>
       </div>

       

      <div className="conter-content">
        <div className="photo-container">
        <div className="defaultVisible">
          <img className="body-photoss" src="./img/body-photo6.png" alt="Фото 3" />
          <div>
            <p className="numberNEW">New</p>
          </div>
          </div>
          <div className="body-container6">
            <h3 className="body-title">Muggo</h3>
            <p className="body-text">Small mug</p>
          </div>
          <div className="onHoverVisible position-absolute">
            <Button className="btn btn-light text-warning rounded-0 w-50 rad-0">Muggo</Button>
            <br />
            <h6 className="share"><AiOutlineShareAlt />Share</h6>
         </div>
        </div>
      </div>

        <div className="conter-content">
        <div className="photo-container">
        <div className="defaultVisible">
          <img className="body-photoss" src="./img/body-photo7.png" alt="Фото 3" />
          <div>
            <p className="number7">-50%</p>
          </div>
          </div>
          <div className="body-container7">
            <h3 className="body-title">Pingky</h3>
            <p className="body-text">Cute bed set</p>
          </div>
          <div className="onHoverVisible position-absolute">
            <Button className="btn btn-light text-warning rounded-0 w-50 rad-0">Pingky</Button>
            <br />
            <h6 className="share"><AiOutlineShareAlt />Share</h6>
         </div>
        </div>
        </div>

        <div className="conter-content">
        <div className="photo-container">
        <div className="defaultVisible">
          <img className="body-photoss" src="./img/body-photo8.png" alt="Фото 3" />
          <div>
            <p className="numberNEW">New</p>
          </div>
          </div>
          <div className="body-container8">
            <h3 className="body-title">Potty</h3>
            <p className="body-text">Minimalist flower pot</p>
          </div>
          <div className="onHoverVisible position-absolute">
            <Button className="btn btn-light text-warning rounded-0 w-50 rad-0">Potty</Button>
            <br />
            <h6 className="share"><AiOutlineShareAlt />Share</h6>
         </div>
        </div>
        </div>

      </div>
      <div>
        <a href="#"><button className="body-button">Show More</button></a>
      </div>
    </section>
  )
}