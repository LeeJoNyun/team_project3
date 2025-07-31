import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { section4Actions } from "../../../store/modules/section4Slice";

const Item = ({ item }) => {
  const { seq, title, category, data } = item;
  const [visibleOrders, setVisibleOrders] = useState({});
  const dispatch = useDispatch();
  const clickEvent = (id) => {
    setVisibleOrders((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <article>
      <div className="top">
        <span>{title}</span>
        <strong>{category}</strong>
      </div>
      <div className="bottom">
        {data.map(({ id, name, img, price, qty }) => (
          <div
            className="item"
            onClick={() => {
              clickEvent(id);
            }}
            key={id}
          >
            <img src={img} alt="" />
            <div className="product-info">
              <strong className="name">{name}</strong>
              <div className="package">
                <span className="price">{price.toLocaleString()}</span>
                <div
                  className="order"
                  style={{ opacity: visibleOrders[id] ? 1 : 0 }}
                >
                  <span
                    className="min"
                    onClick={(e) => {
                      e.stopPropagation(); // 부모 클릭 방지
                      dispatch(section4Actions.minQty({ seq, id }));
                    }}
                  >
                    -
                  </span>
                  <span>{qty}</span>
                  <span
                    className="plus"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(section4Actions.plusQty({ seq, id }));
                    }}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Item;
