import S from "./nav.module.scss";

import { useSelector } from "react-redux";

import NavList from "./NavList";

const Nav = ({ navLists, isMenuClosed }) => {
  const isMenuClosedMobile = useSelector(
    (state) => state.isMenuClosedMobile.value
  );

  return (
    <nav className={`${isMenuClosedMobile ? ["nav--mobile"] : ""} ${S["nav"]}`}>
      {navLists?.map((navList, index) => {
        return (
          <NavList
            key={index}
            title={navList.title}
            links={navList.links}
            isMenuClosed={isMenuClosed}
          />
        );
      })}
    </nav>
  );
};

export default Nav;
