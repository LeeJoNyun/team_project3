import React, { useState } from "react";
import { NavBarStyle, TopMenu } from "./style";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import menuList from "../../assets/api/headerNav";

const NavBar = () => {
  const [mouseHover, setMouseHover] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <>
      <NavBarStyle
        className="nav"
        onMouseEnter={() => setMouseHover(true)}
        onMouseLeave={() => {
          setMouseHover(false);
          setActiveMenu(null);
        }}
      >
        <ul className="depth1">
          {menuList.map((item, index) => (
            <li
              key={index}
              className={activeMenu === index ? "active" : ""}
              onMouseEnter={() => setActiveMenu(index)}
              onMouseLeave={() => {
                // depth2 메뉴 위에 있을 때는 active 상태 유지
                if (
                  !document.querySelector(
                    `.depth1 li:nth-child(${index + 1}) .depth2:hover`
                  )
                ) {
                  setActiveMenu(null);
                }
              }}
            >
              <a href="#">{item.title}</a>
              <ul
                className={`depth2 ${
                  activeMenu === index || mouseHover ? "on" : ""
                }`}
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {item.sub.map((item2, subIndex) => (
                  <li key={subIndex}>
                    <a href="#">{item2}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </NavBarStyle>
      <TopMenu className="top-menu">
        <li>
          <a href="#">
            <IoSearchOutline />
          </a>
        </li>
        <li>
          <a href="#">
            <BsCart3 />
          </a>
        </li>
        <li>
          <a href="#">로그인</a>
        </li>
      </TopMenu>

      <div className={`bg ${mouseHover ? "on" : ""}`}></div>
    </>
  );
};

export default NavBar;
