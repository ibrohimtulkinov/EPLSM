import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { AiOutlineRight } from "react-icons/ai";
import singleProduct from "../assets/img/single_produc.png";
import ReactImageMagnify from "react-image-magnify";
import singleproductt from "../assets/img/single-productt.png";
import singleproducttt from "../assets/img/single-producttt.png";
import bodyPhoto1 from "../assets/img/body-photo1.png";
import bodyPhoto2 from "../assets/img/body-photo2.png";
import bodyPhoto3 from "../assets/img/body-photo3.png";
import bodyPhoto4 from "../assets/img/body-photo4.png";
import roche from "../assets/img/roche.png";
import { Button } from "react-bootstrap";
import { AiOutlineShareAlt } from "react-icons/ai";
import {
  AiOutlineDownCircle,
  AiOutlineTrophy,
  AiOutlineCustomerService,
  AiOutlineException,
  AiOutlineFileText,
} from "react-icons/ai";
import End from "../components/End";
import Body from "../components/Body";
import { useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../components/common/Loading";
import ProductCard from "../components/common/ProductCard";

function SingleBrand() {
  const [brandDetail, setBrandDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const { guid } = useParams();
  const [limit, setLimit] = useState(8);
  const [products, setProducts] = useState([]);
  const url = "https://api.eplsm.uz/api";
  const navigate = useNavigate();

  const getBrandDetail = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.eplsm.uz/api/brand-detail/${guid}`
    );
    const data = await response.json();
    setBrandDetail(data);
    axios
      .get(url + "/product-list/", {
        params: { p: true, limit: limit, brand: data?.id },
      })
      .then((r) => {
        setProducts(r.data.results);
      });
    setLoading(false);
  };

  useEffect(() => {
    getBrandDetail();
  }, [guid, limit]);

  const handleShowMore = () => {
    setLimit(limit + 4);
  };

  const handleAdd = async (guid, id) => {
    console.log(id);
    await fetch(
      `https://api.eplsm.uz/api/brand-download/${guid}?catalog_id=${id}`,
      { method: "get" }
    )
      .then(async (res) => {
        // console.log({ res });
        // console.log({ resJson: res.json() });

        return res.blob();
      })
      .then((blob) => {
        console.log({ blob });
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = "Document.pdf";

        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };

  return (
    <>
      <Navbar />

      <div className="sofa__background">
        <div className="d-flex container">
          <Link to="/" className="singleProduct_home">
            <c className="sofa__">Home</c>
            <AiOutlineRight className="icon-right" />
          </Link>
          <Link to="/brands" className="singleProduct_Product">
            <c className="sofa___">Brands</c>
            <AiOutlineRight className="icon-right" />
          </Link>
          <Link to={""} className="singleProduct_Asgaard ">
            <c className="sofa__sofa">{brandDetail?.title}</c>
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div className=" col-md-3 text-center">
            <img src={brandDetail?.photo} alt="" className="col-7 mt-5" />
          </div>
          <div className="col-md-7 mt-5">
            <p className="single-brand-main">{brandDetail?.title}</p>
            <p className="single-brand-text mt-4">
              <div
                dangerouslySetInnerHTML={{ __html: brandDetail.description }}
              />
            </p>
            <p
              className="single-brand-text mt-4 whitespace-pre-line"
              dangerouslySetInnerHTML={{
                __html: brandDetail?.description ?? "",
              }}
            ></p>
            <div className="text-start">
              <p className="singleBrand_"> Catalog</p>
              {/* {brandDetail?.length === 0 && "Nothing was found!"} */}
              {brandDetail?.catalogs?.map((catalog) => (
                <div
                  onClick={() => handleAdd(brandDetail?.guid, catalog.id)}
                  href={catalog?.catalog_file}
                  className="pdf mt-4 "
                >
                  <AiOutlineFileText className="text-white bg-danger me-2 blog-icon" />
                  {catalog?.catalog_file?.split("/", 6)[5]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="container">
        <h1 className="body-header mb-4 mt-5">Related Products</h1>

        <div className="">
          <div className="row justify-content-center">
            {products?.length === 0 && "Nothing was found!"}
            {products?.map((item) => (
              <ProductCard
                className={"col-md-4 col-xl-3 col-sm-5 mb-4"}
                guid={item?.guid}
                id={item?.id}
                image={item?.images?.[0]?.photo}
                title={item?.title}
              />
            ))}
          </div>
        </div>
        <div>
          <button
            className="body-button"
            type="button"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      </section>

      <div className="mt-5 mb-5 icons__background">
        {loading && <LoadingSpinner />}
        <div className="d-flex flex-wrap justify-content-around container">
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

export default SingleBrand;
