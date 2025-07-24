import { SwiperSlide } from "swiper/react";

const SlideItem = ({ data }) => {
  const prev = data === 1 ? 3 : data - 1;
  const next = data === 3 ? 1 : data + 1;

  return (
    <SwiperSlide>
      <img src={`/images/visual/V-${prev}-1.png`} alt="" />
      <img src={`/images/visual/V-${data}.png`} alt="" />
      <img src={`/images/visual/V-${next}-1.png`} alt="" />
    </SwiperSlide>
  );
};

export default SlideItem;
