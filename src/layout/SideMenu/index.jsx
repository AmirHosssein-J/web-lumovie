import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../app/slice/sliceSideMenu";

import styles from "./sidemenu.module.scss";

import Button from "/src/components/Button";
import Logo from "/src/components/Logo";
import Nav from "./Nav";

import IC_ArrowSM from "/src/assets/icon/IC_ArrowSM";

const SideMenu = () => {
  const isMenuClosed = useSelector((state) => state.isMenuClosed.value);
  const dispatch = useDispatch();

  return (
    <aside
      className={
        !isMenuClosed
          ? `${styles["side-menu"]} `
          : `${styles["side-menu"]} ${styles["side-menu--closed"]}`
      }
    >
      {/* Menu Toggle Button*/}
      <Button.Icon
        className={
          !isMenuClosed
            ? `${styles["menu-toggle"]}`
            : `${styles["menu-toggle"]} ${styles["menu-toggle--closed"]}`
        }
        icon={<IC_ArrowSM />}
        width={2}
        height={2}
        border
        rounded={100}
        alt={"arrow icon"}
        onClick={() => {
          dispatch(toggle(!isMenuClosed));
        }}
      />

      <Logo isMenuClosed={isMenuClosed} />
      <Nav />
    </aside>
  );
};

export default SideMenu;
