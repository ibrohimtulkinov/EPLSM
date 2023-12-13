import React from "react"


const Image = ({ src, alt }) => {
  const [isClicked, setIsClicked] =  React.useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    
  <>
  <div className="container">
    <div className="text-center">
      <p className="furniture-title">Share your set up with</p>
      <h1 className="furniture-header">#FuniroFurniture</h1>
    </div>
  </div>
 
  </>
  )
}

export default Image;