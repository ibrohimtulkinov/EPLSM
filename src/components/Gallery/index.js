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
import Gallery from 'react-photo-gallery';

export default function Galleries() {
    const photos = [
        {
            src: furniture9,
            width: 1,
            height: 5 
        },
        {
            src: furniture3,
            width: 7,
            height: 5,
        },        
        {
            src: furniture1,
            width: 1,
            height: 1
        },
        {
            src: furniture2,
            width: 1,
            height: 1
        },
        {
            src: furniture7,
            width: -1,
            height: 1
        },
        {
            src: furniture8,
            width: 3,
            height: 3
        },
        {
            src: furniture4,
            width: 2,
            height: 3
        },
        {
            src: furniture5,
            width: 3,
            height: 2
        },
        {
            src: furniture6,
            width: 4,
            height: 2
        },
      
    ];

    return (
        <>
            <Gallery photos={photos}/>
        </>
    )
}