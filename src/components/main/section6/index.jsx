import { Section6Style } from "./style";
import dataList from "../../../assets/api/section6MenuData";
const Section6 = () => {
  return (
    <Section6Style>
      <div className="title-area">
        <span>소중한 마음을 담아, 정성스럽게 준비했습니다.</span>
        <strong>태극당이 준비한 디저트 선물세트</strong>
      </div>

      <ul className="menu">
        {dataList.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt="" />
            <div className="info">
              <strong>{item.name}</strong>
              <br />
              {item.id === 7 ? (
                <>
                  <span className="price1">
                    (중){item.price1.toLocaleString()}
                  </span>
                  <span>(대){item.price2.toLocaleString()}</span>
                </>
              ) : (
                <span>{item.price.toLocaleString()}</span>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="more-area">
        <div className="more">선물 세트 전체보기</div>
      </div>
    </Section6Style>
  );
};

export default Section6;
