import S from "./loading.module.scss";

import Logo from "/src/components/Logo";

const Loading = () => {
  return (
    <section className={S["loading"]}>
      <Logo noLogoText spinner />
    </section>
  );
};

export default Loading;
