import NavItem from "./NavItem";
import styles from "./nav.module.scss";

import { useSelector } from "react-redux";

const NavList = ({ title, links }) => {
  const isMenuClosed = useSelector((state) => state.isMenuClosed.value);

  return (
    <ul className={styles["list"]}>
      <div className={styles["title-container"]}>
        {!isMenuClosed && <h4 className={`${styles["title"]}`}> {title}</h4>}
      </div>
      {links.map((link, index) => {
        return (
          <NavItem
            key={index}
            icon={link.icon}
            alt={link.alt}
            text={link.text}
            href={link.href}
          ></NavItem>
        );
      })}
    </ul>
  );
};

export default NavList;
