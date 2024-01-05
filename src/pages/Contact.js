import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Button } from "react-bootstrap";
import End from "../components/End"
import map from '../assets/img/map.png';
import { Link } from "react-router-dom"
import { useEffect } from "react";
import { AiFillEnvironment, AiFillClockCircle, AiFillPhone } from "react-icons/ai";
import axios from 'axios';


import {
    AiTwotoneAppstore,
    AiOutlineLayout,
    AiOutlineRight
} from 'react-icons/ai';


function Contact() {
    const [formData, setFormData] = React.useState(
        { firstName: "", subject: "", email: "", comments: "" }
    )
    const [information, setInformation] = useState()
    const getInformation = async () => {
        const response = await fetch('https://api.eplsm.uz/api/contact-item/')
        const data = await response.json()
        setInformation(data)
    }

    useEffect(() => {
        getInformation()
    }, [])

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSave = () => {
        console.log(formData);
        axios.post(`https://api.eplsm.uz/api/contact-form-create/`, {
            name: formData?.firstName,
            email: formData?.email,
            subject: formData?.subject,
            description: formData?.comments
        })
            .then(res => {
                alert('Сообщения успешно отправлено ')
                setFormData({ firstName: "", subject: "", email: "", comments: "" })
            })
    }

    return (
        <>

            <Navbar />

            <div className="bg-image">
                <div className="products-important  ">
                    <h1 className='products--products '>Contact</h1>
                    <p>
                        <Link to="/" className='singleProduct_home'> <c className="home-products ">Home <AiOutlineRight /></c> </Link>
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

                    {
                        information?.map(information => {
                            return <div className='col-md-3 contact-address col-3'>
                                <h5><AiFillEnvironment className='contact-icon' /> <d className="main-contact">Address</d></h5>
                                <p className='contact-text'>{information?.address}</p>
                            </div>
                        })
                    }

                    <div className='col-md-4'>
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

                    {
                        information?.map(information => {
                            return <div className='col-md-3 contact-address col-3'>
                                <h5><AiFillPhone className='contact-icon' />  <d className="main-contact">Phone</d></h5>
                                <p className='contact-text'>{information?.phone_primary}<br />{information?.phone_secondary}</p>
                            </div>

                        })
                    }
                    <div className='col-md-4'>
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


                    {
                        information?.map(information => {
                            return <div className='col-md-3 contact-address col-3'>
                                <h5><AiFillClockCircle className='contact-icon' /> <d className="main-contact">Working Time</d></h5>
                                <p className='contact-text'>{information?.work_start}<br />{information?.work_end}</p>
                            </div>
                        })
                    }


                    <div className='col-md-4'>
                        <p className='input-texts'>Subject</p>
                        <form>
                            <input
                                type="text"
                                placeholder="This is an optional"
                                onChange={handleChange}
                                name="subject"
                                value={formData.subject}
                                className='contact-input'
                            />
                        </form>
                    </div>


                </div>


                <div className='row'>
                    <div className='col-md-3 contact-address col-3'>

                    </div>


                    <div className='col-md-4'>
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
                        <button className="contact-button" type='button' onClick={handleSave}>Submit</button>
                    </div>


                </div>
            </div>



            <div className="map-div mt-5" >
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95942.48002517321!2d69.19696639704058!3d41.28269707463922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s" width="100%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>


            <End />


            {/* <img src={map} alt="" className='col-md-6 col-sm-8 col-10' /> */}

        </>
    )
}

export default Contact