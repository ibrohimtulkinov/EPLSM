import React from 'react'
import Navbar from '../components/Navbar'
import { Image } from 'react-bootstrap';
import {AiOutlineRight  } from 'react-icons/ai';

function SingleProduct() {
    return(
        <>
            <Navbar />
            <div className='d-flex sofa__background'>
                <p> <c className='sofa__ '>Home</c>  <AiOutlineRight className='icon-right'/> </p>
                <p> <c className='sofa___'>Product</c>  <AiOutlineRight className='icon-right'/> </p>
                <p className='sofa__sofa'>Asgaard sofa</p>
            </div>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-4'>
                    <Image src='../img/single_produc.png' className='single_product'/>
                </div>
                <div className='col-md-3 mt-5'>
                    <p className='single-product-main'>Asgaard sofa</p>
                    <p className='single-product-text mt-4'>Setting the bar as one of the loudest speakers in its class, the <br /> Kilburn is a compact, stout-hearted hero with a well-balanced <br /> audio which boasts a <br /> clear midrange and extended highs for a sound.</p>
                    <p>Brand Roche</p>
                    <p>Category Sofa</p>
                </div>
            </div>
        </>
    )
}


export default SingleProduct