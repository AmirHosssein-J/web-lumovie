import styles from "./tooltip.module.scss";

import Wrapper from "../../HOC/Wrapper";

const Tooltip = ({ text, className }) => {
  return (
    //Default Border Style
    <Wrapper className={`${className && className} ${styles["tooltip"]}`}>
      <span className={`${styles["tooltip-text"]}`}>{text}</span>
    </Wrapper>
  );
};

export default Tooltip;
