import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const BrandsSwiper = ({brands}) => {

    
//   const moreCategories = useMemo(() => {
//     if (categories?.length >= 16) {
//       const newCategories = [];

//       for (let i = 0; i < categories.length; i += 2) {
//         newCategories.push([
//           categories[i],
//           ...(!!categories[i + 1] && [categories[i + 1]] ),
//         ]);
//       }

//       return newCategories;
//     }
//     return null;
//   }, [categories]);


  return (
    <div>
      {" "}
      <div className="swiper-container">
        <button className="prev prev-brand swiper-nav-button">
          <IoIosArrowBack width={60} height={60} />
        </button>
        <button className="next next-brand swiper-nav-button">
          <IoIosArrowBack
            width={60}
            height={60}
            style={{ transform: "rotate(180deg)" }}
          />
        </button>
        <Swiper
          modules={[Navigation, Scrollbar, Autoplay]}
          spaceBetween={15}
          centerInsufficientSlides
          autoplay
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            350: {
              slidesPerView: 2,
            },
            650: {
              slidesPerView: 3,
            },
            890: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 5,
            },
          }}
          navigation={{
            prevEl: ".prev-brand",
            nextEl: ".next-brand",
          }}
        >
          {
            brands?.map((item) => (
                <SwiperSlide>
                  <BrandItem
                    guid={item?.guid}
                    image={item?.photo}
                    title={item?.title}
                    key={item?.guid}
                  />
                </SwiperSlide>
              ))
          }
        </Swiper>
      </div>
    </div>
  );
};


const BrandItem = ({ title, image, guid }) => {
    return (
      <Link to={`/singlebrand/${guid}`} className="brand-item">
        <div className="brand-item_image-wrapper">
          <img src={image} alt="" className="brand-item_image" />
        </div>
          <p className="brand-item_title line-clamp-1 mt-2">{title}</p>
      </Link>
    );
  };

export default BrandsSwiper;
