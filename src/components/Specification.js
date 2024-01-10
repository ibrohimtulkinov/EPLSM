import React from 'react'

function Review() {
  return (
    <div class="table-wrapper-scroll-y my-custom-scrollbar mt-4 mx-auto container">
      <table class="table table-bordered table-striped mb-0 mx-auto">
        <thead>
          <tr>
            <th colspan="3" class="text-center">Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colspan="1" class="text-center">Name</th>
            <th colspan="1" class="text-center">Size</th>
            <th colspan="1" class="text-center">Load</th>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>12mm</td>
            <td>23kg</td>
          </tr>
          <tr>
            <td>Larry</td>
            <td>32mm</td>
            <td>35kg</td>
          </tr>
          <tr>
            <td>Mark</td>
            <td>1mm</td>
            <td>45kg</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>223mm</td>
            <td>67kg</td>
          </tr>
          <tr>
            <td>Larry</td>
            <td>3255mm</td>
            <td>89kg</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Review




// <div>
//        {
//          product && product?.description?.length > 0 ?
//            (

//            )
//            :
//            (<h4 className='text-center my-4'>No information added!</h4>)
//        }
//      </div>