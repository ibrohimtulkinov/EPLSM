import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const CategoriesSwiper = ({categories, isDouble}) => {

    
  const moreCategories = useMemo(() => {
    if (categories?.length >= 16) {
      const newCategories = [];

      for (let i = 0; i < categories.length; i += 2) {
        newCategories.push([
          categories[i],
          ...(!!categories[i + 1] && [categories[i + 1]] ),
        ]);
      }

      return newCategories;
    }
    return null;
  }, [categories]);


  return (
    <div>
      {" "}
      <div className="swiper-container">
        <button className="prev swiper-nav-button">
          <IoIosArrowBack width={60} height={60} />
        </button>
        <button className="next swiper-nav-button">
          <IoIosArrowBack
            width={60}
            height={60}
            style={{ transform: "rotate(180deg)" }}
          />
        </button>
        <Swiper
          modules={[Navigation, Scrollbar]}
          spaceBetween={15}
          centerInsufficientSlides
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            250: {
              slidesPerView: 2,
            },
            450: {
              slidesPerView: 3,
            },
            590: {
              slidesPerView: 4,
            },
            800: {
              slidesPerView: 5,
            },
            900: {
              slidesPerView: 6,
            },
            1000: {
              slidesPerView: 7,
            },
            1200: {
              slidesPerView: 8,
            },
          }}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
        >
          {moreCategories && isDouble
            ? moreCategories?.map((item) => (
                <SwiperSlide>
                  <div className="d-flex flex-column align-items-center gap-3">
                    {item?.map((el) => (
                      <CategoryItem
                        guid={el?.guid}
                        image={el?.photo_medium}
                        title={el?.title}
                        key={el?.guid}
                      />
                    ))}
                  </div>
                </SwiperSlide>
              ))
            : categories?.map((item) => (
                <SwiperSlide>
                  <CategoryItem
                    guid={item?.guid}
                    image={item?.photo_medium}
                    title={item?.title}
                    key={item?.guid}
                  />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
};


const CategoryItem = ({ title, image, guid }) => {
    return (
      <Link to={`/categories/${guid}`} className="category-item">
        <div className="category-item_content">
          <img src={image} alt="" className="category-item_image" />
          <p className="category-item_title mt-2">{title}</p>
        </div>
      </Link>
    );
  };

export default CategoriesSwiper;
