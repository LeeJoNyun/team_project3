// MySwiper.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // 기본 스타일
import "swiper/css/pagination";

import SlideItem from "./SlideItem";
import { Autoplay, Pagination } from "swiper/modules";

const VisualSwiper = () => {
  const arr = [...Array(3)].map((_, i) => i + 1);

  return (
    <>
      <Swiper
        className="visual-swiper"
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
        }}
      >
        {arr.map((item, idx) => (
          <SwiperSlide key={idx}>
            <SlideItem data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default VisualSwiper;
