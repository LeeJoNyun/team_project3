import { SwiperSlide } from "swiper/react";

const SectionSwiperItem = ({ data }) => {
  const { img, title, strong, text1, text2, text3 } = data;
  return (
    <SwiperSlide>
      <div className="left">
        <img src={img} alt="" />
      </div>
      <div className="right">
        <span className="title">{title}</span>
        <strong>{strong}</strong>
        <span className="text1">{text1}</span>
        <span className="text2">{text2}</span>
        <span className="text3">{text3}</span>
      </div>
    </SwiperSlide>
  );
};

export default SectionSwiperItem;
