import S from "./logo.module.scss";

import { Link } from "react-router-dom";

import IC_LogoIcon from "/src/assets/icon/Logo-Icon.svg";
import IC_LogoText from "/src/assets/icon/Logo-Text.svg";

const Logo = ({ noLogoText }) => {
  return (
    <Link to="./" className={S["logo"]}>
      <img src={IC_LogoIcon} alt="logo icon" />
      {!noLogoText && (
        <img
          src={IC_LogoText}
          alt="logo text"
          className={S["logo-text"]}
        />
      )}
    </Link>
  );
};

export default Logo;
