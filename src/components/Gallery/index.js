import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import furniture1 from '../../assets/img/furniture1.png';
import furniture2 from '../../assets/img/furniture2.png';
import furniture3 from '../../assets/img/furniture3.png';
import furniture4 from '../../assets/img/furniture4.png';
import furniture5 from '../../assets/img/furniture5.png';
import furniture6 from '../../assets/img/furniture6.png';
import furniture7 from '../../assets/img/furniture7.png';
import furniture9 from '../../assets/img/furniture9.png';
import furniture8 from '../../assets/img/furniture8.png';
import { useEffect } from "react";
import { useState } from "react";


export default function Galleries() {

    const [gallery, setGallery] = useState()
    const getGallery = async () => {
        const response = await fetch('https://eplsm.olimjohn.uz/api/gallery-list/')
        const data = await response.json()
        setGallery(data)
    }

    useEffect(() => {
        getGallery()
    }, [])

    return (
        <>
            {
                gallery?.map((item, index) => (
                    <img src={item?.photo_medium} alt="" className={'ms-5 ' + `furniture${index + 1}_photo`} />
                ))
            }


            {/* <img src={furniture3} alt=""  className="furniture3_photo ms-3 col-md-4 col-sm-2 "/>
            <img src={furniture1} alt=""  className="furniture1_photo ms-3 col-md-2 col-sm-2"/>
            <img src={furniture2} alt=""  className="furniture2_photo ms-3 col-md-2 col-sm-2"/>
            <img src={furniture7} alt=""  className="furniture7_photo ms-3 col-md-2 col-sm-2"/>
       

        <div>
            <img src={furniture8} alt=""  className="furniture8_photo col-md-2 col-sm-2"/>
            <img src={furniture4} alt=""  className="furniture4_photo ms-3 col-md-3 col-sm-2"/>
         <div className="text-end furniture-photo">
            <img src={furniture5} alt=""  className="furniture5_photo ms-3 col-md-4
              col-sm-2 "/>
            <img src={furniture6} alt=""  className="furniture6_photo ms-3 col-md-3 col-sm-2"/>
        </div>
        </div> */}
        </>
    )
}