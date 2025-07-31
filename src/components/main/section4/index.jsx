import { useDispatch, useSelector } from "react-redux";
import { Section4Style } from "./style";
import { useState } from "react";
import Item from "./Item";

const Section4 = () => {
  const { data } = useSelector((state) => state.section4);

  return (
    <Section4Style>
      <div className="inner">
        {data.map((item) => (
          <Item key={item.seq} item={item} />
        ))}

        <div className="more">전체보기</div>
      </div>
    </Section4Style>
  );
};

export default Section4;
