import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Uzum from "./images/uzum.jpg";

const MySwiper = () => {
  return (
    <section className="max-w-[1250px] mx-auto h-full w-full cursor-pointer my-[1.1rem] max-md:px-[1rem] rounded-[8px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="rounded-[8px]"
      >
        {[...Array(9)].map((_, i) => (
          <SwiperSlide key={i}>
            <img
              src={Uzum}
              className="rounded-[8px] w-full"
              alt="swiper image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MySwiper;
