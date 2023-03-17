import { Link } from "react-router-dom";

import styles from "./logo.module.scss";

import IC_LogoIcon from "/src/assets/icon/Logo-Icon.svg";
import IC_LogoText from "/src/assets/icon/Logo-Text.svg";

const Logo = ({ isMenuClosed }) => {
  return (
    <Link to="./" className={`${styles["logo"]}`}>
      <img src={IC_LogoIcon} alt={"logo icon"} />
      {!isMenuClosed && <img src={IC_LogoText} alt={"logo text"} />}
    </Link>
  );
};

export default Logo;
