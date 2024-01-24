import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { AiOutlineRight } from "react-icons/ai";
import ReactImageMagnify from "react-image-magnify";
import { useEffect } from "react";
import End from "../components/End";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineDownCircle,
  AiOutlineTrophy,
  AiOutlineCustomerService,
  AiOutlineException,
} from "react-icons/ai";
import Description from "../components/Description";
import AdditionalInformation from "../components/AdditionalInformation";
import Review from "../components/Specification";
import Features from "../components/Features";
import axios from "axios";
import ProductCard from "../components/common/ProductCard";
import LoadingSpinner from "../components/common/Loading";

export const url = "https://api.eplsm.uz/api";

function SingleProduct() {

const [responsive, setResponsive] = useState(false)
useEffect(() => {
if(window.innerWidth < 600) {
  setResponsive(true)
}
}, [])

  const [selectedImage, setSelectedImage] = useState();

  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState();
  const [limit, setLimit] = useState(4);

  const [loading, setLoading] = useState(false);

  const { guid } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(url + `/product-detail/${guid}`).then((r) => {
      setProduct(r.data);
      setSelectedImage(r.data.images[0].id);
      axios
        .get(url + "/product-list/", {
          params: { limit: limit, p: true, category: r.data?.category?.id },
        })
        .then((r) => {
          setProducts(r.data.results);
          setLoading(false);
        });
    });
  }, [limit, guid]);

  const handleShowMore = () => {
    setLimit(limit + 4);
  };

  const [activeTab, setActiveTab] = useState("Review");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabs = () => {
    switch (activeTab) {
      case "Description":
        return <Description product={product} />;

      case "AddtiotionalInformation":
        return <AdditionalInformation product={product} />;

      case "Review":
        return <Review />;
      case "Features":
        return <Features />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex sofa__background">
        <Link to="/" className="singleProduct_home">
          <c className="sofa__ ">Home</c>
          <AiOutlineRight className="icon-right" />
        </Link>
        <Link to="/products" className="singleProduct_Product">
          <c className="sofa___ ">Product</c>
          <AiOutlineRight className="icon-right" />
        </Link>
        <Link to={""} className="singleProduct_Asgaard ">
          <c className="sofa__sofa">{product?.title}</c>
        </Link>
      </div>
      
          <div className="globContainer">
            <div className="d-md-flex gap-5">
              <div className="d-flex gap-3  mt-5">
                <div className="d-flex flex-column  sp-imagemap gap-3 ">
                  {product?.images?.map((image) => (
                    <div className="rounded-3 overflow-hidden ">
                      <img
                        src={image.photo_small}
                        alt=""
                        width="76px"
                        className="single_photos"
                        height="80px"
                        onClick={() => setSelectedImage(image?.id)}
                      />
                    </div>
                  ))}
                </div>
                <div className="col-md-4 zoom-size  ">
                  {product?.images?.map((item) => (
                    <div
                      style={{
                        ...(item?.id != selectedImage && { display: "none" }),
                      }}
                      className=""
                    >
                      <ReactImageMagnify
                        className="borderRadiusZoom"
                        style={{
                          ...(item?.id != selectedImage && { display: "none" }),
                        }}
                        imageClassName="magnify_image"
                        enlargedImageContainerClassName="magnify_image-container"
                        {...{
                          smallImage: {
                            alt: "Product",
                            src: item?.photo_medium,
                            width: responsive ? 280 : 370,
                            height: responsive ? 280 : 450,
                          },
                          largeImage: {
                            src: item?.photo,
                            width: responsive ? 280 : 650,
                            height: responsive ? 280 : 600,
                          },
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 zoom-text">
                <p className="single-product-main">{product?.title}</p>
                <p className="single-product-text mt-4">
                  {product?.description.length > 0
                    ? product?.description[0].description
                    : ""}
                </p>
                <div className="fs-5">
                    <p className="">
                      <span className="color-primary">Brand</span>{" "}{product?.brand?.title || "Information not added!"}
                    </p>
                    <p className="">
                      <span className="color-primary">Category</span>{" "}{product?.category?.title || "Information not added!"}
                    </p>
                </div>
                {/* <p className=" fs-4">
                  {" "}
                  <d className=" ">Brand</d>{" "}
                  {product?.brand?.title || "Information not added!"}
                </p>
                <p className=" fs-4">
                  {" "}
                  <d className="singleBrand_">Category</d>{" "}
                  {product?.category?.title}
                </p> */}
              </div>
            </div>
          </div>
          <div className="border-top mt-5"></div>
          <div>
            <div className="container overflow-x-hidden">
              <div className="text-center d-flex mt-5">
                <button
                  onClick={() => handleTabClick("Review")}
                  className={
                    activeTab === `Review`
                      ? `singleproduct-info-active col-md-2`
                      : `singleproduct-info col-md-2`
                  }
                >
                  Specification
                </button>
                <button
                  onClick={() => handleTabClick("Features")}
                  className={
                    activeTab === `Features`
                      ? `singleproduct-info-data col-md-3`
                      : `singleproduct-data col-md-3`
                  }
                >
                  Features
                </button>
                <button
                  onClick={() => handleTabClick("Description")}
                  className={
                    activeTab === `Description`
                      ? `singleproduct-info-description col-md-2`
                      : `singleproduct-description col-md-2`
                  }
                >
                  Description
                </button>
                <button
                  onClick={() => handleTabClick("AddtiotionalInformation")}
                  className={
                    activeTab === `AddtiotionalInformation`
                      ? `singleproduct-info-active col-md-5`
                      : `singleproduct-info col-md-5 col-5`
                  }
                >
                  Additional Information
                </button>
              </div>
            </div>
            {renderTabs()}
          </div>

      <section className="">
        <div className="text-center mt-5 ">
          <p className="border-top"></p>
          <p className="mt-5 mb-4 related0">Related Products</p>
        </div>
        <div className="row w-100 justify-content-center">
          {products?.length === 0 && "Nothing was found!"}
          {products?.map((item) => (
            <ProductCard
              className={"col-md-4 col-xl-3 col-sm-6 mb-3"}
              guid={item?.guid}
              id={item?.id}
              image={item?.images?.[0]?.photo_medium}
              subTitle={item?.sub_title}
              title={item?.title}
              key={item?.id}
            />
          ))}
        </div>

        <div className="text-center">
          <button
            className="product-button my-3"
            type="button"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      </section>
      {loading && <LoadingSpinner />}

      {/* 
        <div className="conter-content">
          <div className="photo-container">
            <div className="defaultVisible">
              <img className="body-photos" src={bodyPhoto2} alt="Фото 2" />
              <div className="body-container2">
                <h3 className="body-title">Leviosa</h3>
                <p className="body-text">Stylish cafe chair</p>
              </div>
            </div>
            <div className="onHoverVisible position-absolute">
              <Button className="btn btn-light text-warning rounded-0 w-50 rad-0">Leviosa</Button>
              <br />
              <h6 className="share"><AiOutlineShareAlt />Share</h6>
            </div>
          </div>
        </div> */}
      {/* 
        <div className="conter-content">
          <div className="photo-container">
            <div className="defaultVisible">
              <img className="body-photos" src={bodyPhoto3} alt="Фото 3" />
              <div>
                <p className="number">-50%</p>
              </div>
            </div>
            <div className="body-container3">
              <h3 className="body-title">Lolito</h3>
              <p className="body-text">Luxury big sofa</p>
            </div>
            <div className="onHoverVisible position-absolute">
              <Button className="btn btn-light text-warning rounded-0 w-50 rad-0">Lolito</Button>
              <br />
              <h6 className="share"><AiOutlineShareAlt />Share</h6>
            </div>
          </div>
        </div> */}

      {/* <div className="conter-content">
          <div className="photo-container">
            <div className="defaultVisible">
              <img className="body-photos" src={bodyPhoto4} alt="Фото 3" />
              <div>
                <p className="number4">New</p>
              </div>
            </div>
            <div className="body-container4">
              <h3 className="body-title">Respira</h3>
              <p className="body-text">Outdoor bar table and stool</p>
            </div>
            <div className="onHoverVisible position-absolute">
              <Button className="btn btn-light text-warning rounded-0 w-50 rad-0">Respira</Button>
              <br />
              <h6 className="share"><AiOutlineShareAlt />Share</h6>
            </div>
          </div>
        </div>*/}

      <div className="mt-5 mb-5 icons__background">
        <div className="d-flex flex-wrap justify-content-around ms-5">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-2">
            <div className="d-flex align-items-center">
              <span className="icons me-3">
                <AiOutlineTrophy size="4em" />
              </span>
              <div className="text-start">
                <p className="icons__header">High Quality</p>
                <p className="icons__text">Crafted from top materials</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-2">
            <div className="d-flex align-items-center">
              <span className="icons me-3">
                <AiOutlineDownCircle size="4em" />
              </span>
              <div className="text-start">
                <p className="icons__header">Warranty Protection</p>
                <p className="icons__text">Over 2 years</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-2">
            <div className="d-flex align-items-center">
              <span className="icons me-3">
                <AiOutlineException size="4em" />
              </span>
              <div className="text-start">
                <p className="icons__header">Free Shipping</p>
                <p className="icons__text">Order over 150 $</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-2">
            <div className="d-flex align-items-center">
              <span className="icons me-3">
                <AiOutlineCustomerService size="4em" />
              </span>
              <div className="text-start">
                <p className="icons__header">24/7 Support</p>
                <p className="icons__text">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <End />
    </>
  );
}

export default SingleProduct;
