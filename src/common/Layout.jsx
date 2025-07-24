import { Outlet } from "react-router-dom";
import Header from "./header/Index";

const Layout = () => {
  return (
    <div className="wrap">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
