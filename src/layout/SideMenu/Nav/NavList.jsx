import NavItem from "./NavItem";
import styles from "./nav.module.scss";

import useWindowSize from "/src/hooks/useWindowSize";

import { useDispatch, useSelector } from "react-redux";
import { toggle } from "/src/app/slice/sliceSideMenu";

const NavList = ({ title, links }) => {
  const isMenuClosed = useSelector((state) => state.isMenuClosed.value);
  const dispatch = useDispatch();

  // const { width } = useWindowSize();

  // if (width >= 991) dispatch(toggle(true));

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
