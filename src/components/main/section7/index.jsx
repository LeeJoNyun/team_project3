import { Section7Style } from "./style";

const Section7 = () => {
  return (
    <Section7Style>
      <div className="inner">
        <div className="con1">
          <img src="/images/con7-1.png" alt="" />
          <article>
            <div className="text-box1">
              <span>서울의 시간이 머문 맛,</span>
              <strong>1945, 태극당</strong>
            </div>
            <div className="text-box2">
              <span>한결같은 정성으로, </span>
              <span>서울의 빵 문화와 함께해 온 태극당입니다.</span>
            </div>
          </article>
        </div>
        <div className="con2">
          <div className="text-area">
            <article>
              <div className="text-box1">
                <span>서울에서 가장 오래된 빵집,</span>
                <span>
                  태극당은 지금도 변함없는 정성으로 당신을 기다립니다.
                </span>
                <br />
                <span>태극당 위치는 서울 중구 동호로24길 7 입니다.</span>
                <span>
                  지하철 3호선 동대입구역 2번 출구에서 도보 1분, 천천히
                  걸어오세요.
                </span>
              </div>
              <div className="text-box2">
                <div>태극당 길찾기</div>
              </div>
            </article>
          </div>
          <div className="image-area">
            <img src="/images/con7-2.png" alt="" />
            <img src="/images/con7-3.png" alt="" />
          </div>
        </div>
      </div>
    </Section7Style>
  );
};

export default Section7;
