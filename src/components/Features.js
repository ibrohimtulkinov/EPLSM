import React, { useEffect, useState } from 'react'
import { url } from '../pages/SingleProduct';
import axios from 'axios';

function Features({ product }) {

    const [features, setFeatures] = useState([]);

    useEffect(() => {
        axios.get(url + '/product-feature-list').then((r) => {
            setFeatures(r.data);
        })
    }, [])

    return (
        <div className='container'>
            <div className="row text-start">
                {features?.length === 0 && "Nothing was found!"}
                {
                    features?.map((item) => (
                        <>
                            <p className='fw-bold my-0 py-0'>{item.title}</p>
                            <p>{item.description}</p>
                        </>
                    ))
                }
            </div>

        </div>
    )
}

export default Features;