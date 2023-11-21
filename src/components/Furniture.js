import React from "react"


const Image = ({ src, alt }) => {
  const [isClicked, setIsClicked] =  React.useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    
  <>
    <div className="image-container">
      <img
        className={isClicked ? 'image-clicked' : 'image'}
        src={src}
        alt={alt}
        onClick={handleClick}
      />
      {isClicked && (
        <div className="overlay" onClick={handleClick}>
          <img src={src} alt={alt} className="clicked-image" />
        </div>
      )}
    </div>
  </>
  )
}

export default Image;