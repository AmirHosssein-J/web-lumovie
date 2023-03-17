import styles from "../models.module.scss";

import Wrapper from "/src/components/HOC/Wrapper";
import Button from "/src/components/Button";

const QuickAccess = ({ title, info, cta, icon }) => {
  return (
    <Wrapper className={styles["quick-access"]}>
      {icon}
      <h4 className={styles["title"]}>{title}</h4>
      <div className={styles["content"]}>
        <p className={styles["info"]}>{info}</p>
        <Button.CTA text={cta} />
      </div>
    </Wrapper>
  );
};

export default QuickAccess;
