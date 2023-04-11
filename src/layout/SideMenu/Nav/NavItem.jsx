import S from "./nav.module.scss";

import { NavLink } from "react-router-dom";

import Button from "/src/components/Button";

const NavItem = ({ icon, alt, text, href, isMenuClosed }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${S["item--active"]} ${S["item"]}` : `${S["item"]}`
      }
      to={href}
    >
      <li href={href} className={`${S["item-li"]}`}>
        <Button.IconBox
          width={4.125}
          height={2.625}
          icon={icon}
          alt={alt}
          className={`${S["item-li-button"]}`}
        />

        {!isMenuClosed && <span className={S["item-li-text"]}>{text}</span>}
      </li>
    </NavLink>
  );
};

export default NavItem;
