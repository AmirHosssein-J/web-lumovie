import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from "./nav.module.scss";

import Button from "/src/components/Button";

const NavItem = ({ icon, alt, text, href }) => {
  const isMenuClosed = useSelector((state) => state.isMenuClosed.value);

  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `${styles["item--active"]} ${styles["item"]}`
          : `${styles["item"]}`
      }
      to={href}
    >
      <li href={href} className={`${styles["item-li"]}`}>
        <Button.IconBox
          width={4.125}
          height={2.625}
          icon={icon}
          alt={alt}
          className={`${styles["item-li-button"]}`}
        />
        {!isMenuClosed && (
          <span className={styles["item-li-text"]}>{text}</span>
        )}
      </li>
    </NavLink>
  );
};

export default NavItem;
