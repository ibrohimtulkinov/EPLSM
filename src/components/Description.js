import React from 'react'

import singleproductt from '../assets/img/single-productt.png';
import singleproducttt from '../assets/img/single-producttt.png';
function Description({ product }) {
    return (
        <div>
            <div className='container'>
                <div className='row text-start mt-4'>
                    <p className='text-of-singleproduct text-start'>{product?.description.length > 0 ? product?.description[0]?.description : ''}</p>
                </div>
            </div>

            <div className='container mt-5'>
                <div className='row d-flex '>
                    {
                        product?.description.length > 0 ? product?.description[0]?.images.map((image) => (
                            <img src={image?.photo} className='col-6' alt="" />
                        )) : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default Description