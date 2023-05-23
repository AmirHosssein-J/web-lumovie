import S from "./serie-sidebar.module.scss";

import Logo from "../../../components/Logo";

const OnLoading = () => {
  return (
    <div className={S["aside"]}>
      <Logo spinner noLogoText />
    </div>
  );
};

export default OnLoading;
