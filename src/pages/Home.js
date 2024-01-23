import React from "react"
import Navbar from "../components/Navbar"
import Card from "../components/Card"
import Body from "../components/Body"
import Main from "../components/Main"
import End from "../components/End"
import Image from "../components/Furniture"
import Explore from "../components/Explore more"
import "../style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Galleries from "../components/Gallery";
import HomeCategories from "../components/HomeCategories"
// import MyCarousel from "./components/sofaa";

export default function Home() {
  return (
    <div>
      <Navbar />  
      <Card />
      <HomeCategories  />
      {/* <Main /> */}
      <Body />
      <Explore />
      <Image />
      <Galleries />
      <End />
      {/* <MyCarousel /> */}
    </div>
  )
}






