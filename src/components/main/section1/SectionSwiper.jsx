import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import dataList from "../../../assets/api/section1SwiperData";
import SectionSwiperItem from "./SectionSwiperItem";
import { useEffect, useRef } from "react";

const SectionSwiper = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl =
        navigationPrevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl =
        navigationNextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);
  return (
    <>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        // autoplay={{ delay: 3000 }}
      >
        {dataList.map((data, idx) => (
          <SwiperSlide key={idx}>
            <SectionSwiperItem data={data} />
          </SwiperSlide>
        ))}
      </Swiper>

      <svg
        className="swiper-button swiper-custom-button-prev"
        ref={navigationPrevRef}
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.7325 31.7675C20.2638 31.2987 20.0005 30.6629 20.0005 30C20.0005 29.3371 20.2638 28.7014 20.7325 28.2325L34.875 14.09C35.1056 13.8513 35.3815 13.6608 35.6865 13.5298C35.9915 13.3988 36.3195 13.3298 36.6515 13.3269C36.9834 13.324 37.3126 13.3873 37.6199 13.513C37.9271 13.6387 38.2063 13.8243 38.441 14.0591C38.6757 14.2938 38.8614 14.5729 38.9871 14.8802C39.1128 15.1874 39.176 15.5166 39.1731 15.8485C39.1702 16.1805 39.1013 16.5085 38.9703 16.8135C38.8392 17.1186 38.6488 17.3944 38.41 17.625L26.035 30L38.41 42.375C38.8654 42.8465 39.1174 43.478 39.1117 44.1335C39.106 44.789 38.8431 45.4161 38.3795 45.8796C37.916 46.3431 37.289 46.606 36.6335 46.6117C35.978 46.6174 35.3465 46.3654 34.875 45.91L20.7325 31.7675Z"
          fill="#777777"
        />
      </svg>

      <svg
        className="swiper-button swiper-custom-button-next"
        ref={navigationNextRef}
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
      >
        <g clip-path="url(#clip0_162_1509)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.2674 28.2325C39.7361 28.7013 39.9993 29.3371 39.9993 30C39.9993 30.6629 39.7361 31.2986 39.2674 31.7675L25.1249 45.91C24.8943 46.1487 24.6184 46.3392 24.3134 46.4702C24.0084 46.6012 23.6803 46.6702 23.3484 46.6731C23.0164 46.676 22.6872 46.6127 22.38 46.487C22.0728 46.3613 21.7936 46.1757 21.5589 45.9409C21.3242 45.7062 21.1385 45.4271 21.0128 45.1198C20.8871 44.8126 20.8239 44.4834 20.8268 44.1515C20.8296 43.8195 20.8986 43.4915 21.0296 43.1865C21.1606 42.8814 21.3511 42.6056 21.5899 42.375L33.9649 30L21.5899 17.625C21.1345 17.1535 20.8825 16.522 20.8882 15.8665C20.8939 15.211 21.1568 14.5839 21.6203 14.1204C22.0839 13.6569 22.7109 13.394 23.3664 13.3883C24.0219 13.3826 24.6534 13.6346 25.1249 14.09L39.2674 28.2325Z"
            fill="#777777"
          />
        </g>
        <defs>
          <clipPath id="clip0_162_1509">
            <rect width="60" height="60" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default SectionSwiper;
