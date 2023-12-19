import React from 'react'
import singleproductt from '../assets/img/single-productt.png';
import singleproducttt from '../assets/img/single-producttt.png';
function AdditionalInformation() {
  return (
    <div>
    <div className='container'>
        <div className='row text-start mt-4'>

            <p className='text-of-singleproduct text-start'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest  speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange  and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you  to fine tune the controls  to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
            <p className='text-of-singleproduct text-start'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and  sound of Marshall, unplugs the chords, and takes the show on the road.</p>
        </div>
    </div>

    <div className='container mt-5'>
        <div className='row d-flex '>
        <img src={singleproductt} className='col-6' alt="" />
            <img src={singleproducttt} className='col-6' alt="" />
           
        </div>
    </div>
</div>
  )
}

export default AdditionalInformation