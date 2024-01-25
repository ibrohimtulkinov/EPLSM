import React, { useContext } from "react";
import axios from "../utils/axios";

import { useQuery } from "@tanstack/react-query";
import Heading from "./common/Heading";
import LoadingSpinner from "./common/Loading";
import { LangContext } from "../context/langContext";
import { content } from "../localization/content";
import BrandsSwiper from "./BrandsSwiper";

const HomeBrands = () => {
  const { data: brands, isLoading } = useQuery({
    queryFn: () => axios.get("brand-list").then((res) => res.data),
    queryKey: ["brands/all"],
  });

  const { lang } = useContext(LangContext);
  console.log("lang");

  return (
    <section className="globSection">
      {isLoading && <LoadingSpinner />}
      <div className="globContainer">
        <Heading className={"mb-4 text-center"}>
          {content[lang]?.ourPartners}
        </Heading>
        <div className="">
          <BrandsSwiper brands={brands ?? []} />
        </div>
      </div>
    </section>
  );
};

export default HomeBrands;
