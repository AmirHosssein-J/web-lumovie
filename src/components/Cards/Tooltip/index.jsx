import S from "./tooltip.module.scss";

import Wrapper from "../../HOC/Wrapper";

const Tooltip = ({ text, className }) => {
  return (
    <Wrapper className={`${className && className} ${S["tooltip"]}`}>
      <span className={S["tooltip-text"]}>{text}</span>
    </Wrapper>
  );
};

export default Tooltip;
