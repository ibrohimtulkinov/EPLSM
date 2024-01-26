import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import End from "../components/End";
import { Link } from "react-router-dom";
import {
  AiOutlineRight,
  AiOutlineCustomerService,
  AiOutlineException,
  AiOutlineDownCircle,
  AiOutlineTrophy,
  AiOutlineUser,
  AiTwotoneCalendar,
  AiOutlineInbox,
  AiOutlineAndroid,
} from "react-icons/ai";
import { useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../components/common/Loading";
import { LangContext } from "../context/langContext";
import { content } from "../localization/content";

function Blog() {
  const url = "https://api.eplsm.uz/api";
  const [post, setPost] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [limit, setLimit] = useState(8);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const {lang} = useContext(LangContext);

  console.log("lang");
   
  useEffect(() => {
    if (search) getBlogBySearch(search);
  }, [search]);

  useEffect(() => {
    getPostList();
    getRecentPostList();
  }, []);

  console.log({
    post,
  });
  const getPostList = async () => {
    setLoading(true);
    const response = await fetch("https://api.eplsm.uz/api/post-list/");
    const data = await response.json();
    setPost(data);
    setLoading(false);
  };

  const getRecentPostList = () => {
    axios.get(url + "/post-list/", { params: { date: true } }).then((r) => {
      setRecentPosts(r.data);
    });
  };

  const getBlogBySearch = (input) => {
    axios
      .get("https://api.eplsm.uz/api/post-list/", {
        params: {
          limit: limit,
          p: true,
          q: input,
        },
      })
      .then((r) => {
        setPost(r.data?.results);
      });
  };

  const handleSearch = (inputValue) => {
    setSearch(inputValue);
  };

  return (
    <>
      <Navbar />

      <div className="bg-image  ">
        <div className="products-important text-start ">
          <h1 className="products--products">{content[lang]?.blog}</h1>
          <p>
            <Link to="/" className="singleProduct_home">
              {" "}
              <c className="home-products">
              {content[lang]?.home} <AiOutlineRight />
              </c>{" "}
            </Link>
            <Link to="/blog" className="singleProduct_home ">
              <c className="products-products">{content[lang]?.blog}</c>
            </Link>
          </p>
        </div>
      </div>

      <div className="row container-fluid mt-5">
        <div className="col-md-9 col-sm-12 text-center">
          {loading ? (
            <LoadingSpinner />
          ) : count > 0 ? (
            post?.map((information) => {
              return (
                <div className="w-75 mx-auto text-start">
                  <img
                    src={information?.photo_medium}
                    alt=""
                    className="blog_photos"
                  />
                  <div className="d-flex blog-icons mt-3">
                    <p>
                      <AiOutlineUser />
                      Admin
                    </p>
                    <p className="iconsss">
                      <AiTwotoneCalendar />
                      {information.date.split("T", 2)[0]}
                    </p>
                    <p className="iconsss">
                      <AiOutlineInbox />
                      Wood
                    </p>
                  </div>
                  <h3>{information?.title}</h3>
                  <p className="mt-3 blog-text">{information?.description}</p>
                  <Link>
                    <p className="read-more border-bottom">Read more</p>
                  </Link>
                </div>
              );
            })
          ) : (
            <h3 className="blog_info mt-5 mb-5">
              Nothing was found!
              <div className="blog_icon mt-2">
                <AiOutlineAndroid />
              </div>
            </h3>
          )}
        </div>
        <div className="col-md-3 text-start">
          <input
            type="search"
            onChange={(e) => handleSearch(e.target.value)}
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />

          <div className="filter-sidebar-blog mt-3">
            <div className="filter-sidebar-blog-box w-75 mx-auto">
              <h3 className="mt-5">Categories</h3>
              <div className="filer-sidebar-category-text d-flex mt-5">
                <p className="w-75">Crafts</p>
                <p className="w-25">2</p>
              </div>
              <div className="filer-sidebar-category-text d-flex mt-3">
                <p className="w-75">Design</p>
                <p className="w-25">8</p>
              </div>
              <div className="filer-sidebar-category-text d-flex mt-3">
                <p className="w-75">Handmade</p>
                <p className="w-25">7</p>
              </div>
              <div className="filer-sidebar-category-text d-flex mt-3">
                <p className="w-75">Interior</p>
                <p className="w-25">1</p>
              </div>
              <div className="filer-sidebar-category-text d-flex mt-3">
                <p className="w-75">Wood</p>
                <p className="w-25">6</p>
              </div>
            </div>
          </div>

          <h3 className="mt-5">Recent Posts</h3>
          {post?.length === 0 && "Nothing was found!"}
          {recentPosts?.map((item) => (
            <div className="d-flex mt-4">
              <img src={item.photo_medium} alt="" className="post1" />
              <div className="d-block">
                <p className="textt-blog">{item.title}</p>
                <p className="post-data">{item.date.split("T", 2)[0]}</p>
              </div>
            </div>
          ))}
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

export default Blog;
