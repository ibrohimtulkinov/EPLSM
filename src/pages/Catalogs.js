import React, { useState } from "react";
import Navbar from "../components/Navbar";
import End from "../components/End";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import {
  AiOutlineDownCircle,
  AiOutlineTrophy,
  AiOutlineCustomerService,
  AiOutlineException,
  AiOutlineFileText,
  AiOutlineAndroid,
} from "react-icons/ai";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import LoadingSpinner from "../components/common/Loading";

function Catalogs() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [brandDetail, setBrandDetail] = useState([]);

  useEffect(() => {
    getBrandDetail();
  }, [limit, page]);

  const getBrandDetail = async () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    // const response = await fetch('https://api.eplsm.uz/api/brand-list/')
    // const data = await response.json()
    // setBrandDetail(data)
    setLoading(true);
    const offset = (page - 1) * limit;
    axios
      .get("https://api.eplsm.uz/api/brand-list/", {
        params: { limit, p: true, offset },
      })
      .then((r) => {
        setCount(r?.data?.count);
        setBrandDetail(r?.data?.results);
      })
      .finally((f) => {
        setLoading(false);
      });
  };

  // useEffect(() => {
  //     getBrandDetail()
  // }, [])

  const handleAdd = async (guid, catalogId) => {
    const urlPaths = `https://api.eplsm.uz/api/brand-download/${guid}/?catalog_id=${catalogId}`;
    window.open(urlPaths, "_blank");
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
      .get("https://api.eplsm.uz/api/brand-list/", {
        params: {
          limit: limit,
          p: true,
          q: inputValue,
        },
      })
      .then((r) => {
        setBrandDetail(r.data.results);
        setCount(r.data.count);
      });
  };

  return (
    <>
      <Navbar />

      <div className="bg-image ">
        <div className="products-important text-start ">
          <h1 className="products--products">Catalogs</h1>
          <p>
            <Link to="/" className="singleProduct_home">
              <c className="home-products ">
                Home <AiOutlineRight />
              </c>
            </Link>
            <Link to="/catalogs" className="singleProduct_home">
              <c className="products-products">Catalogs</c>
            </Link>
          </p>
        </div>
      </div>

      <section className="sofaaa__background">
        <div className="row mx-auto">
          <div className=" text-start inline justify-content-between">
            <div>
              <p className="show-words  ps-3">Show</p>
              <p className="display-number">
                <input
                  type="number"
                  onChange={(e) => setLimit(e.target.value)}
                  className="form-control w-px-60 rounded-0 ms-2"
                  value={limit}
                />
              </p>
              <p className="rad-1  mb-0">{`Showing 1–${brandDetail.length} of ${count} results`}</p>
            </div>
            <div>
              <p className="rad-11 me-5">
                <input
                  type="search"
                  onChange={(e) => handleSearch(e.target.value)}
                  className="form-control rounded w-px-250"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        {loading ? (
          <LoadingSpinner />
        ) : count > 0 ? (
          brandDetail?.map((brandDetail) => {
            return (
              <div className="row mx-auto mt-4">
                <div className="catolog_cursor col-md-3 col-4">
                  <img
                  
                    onClick={() => navigate(`/singlebrand/${brandDetail.guid}`)}
                    src={brandDetail?.photo}
                    alt=""
                  />
                </div>
                <div className="col-md-6 text-start border-bottom">
                  <Link
                    to={`/singlebrand/${brandDetail.guid}`}
                    className="catalog-vng "
                  >
                    {brandDetail?.title}
                  </Link>
                  {brandDetail.catalogs.length > 0 ? (
                    brandDetail.catalogs.map((item, index) => (
                      <div
                        onClick={() => handleAdd(brandDetail?.guid, item.id)}
                        href={item?.catalog_file}
                        className="pdf mt-4 "
                      >
                        <AiOutlineFileText className="text-white bg-danger  me-2 blog-icon" />
                        Catalog {index + 1}
                      </div>
                    ))
                  ) : (
                    <div className="pdf mt-4 ">Catalogs not added</div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <h3 className="text-center my-4">
            Nothing was found!
            <AiOutlineAndroid />
          </h3>
        )}
      </section>

      <div className="container d-flex justify-content-center mt-5">
        {/* <div className="conter-content mt-5 mb-5">
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
                </div> */}
        <Pagination limit={limit} page={page} setPage={setPage} total={count} />
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

export default Catalogs;
