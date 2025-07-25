import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '@fontsource/inter/400.css';  // 일반 두께
import '@fontsource/inter/700.css';  // 볼드 두께

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  header{
    width:100%;
  }
  body {
    width:100%;
    font-size: 16px;
    line-height: 1.6;
    /* font-family: 'Noto Sans KR', sans-serif; */
    font-family: 'Pretendard Variable', sans-serif;
    color:#333;
  }
  a {
    text-decoration: none;
    color:#333; 
  }
  li { list-style:none }
  img { vertical-align: top; }
  
  
  .inner { width:1400px; margin:auto; box-sizing:border-box; position:relative }
  .main { width: 100%; }
  .main h2 { text-align: center; font-size: 40px;   margin-bottom: 80px; }
   button { border:none; cursor: pointer; }
`;

export default GlobalStyle;
