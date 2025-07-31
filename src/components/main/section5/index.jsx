import { Section5Style } from "./style";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Section5 = () => {
  const main = useRef();

  useGSAP(
    () => {
      const dots = gsap.utils.toArray(".dot");

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
            scrollTrigger: {
              trigger: dot,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            delay: index * 0.2, // 순차 애니메이션
          }
        );
      });
    },
    { scope: main }
  );

  return (
    <Section5Style>
      <div className="inner" ref={main}>
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
      </div>
    </Section5Style>
  );
};

export default Section5;
