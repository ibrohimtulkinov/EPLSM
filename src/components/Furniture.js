import React from "react"
import Heading from "./common/Heading";

const   Image = ({ src, alt }) => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (

    <>
      <div className="container">
        <div className="text-center">
          <p className="furniture-title">Share your set up with</p>
          <Heading>#FuniroFurniture</Heading>
        </div>
      </div>

    </>
  )
}

export default Image;