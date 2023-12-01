import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import {Button} from "react-bootstrap";
import End from "../components/End"
import map from '../assets/img/map.png';
import {Link} from "react-router-dom"
import { AiFillEnvironment,AiFillClockCircle ,AiFillPhone  } from "react-icons/ai";


import {
    AiTwotoneAppstore,
    AiOutlineLayout,
    AiOutlineRight
} from 'react-icons/ai';


function Contact() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", email: "", comments: ""}
    )
   
    console.log(formData.comments)

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    return(
   <>

      <Navbar />

            <div className="bg-image">
                <div className="products-important  text-start col-3  col-md-3 col-lx-12 ">
                    <h1 className='products--products '>Contact</h1>
                    <p>
                        <Link to="/" className='singleProduct_home'> <c className="home-products ">Home <AiOutlineRight/></c> </Link> 
                       <Link to="/contact" className="singleProduct_home"><c className="products-products">Contact</c></Link> 
                    </p>
                </div>
            </div>
           
            <div>
                <div className='container text-center '>
                  <h4 className='contact-start mt-5 col-md-4'>Get In Touch With Us</h4>
                </div>
                <dir className='container text-center contact-under col-md-4'>
                    <p>For More Information About Our Product & Services. Please Feel Free To Drop Us <br />  An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </dir>
             </div>

             <div className='container-fluid '>
                <div className='row mt-5'>
                    <div className='col-md-3 contact-address col-3'>
                        <h5><AiFillEnvironment className='contact-icon'/> <d className="main-contact">Address</d></h5>
                        <p className='contact-text'>236 5th SE Avenue, New <br /> York NY10000, United <br /> States</p>
                    </div>


                    <div className='col-md-6'>
                    <p className='input-texts'>Your name</p>
                    <form>
                         <input 
                              type="text"
                              placeholder="Abc"
                              onChange={handleChange}
                              name="firstName"
                              value={formData.firstName}
                              className='contact-name'
                           />
                    </form>
                    </div>
                    


                </div>
                <div className='row'>
                    <div className='col-md-3 contact-address col-3'>
                        <h5><AiFillPhone   className='contact-icon'/>  <d className="main-contact">Phone</d></h5>
                        <p className='contact-text'>Mobile: +(84) 546-6789 <br />Hotline: +(84) 456-6789</p>
                    </div>


                    <div className='col-md-6'>
                    <p className='input-texts'>Email address</p>
                    <form>
                         <input 
                            type="email"
                            placeholder="Abc@daf.com"
                            onChange={handleChange}
                            name="email"
                            value={formData.email}
                            className='contact-input'
                           />
                    </form>
                    </div>


                </div>
                <div className='row'>
                    <div className='col-md-3 contact-address col-3'>
                        <h5><AiFillClockCircle className='contact-icon'/> <d className="main-contact">Working Time</d></h5>
                        <p className='contact-text'>Monday-Friday: 9:00 - <br /> 22:00 <br />Saturday-Sunday: 9:00 - <br /> 21:00</p>
                    </div>


                    <div className='col-md-6'>
                    <p className='input-texts'>Subject</p>
                    <form>
                         <input 
                               type="text"
                               placeholder="This is an optional"
                               onChange={handleChange}
                               name="lastName"
                               value={formData.lastName}
                               className='contact-input'
                           />
                    </form>
                    </div>


                </div>


                <div className='row'>
                    <div className='col-md-3 contact-address col-3'>
                       
                    </div>


                    <div className='col-md-6'>
                    <p className='input-texts'>Message</p>
                    <form>
                        <textarea 
                           type="comments"
                           placeholder="Hi I'd like to ask about"
                           onChange={handleChange}
                           name="comments"
                           value={formData.comments}
                           className='contact-textarea'
                  />
                    </form>
                    <a href=""><button className="contact-button">Submit</button></a>
                    </div>


                </div>
             </div>


               
                  <div className='text-center mt-5'>
                    <img src={map} alt="" width='1000px' height='400px' />
                  </div>
               

               <End />
            

    </>
    )
}

export default Contact