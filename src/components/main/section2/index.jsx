import { Section2Style } from "./style";

const index = () => {
  return (
    <Section2Style>
      <div className="inner">
        <div className="left">
          <article>
            <span className="title">지금도 변함없는</span>
            <strong>태극당 전병</strong>
            <span>옛 전병, 그대로를 지켜왔습니다.</span>
            <span>얇고 바삭한 그 식감 속에는</span>
            <span>1945년부터 이어진 고집과 정성이 있습니다.</span>
            <div className="more">전체보기</div>
          </article>
        </div>
        <div className="right">
          <ul>
            <li>
              <img src="/images/메뉴/남대문전병.jpg" alt="" />
            </li>
            <li>
              <img src="/images/메뉴/서울전병.jpg" alt="" />
            </li>
            <li>
              <img src="/images/메뉴/무궁화전병.jpg" alt="" />
            </li>
            <li>
              <img src="/images/메뉴/팔경전병.jpg" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </Section2Style>
  );
};

export default index;
