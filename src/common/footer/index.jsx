import { FooterStyle } from "./style";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="inner">
        <div className="left">
          <img className="logo" src="/images/logo.png" alt="" />
          <div className="info">
            <span>서울 중구 동호로24길 7 태극당</span>
            <span>hello@taegeukdang.com</span>
            <span>Copyright 2014 Taegeukdang. All right reserved.</span>
          </div>
        </div>
        <div className="right">
          <ul className="sns">
            <li>
              <img src="/facebook.png" alt="" />
            </li>
            <li>
              <img src="/twitter.png" alt="" />
            </li>
            <li>
              <img src="/band.png" alt="" />
            </li>
            <li>
              <img src="/instagram.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
