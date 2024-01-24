import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import {
  AiOutlineDownCircle,
  AiOutlineTrophy,
  AiOutlineCustomerService,
  AiOutlineException,
  AiOutlineFileText,
  AiOutlineAndroid
} from "react-icons/ai";
import End from "./End";
import Body from "./Body";
import { useEffect } from "react";
import axios from "axios";
import ProductCard from "./common/ProductCard";
import CategoriesSwiper from "./CategoriesSwiper";
import { useQuery } from "@tanstack/react-query";
import instance from "../utils/axios";
import LoadingSpinner from "./common/Loading";

function CategoriesDetail() {
  const [categoryDetail, setCategoryDetail] = useState([]);
  const { guid } = useParams();
  // const [limit, setLimit] = useState(8);
  // const [products, setProducts] = useState([]);
  const url = "https://api.eplsm.uz/api";
  const navigate = useNavigate();

  const getCategoryDetail = async () => {
    const response = await fetch(
      `https://api.eplsm.uz/api/product-category-detail/${guid}`
    );
    const data = await response.json();
    setCategoryDetail(data);
    axios
      .get(url + "/product-list/", {
        params: { p: true, limit: limit, category: data?.id },
      })
      .then((r) => {
        setProducts(r.data.results);
      });
  };

  useEffect(() => {
    getCategoryDetail();
  }, [guid]);

  const handleShowMore = () => {
    setLimit(limit + 4);
  };
  // console.log({ products });

  const { data: categories, isLoading } = useQuery({
    queryFn: () =>
      instance.get("product-category-list").then((res) => res.data),
    queryKey: ["categories/all"],
  });


  const [brands, setBrands] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const productGridClass = isOpen ? "col-3" : "col-md-6 col-lg-4 col-xl-3 p-3";
  const productCardClass = isOpen ? "col-md-4" : "col-md-3";
  const [limit, setLimit] = useState(16);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  // const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getBrands();
    // getCategories();
  }, []);

  useEffect(() => {
    getProducts();
  }, [limit, page]);

  // const getCategories = async () => {
  //   const response = await fetch(
  //     "https://api.eplsm.uz/api/product-category-list/"
  //   );
  //   const data = await response.json();
  //   setCategories(data);
  // };

  const getProducts = async () => {
    setLoading(true);
    const offset = (page - 1) * limit;
    axios
      .get("https://api.eplsm.uz/api/product-list/", {
        params: { limit, p: true, offset },
      })
      .then((r) => {
        setCount(r?.data?.count);
        setProducts(r?.data?.results);
        setLoading(false);
      });
  };

  const getBrands = async () => {
    axios.get("https://api.eplsm.uz/api/brand-list/").then((r) => {
      setBrands(r.data);
    });
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const getProductsByCategory = (id) => {
    axios
      .get("https://api.eplsm.uz/api/product-list/", {
        params: { category: id, p: true, limit: limit },
      })
      .then((r) => {
        setProducts(r.data.results);
        setCount(r.data.count);
      });
  };

  const getProductsByBrand = (id) => {
    axios
      .get("https://api.eplsm.uz/api/product-list/", {
        params: { brand: id, p: true, limit: limit },
      })
      .then((r) => {
        setProducts(r.data.results);
        setCount(r.data.count);
      });
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(count / limit);

    if (totalPages <= 4) {
      return Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`col-md-3 number__${page === index + 1 ? "active" : "0"}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ));
    }

    const pagesToShow = 2;
    const pages = [];

    for (let i = 1; i <= pagesToShow; i++) {
      pages.push(
        <button
          key={i}
          className={`col-md-2 number__${page === i ? "active" : "0"}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    if (page > pagesToShow + 1) {
      pages.push(<button className={`col-md-1 number__0 `}>...</button>);
    }
    if (page < totalPages - pagesToShow) {
      pages.push(<button className={`col-md-1 number__0`}>...</button>);
    }
    for (let i = totalPages - 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`col-md-2 number__${page === i ? "active" : "0"}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  const handleSearch = (inputValue) => {
    axios
      .get("https://api.eplsm.uz/api/product-list/", {
        params: {
          limit: limit,
          p: true,
          q: inputValue,
        },
      })
      .then((r) => {
        setProducts(r.data.results);
        setCount(r.data.count);
      });
  };


  return (
    <>
      <Navbar />
      <div style={{ height: "fit-content" }} className="bg-image py-5">
        <div className="py-5 ">
          <h1 className="text-center fs-3 ">{categoryDetail?.title}</h1>
          <p className="text-center fs-4">Browse The Range</p>
        </div>
      </div>

      <div className="globContainer categories-wrapper-container">
        <div className="card-wrapper m-2">
          <CategoriesSwiper categories={categories} />
        </div>
      </div>

      {/* <div className="d-flex sofa__background">
        <Link to="/" className="singleProduct_home">
          <c className="sofa__ ">Home</c>
          <AiOutlineRight className="icon-right" />
        </Link>
        <Link to="/categories" className="singleProduct_Product">
          <c className="sofa___ ">Categories</c>
          <AiOutlineRight className="icon-right" />
        </Link>
        <Link to={""} className="singleProduct_Asgaard ">
          <c className="sofa__sofa ">{categoryDetail?.title}</c>
        </Link>
      </div>

      <div className="row m-auto">
        <div className=" col-md-3 text-center">
          <img
            src={categoryDetail?.photo_medium}
            alt=""
            className="col-7 mt-5"
          />
        </div>
        <div className="col-md-5 mt-5">
          <p className="single-brand-main">{categoryDetail?.title}</p>
        </div>
      </div> */}

      {/* <section className="mx-auto overflow-x-hidden">
        <h1 className="body-header mb-4 mt-5">Category Products</h1>

        <div className="row justify-content-center overflow-x-hidden">
          <div className="row justify-content-center gap-5  ">
            {products?.length === 0 && "Nothing was found!"}
            {products?.map((item) => (
              <ProductCard
                className={"col-md-2 col-sm-5"}
                guid={item?.guid}
                id={item?.id}
                image={item?.images?.[0]?.photo_medium}
                subTitle={item?.sub_title}
                title={item?.title}
                key={item?.id}
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
      </section> */}

<section className="sofaaa__background">
        <div className="row mx-auto">
          <div className="text-start inline justify-content-between">
            {" "}
            {/* Flex container */}
            {/* ... other elements ... */}
            <div>
              {" "}
              {/* This div contains all your existing elements */}
              <div
                onClick={toggleSidebar}
                className={isOpen ? "filterOpen" : "filterClosed"}
              >
                <FontAwesomeIcon
                  icon={faSlidersH}
                  style={{ marginRight: "14px" }}
                  color={isOpen ? "warning" : "dark"}
                />
                <span className="ml-2">{isOpen ? "Filter" : "Filter"}</span>
              </div>
              <p className="show-text ms-5 ps-3">Show</p>
              <p className="display-number">
                <input
                  type="number"
                  onChange={(e) => setLimit(e.target.value)}
                  className="form-control w-px-60 rounded-0 ms-2"
                  value={limit}
                />
              </p>
              <p className="rad-1 ms-4 mb-0">{`Showing 1–${products.length} of ${count} results`}</p>
            </div>
            <div className="search-input mt-4 me-4">
              {" "}
              {/* Input container */}
              <input
                type="search"
                onChange={(e) => handleSearch(e.target.value)}
                className="form-control rounded w-px-250"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid">
        <div className="col-md-12 d-flex">
          <div className={` sidebar ${isOpen ? "w-px-550" : "d-none"}`}>
            <ul className="">
              <li>
                <h2 className="menu__itemm" href="#">
                  Title
                </h2>
              </li>

              <div className="ms-4 me-4">
                <input
                  type="search"
                  onChange={(e) => handleSearch(e.target.value)}
                  className="form-control rounded w-px-250"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>

              <li>
                <h2 className="menu__itemm" href="#">
                  Categories
                </h2>
              </li>
              {categories?.length === 0 && "Nothing was found!"}
              {
              categories?.map((information) => {
                return (
                  <Link
                    to=""
                    className="filter-texts"
                    onClick={() => getProductsByCategory(information.id)}
                  >
                    {information?.title}
                  </Link>
                );
              })
              }

              <li>
                <h2 className="menu__itemm" href="#">
                  Brand
                </h2>
              </li>

              {(showMore ? brands : brands?.slice(0, 5))?.map((brand) => {
                return (
                  <Link
                    to=""
                    className="filter-texts"
                    onClick={() => getProductsByBrand(brand.id)}
                  >
                    {brand?.title}
                  </Link>
                );
              })}

              <div
                className="mt-3 open-button w-px-60 text-center"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Less" : "More"}{" "}
              </div>
            </ul>
          </div>

          <div className={isOpen ? "d-none d-md-block w-100" : "container"}>
            <div className="row w-100">
              {loading ? (
                <LoadingSpinner />
              ) : count > 0 ? (
                products?.map((product) => (
                  // <div
                  //   className={productGridClass + ""}
                  //   style={{ height: "446px", position: "relative" }}
                  //   onClick={() => navigate(`/single-product/${product.guid}`)}
                  // >
                  //   <div className="w-100" style={{ height: "80%" }}>
                  //     <div
                  //       className="product-image-container"
                  //       style={{ height: "100%" }}
                  //     >
                  //       <img
                  //         src={product?.images[0]?.photo}
                  //         alt=""
                  //         style={{
                  //           width: "100%",
                  //           height: "100%",
                  //           objectFit: "cover",
                  //         }}
                  //       />
                  //       <div className="overlay">
                  //         <Button
                  //           className="btn btn-light  rounded-0 w-50 rad-00"
                  //           onClick={() =>
                  //             navigate(`/single-product/${product.guid}`)
                  //           }
                  //         >
                  //           {product?.title}
                  //         </Button>
                  //         <h6 className="share">
                  //           <AiOutlineShareAlt /> Share
                  //         </h6>
                  //       </div>
                  //     </div>
                  //     <div className="card card-header w-100">
                  //       <h5 class="body-title text-start">{product?.title}</h5>
                  //       <p class="body-text text-start">{product?.sub_title}</p>
                  //     </div>
                  //   </div>
                  // </div>
                  <ProductCard
                    className={productGridClass}
                    guid={product?.guid}
                    id={product?.id}
                    subTitle={product?.sub_title}
                    title={product?.title}
                    image={product?.images?.[0]?.photo_medium}
                    key={product?.id}
                  />
                ))
              ) : (
                <h3 className="text-center my-4">
                  Nothing was found!
                  <AiOutlineAndroid />
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container justify-content-center">
        <div className="conter-content mt-5 mb-5">
          <div className="d-flex">
            {page > 1 && (
              <button
                className="col-md-4 number__prev"
                onClick={() => handlePageChange(page - 1)}
              >
                Previous
              </button>
            )}
            {renderPagination()}
            {page < Math.ceil(count / limit) && (
              <button
                className="col-md-4 number__next"
                onClick={() => handlePageChange(page + 1)}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>

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

export default CategoriesDetail;
