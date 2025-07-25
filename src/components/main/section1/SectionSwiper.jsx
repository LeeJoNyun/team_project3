import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import dataList from "../../../assets/api/section1SwiperData";
import SectionSwiperItem from "./SectionSwiperItem";

const SectionSwiper = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {dataList.map((data, idx) => (
          <SectionSwiperItem key={idx} data={data} />
        ))}
      </Swiper>
    </>
  );
};

export default SectionSwiper;
