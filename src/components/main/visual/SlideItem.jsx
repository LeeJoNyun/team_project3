import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { SwiperItem } from "./style";

const SlideItem = ({ data }) => {
  const [content, setContent] = useState({ title: "", context: "" });
  const prev = data === 1 ? 3 : data - 1;
  const next = data === 3 ? 1 : data + 1;

  useEffect(() => {
    switch (data) {
      case 1:
        setContent({
          title: "태극당이 옛날 포장지에 집착하는 이유",
          context: "태극당의 포장지는 왜 바뀌지않을까?",
        });
        break;
      case 2:
        setContent({
          title: "태극당과 함께한 추억의 시간들",
          context: "당신의 추억 속에도 태극당이 있나요?",
        });
        break;
      case 3:
        setContent({
          title: "서울에서 가장 오래된 빵집의 비밀",
          context: "오래된 빵집, 태극당의 비밀",
        });
        break;
      default:
        setContent({ title: "", context: "" });
    }
  }, [data]);

  const { title, context } = content;
  return (
    <SwiperSlide>
      <img src={`/images/visual/V-${prev}-1.png`} alt="" />
      <img src={`/images/visual/V-${data}.png`} alt="" />
      <img src={`/images/visual/V-${next}-1.png`} alt="" />
      <SwiperItem>
        <span>{title}</span>
        <div className="line"></div>
        <strong>{context}</strong>
        <div className="more">더보기</div>
      </SwiperItem>
    </SwiperSlide>
  );
};

export default SlideItem;
