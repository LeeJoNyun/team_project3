import { Section5Style } from "./style";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {
  const main = useRef();

  useGSAP(
    () => {
      const dots = gsap.utils.toArray(".dot");
      const accents = gsap.utils.toArray(".accent");
      dots.forEach((dot, index) => {
        gsap.fromTo(
          dot,
          { width: 18, height: 18 },
          {
            width: 24,
            height: 24,
            yoyo: true,
            repeat: 1,
            duration: 0.5,
            ease: "power2.inOut",
            paused: true, // 처음에 일시 정지 상태로 시작
            delay: index * 0.5,
            scrollTrigger: {
              trigger: dot,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none restart none",
              markers: false, // 디버깅용
            },
          }
        );
      });

      accents.forEach((item, index) => {
        gsap.from(item, {
          y: 100,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          delay: index * 0.3, // 각 요소마다 0.3초 지연
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none restart none",
          },
        });
      });
      // ScrollTrigger.refresh();
    },
    { scope: main }
  );

  // 라우트 변경 등에 대비해 언마운트 시 ScrollTrigger 갱신
  useEffect(() => {
    return () => {
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <Section5Style>
      <div className="inner" ref={main}>
        <div className="con-box">
          <div className="text-area">
            <strong>
              태 <span className="dot" />
            </strong>
            <strong>
              극 <span className="dot" />
            </strong>
            <strong className="last">
              당 <span className="dot" />
            </strong>
            <span>에서</span>
          </div>
          <div className="text-area2">
            <strong className="accent">마음</strong>
            <span> 과 </span>
            <strong className="accent">정성</strong>
            <span> 을 전해드립니다.</span>
          </div>
        </div>
        <div className="snack"></div>
      </div>
    </Section5Style>
  );
};

export default Section5;
