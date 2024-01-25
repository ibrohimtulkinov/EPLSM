import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, guid, subTitle, image, className }) => {
  return (
    <div className={className}  >
      <div className={`product-card`}>
      <div className="product-card_shadow">
        <Link className="product-card_link line-clamp-2" to={`/single-product/${guid}`}>
          {title}
        </Link>
      </div>
      <img src={image} alt={title} className="product-card_image" />
      <div className="product-card_info">
        <Link to={`/single-product/${guid}`} className="product-card_title line-clamp-2">{title}</Link>
        {/* <p className="product-card_subtitle">{subTitle}</p> */}
      </div>
    </div>
    </div>
  );
};

export default ProductCard;
