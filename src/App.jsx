import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "./styled/GlobalStyle";
import Layout from "./common/Layout";
import { NotFiles, Main } from "./pages";
// import { VisualSwiper } from "./pages/main";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="*" element={<NotFiles />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
