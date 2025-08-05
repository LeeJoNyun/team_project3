import React from "react";

import { Section8Style } from "./style";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper 컴포넌트
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // 모듈들 import

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Section8 = () => {
  return (
    <Section8Style>
      <div className="inner">
        <div className="top">
          <div className="text">
            <span>태극당의 최근 소식을 전해드립니다.</span>
            <strong>태극당 소식</strong>
          </div>
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.8172 15.8419C17.9344 15.9591 18.0002 16.1181 18.0002 16.2838C18.0002 16.4495 17.9344 16.6085 17.8172 16.7257L14.2816 20.2613C14.2239 20.321 14.155 20.3686 14.0787 20.4014C14.0025 20.4341 13.9204 20.4514 13.8375 20.4521C13.7545 20.4528 13.6722 20.437 13.5954 20.4056C13.5186 20.3741 13.4488 20.3277 13.3901 20.2691C13.3314 20.2104 13.285 20.1406 13.2536 20.0638C13.2221 19.987 13.2063 19.9047 13.2071 19.8217C13.2078 19.7387 13.225 19.6567 13.2578 19.5804C13.2905 19.5042 13.3381 19.4352 13.3978 19.3776L16.4916 16.2838L13.3978 13.1901C13.284 13.0722 13.221 12.9143 13.2224 12.7504C13.2238 12.5866 13.2896 12.4298 13.4054 12.3139C13.5213 12.198 13.6781 12.1323 13.842 12.1309C14.0058 12.1295 14.1637 12.1925 14.2816 12.3063L17.8172 15.8419Z"
                fill="black"
              />
            </svg>
          </i>
        </div>
        <div className="bottom">
          <Swiper
            slidesPerView={2} // 한 화면에 보여지는 슬라이드 개수
            spaceBetween={30}
            navigation // 좌우 화살표 사용 가능
            pagination={{ clickable: true }} // 페이지네이션(점) 사용 가능
            loop={false} // 무한 반복 슬라이드
          >
            <SwiperSlide>
              <img src="/images/con8-1.png" alt="" />
              <article className="first">
                <strong>태극당 더현대 대구점 오픈</strong>
                <div>
                  <span>이번 시즌 더현대 대구점 리뉴얼을 맞아 </span>
                  <span>태극당에서도 첫 서울 외 지역 출점을 진행</span>
                </div>
                <span className="info">
                  2022.08.30 | 더현대 대구점 지하 1층 식품관
                </span>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/con8-2.png" alt="" />
              <article className="second">
                <strong>태극당 x 바람의나라 | 새해 복 바람</strong>
                <div>
                  <span>서울에서 가장 오래된 빵집 '태극당'과</span>
                  <span>세상에서 가장 오래된 게임 '바람의나라' 의 만남</span>
                </div>
                <span className="info">23.01.11 ~ 23.01.31</span>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/con8-3.png" alt="" />
              <article className="third">
                <strong>태극당x마더그라운드x서울메이드</strong>
                <div>
                  <span>태극당과 마더그라운드 서울메이드가 함께 만든</span>
                  <span>1946 프로젝트 쇼케이스 </span>
                </div>
                <span className="info">21.11.26 ~ 21.12.05 </span>
              </article>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Section8Style>
  );
};

export default Section8;
