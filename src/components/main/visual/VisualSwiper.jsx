// MySwiper.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // 기본 스타일
import SlideItem from "./SlideItem";
import { Autoplay } from "swiper/modules";

const VisualSwiper = () => {
  const arr = [...Array(3)].map((_, i) => i + 1);
  return (
    <Swiper
      modules={[Autoplay]}
      // spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
    >
      {arr.map((item, idx) => (
        <SwiperSlide>
          <SlideItem key={idx} data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VisualSwiper;
