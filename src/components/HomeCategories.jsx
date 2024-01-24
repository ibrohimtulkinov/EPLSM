import React, { useContext, useEffect, useState } from "react";
import axios from "../utils/axios";

import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Heading from "./common/Heading";
import LoadingSpinner from "./common/Loading";
import CategoriesSwiper from "./CategoriesSwiper";
import { LangContext } from "../context/langContext";
import { content } from "../localization/content";

const HomeCategories = () => {
  const { data: categories, isLoading } = useQuery({
    queryFn: () => axios.get("product-category-list").then((res) => res.data),
    queryKey: ["categories/all"],
  });

const {lang, setLang} = useContext(LangContext)
console.log("lang");

  return (
    <section className="globSection">
      {isLoading && <LoadingSpinner />}
      <div className="globContainer">
        <Heading className={"mb-4 text-center"}>
                {
                  content[lang]?.categories
                }
          </Heading>
        <div className="card-wrapper">
          <CategoriesSwiper isDouble categories={categories} />
        </div>
      </div>
    </section>
  );
};



export default HomeCategories;
