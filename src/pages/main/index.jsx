import {
  VisualSwiper,
  Section1,
  Section2,
  Section3,
  Section4,
} from "../../components/main";
import { VisualStyle } from "./style";

const Main = () => {
  return (
    <VisualStyle>
      <VisualSwiper />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </VisualStyle>
  );
};

export default Main;
