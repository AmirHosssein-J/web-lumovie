import S from "../models.module.scss";

import Wrapper from "/src/components/HOC/Wrapper";
import Button from "/src/components/Button";

const QuickAccess = ({ title, info, cta, icon }) => {
  return (
    <Wrapper className={S["quick-access"]}>
      {icon}
      <h4 className={S["title"]}>{title}</h4>
      <div className={S["content"]}>
        <p className={S["info"]}>{info}</p>
        <Button.CTA text={cta} />
      </div>
    </Wrapper>
  );
};

export default QuickAccess;
