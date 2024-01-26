import React, { useContext, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineAlignCenter } from "react-icons/ai";
import navLogo from "../assets/img/nav-logo.png";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link, useLocation } from "react-router-dom";
import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons";
import { LangContext } from "../context/langContext";
import { content } from "../localization/content";

export default function App() {
  const [openNavColorThird, setOpenNavColorThird] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  console.log({ pathname });


  const {lang, setLang} = useContext(LangContext)

  console.log(lang, "lang");

  return (
    <>
      <MDBNavbar
        className="p-4  bg-white justify-content-between h-100"
        expand="lg"
        light
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <MDBContainer>
          <div className="d-flex align-items-center justfy-content-center" >
            <MDBNavbarBrand href="/">
              <div className="d-flex align-items-center gap-1">
              <img src={"/logo-2.png"} alt="" className="nav--icon" />
              <span className="nav--text">eplsm</span>
              </div>
            </MDBNavbarBrand>
          </div>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavColorThird(!openNavColorThird)}
          >
            <div>
              <AiOutlineAlignCenter />
            </div>
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColorThird} navbar className="ms -auto">
            <MDBNavbarNav className=" me-0 mb-2 mb-lg-0 gap-5">
              <Link
                className={
                  pathname === "/" ? "navigationActive" : "navigations"
                }
                aria-current="page"
                to="/"
              >
                {
                  content[lang]?.home
                }
              </Link>
              <Link
                className={
                  pathname.includes("products")
                    ? "navigationActive"
                    : "navigations"
                }
                to="/products"
              >
                {
                  content[lang]?.product
                }
              </Link>
              {/* <Link
                className={
                  pathname.includes("brands")
                    ? "navigationActive"
                    : "navigations"
                }
                to="/brands"
              >
                {
                  content[lang]?.brands
                }
              </Link> */}
              <Link
                className={
                  pathname.includes("categories")
                    ? "navigationActive"
                    : "navigations"
                }
                to="/categories"
              >
               {
                  content[lang]?.categories
                }
              </Link>
              <Link
                className={
                  pathname.includes("catalogs")
                    ? "navigationActive"
                    : "navigations"
                }
                to="/catalogs"
              >
                {
                  content[lang]?.catalogs
                }
              </Link>
              <Link
                className={
                  pathname.includes("blog") ? "navigationActive" : "navigations"
                }
                to="/blog"
              >
                {
                  content[lang]?.blog
                }
              </Link>
              <Link
                className={
                  pathname.includes("contact")
                    ? "navigationActive"
                    : "navigations"
                }
                to="/contact"
              >
                {
                  content[lang]?.contact
                }
              </Link>
              <select className="lang-select" value={lang} onChange={(e) => {setLang(e.target.value)}}  > 
                <option value="en">en</option>
                <option value="ru">ru</option>
                <option value="uz">uz</option>
              </select>
            </MDBNavbarNav>
            <MDBNavbarItem className="div-icon">
              <MDBNavbarLink
                className={openNavColorThird ? "nav_icon_open" : ""}
              >
                <AiOutlineSearch
                  style={{ width: "30px" }}
                  className="nav__icon"
                />
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
