import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { Button } from "react-bootstrap";
import End from "../components/End";
import map from "../assets/img/map.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  AiFillEnvironment,
  AiFillClockCircle,
  AiFillPhone,
} from "react-icons/ai";
import axios from "axios";

import {
  AiTwotoneAppstore,
  AiOutlineLayout,
  AiOutlineRight,
} from "react-icons/ai";
import Heading from "../components/common/Heading";
import { ContactInput } from "../components/ContactInput";
import { LangContext } from "../context/langContext";
import { content } from "../localization/content";

function Contact() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    subject: "",
    email: "",
    comments: "",
  });
  const [information, setInformation] = useState(null);
  const getInformation = async () => {
    const response = await fetch("https://api.eplsm.uz/api/contact-item/");
    const data = await response.json();
    setInformation(data);
  };

  useEffect(() => {
    getInformation();
  }, []);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleSave = () => {
    console.log(formData);
    axios
      .post(`https://api.eplsm.uz/api/contact-form-create/`, {
        name: formData?.firstName,
        email: formData?.email,
        subject: formData?.subject,
        description: formData?.comments,
      })
      .then((res) => {
        alert("Сообщения успешно отправлено ");
        setFormData({ firstName: "", subject: "", email: "", comments: "" });
      });
  };

  const{lang} = useContext(LangContext);
  console.log("lang");

  return (
    <>
      <Navbar />

      <div className="bg-image">
        <div className="products-important  ">
          <h1 className="products--products ">{content[lang]?.contact}</h1>
          <p>
            <Link to="/" className="singleProduct_home">
              {" "}
              <c className="home-products ">
              {content[lang]?.home} <AiOutlineRight />
              </c>{" "}
            </Link>
            <Link to="/contact" className="singleProduct_home">
              <c className="products-products">{content[lang]?.contact}</c>
            </Link>
          </p>
        </div>
      </div>

      <div className="mb-5" >
        <Heading className={"text-center mb-4"}>Get In Touch With Us</Heading>

        <dir className="container text-center contact-under ">
          <p>
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us <br /> An Email. Our Staff Always Be There To Help You
            Out. Do Not Hesitate!
          </p>
        </dir>
      </div>

      <div className="container  ">
        <div className="row justify-content-center gap-2">
          <div className="col-5">
            <div className="contact-address">
              <h5>
                <AiFillEnvironment className="contact-icon" />{" "}
                <d className="main-contact">Address</d>
              </h5>
              <p className="contact-text">{information?.[0]?.address}</p>
            </div>
            <div className="contact-address">
              <h5>
                <AiFillPhone className="contact-icon" />{" "}
                <d className="main-contact">Phone</d>
              </h5>
              <p className="contact-text">
                {information?.[0]?.phone_primary}
                <br />
                {information?.[0]?.phone_secondary}
              </p>
            </div>
            <div className="contact-address">
              <h5>
                <AiFillClockCircle className="contact-icon" />{" "}
                <d className="main-contact">Working Time</d>
              </h5>
              <p className="contact-text">
                {information?.[0]?.work_start}
                <br />
                {information?.[0]?.work_end}
              </p>
            </div>
          </div>
          <div className="col-5 d-flex flex-column gap-3">
            <ContactInput
              label={"Your name"}
              name={"firstName"}
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Abc"
            />
            <ContactInput
              label={"Email address"}
              name={"email"}
              value={formData.email}
              onChange={handleChange}
              placeholder="Abc@daf.com"
              type="email"
            />
            <ContactInput
              label={"Subject"}
              name={"subject"}
              value={formData.subject}
              onChange={handleChange}
              placeholder="This is an optional"
            />
            <ContactInput
              label={"Message"}
              name={"comments"}
              value={formData.comments}
              onChange={handleChange}
              placeholder="Hi I'd like to ask about"
            />
            <button
              className="contact-button"
              type="button"
              onClick={handleSave}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="w-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95942.48002517321!2d69.19696639704058!3d41.28269707463922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s"
            width="100%"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <End />

      {/* <img src={map} alt="" className='col-md-6 col-sm-8 col-10' /> */}
    </>
  );
}

export default Contact;
