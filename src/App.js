import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Body from "./components/Body"
import Main from "./components/Main"
import End from "./components/End"
import Image from "./components/Furniture"
import Explore from "./components/Explore more"
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Card />
      <Main />
      <Body />
      <Explore />
      <div className="image-grid">
        <Image src="../img/furniture8.png" alt="Image 1" />
        <Image src="../img/furniture9.png" alt="Image 2" />
        <Image src="../img/furniture3.png" alt="Image 3" />
        <Image src="../img/furniture1.png" alt="Image 4" />
        <Image src="../img/furniture2.png" alt="Image 5" />
        <Image src="../img/furniture7.png" alt="Image 6" />
        <Image src="../img/furniture6.png" alt="Image 7" />
        <Image src="../img/furniture4.png" alt="Image 8" />
        <Image src="../img/furniture5.png" alt="Image 9" />
      </div>
      <End />
  </div>
  )
}