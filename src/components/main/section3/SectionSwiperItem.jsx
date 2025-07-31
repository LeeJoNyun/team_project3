import { useDispatch } from "react-redux";
import { Section3SwiperItemStyle } from "./style";
import { section3Actions } from "../../../store/modules/section3Slice";
import { useState } from "react";

const SectionSwiperItem = ({ data }) => {
  const [show, setShow] = useState({});
  const { id, name, img, price, qty } = data;
  const dispatch = useDispatch();
  const number = price;
  const formatted = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const clickEvent = (id) => {
    setShow((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <>
      <Section3SwiperItemStyle
        onClick={() => {
          clickEvent(id);
        }}
      >
        <img src={img} alt="" />
        <div className="slide-content">
          <strong className="name">{name}</strong>
          <div className="product-info">
            <span className="price">{formatted}</span>
            <div className={`order ${show[id] ? "visible" : ""}`}>
              <span
                className="min"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(section3Actions.minQty(id));
                }}
              >
                -
              </span>
              <span>{qty}</span>
              <span
                className="plus"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(section3Actions.plusQty(id));
                }}
              >
                +
              </span>
            </div>
          </div>
        </div>
      </Section3SwiperItemStyle>
    </>
  );
};

export default SectionSwiperItem;
