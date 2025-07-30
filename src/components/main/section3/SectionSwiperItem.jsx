import { Section3SwiperItemStyle } from "./style";

const SectionSwiperItem = () => {
  const number = 2800;
  const formatted = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <>
      <Section3SwiperItemStyle>
        <img src="/images/메뉴/생크림빵.jpg" alt="" />
        <div className="slide-content">
          <strong className="name">생크림빵</strong>
          <div className="product-info">
            <span className="price">{formatted}</span>
            <div className="order">
              <span className="min">-</span>
              <span>1</span>
              <span className="plus">+</span>
            </div>
          </div>
        </div>
      </Section3SwiperItemStyle>
    </>
  );
};

export default SectionSwiperItem;
