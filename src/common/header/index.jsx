import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { HeaderStyle } from "./style";

const Header = () => {
  return (
    <HeaderStyle>
      <div className="inner">
        <h2 className="logo">
          <Link to="/">
            <img src="./logo.png" alt="" />
          </Link>
        </h2>
        <NavBar />
      </div>
    </HeaderStyle>
  );
};

export default Header;
