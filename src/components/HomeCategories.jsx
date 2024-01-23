import React from "react";
import axios from "../utils/axios";

import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Heading from "./common/Heading";
import LoadingSpinner from "./common/Loading";
import CategoriesSwiper from "./CategoriesSwiper";

const HomeCategories = () => {
  const { data: categories, isLoading } = useQuery({
    queryFn: () => axios.get("product-category-list").then((res) => res.data),
    queryKey: ["categories/all"],
  });

  return (
    <section className="globSection">
      {isLoading && <LoadingSpinner />}
      <div className="globContainer">
        <Heading className={"mb-4 text-center"}>Categories</Heading>
        <div className="">
          <CategoriesSwiper isDouble categories={categories} />
        </div>
      </div>
    </section>
  );
};



export default HomeCategories;
