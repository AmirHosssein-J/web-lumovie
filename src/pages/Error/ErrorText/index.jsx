import Wrapper from "/src/components/HOC/Wrapper";
import styles from "../error.module.scss";

const ErrorText = ({ message }) => {
  return (
    <Wrapper className={styles["error-text"]}>
      <h3 className={styles["title"]}>An error has occurred</h3>
      <h4 className={styles["info"]}>{message}</h4>
    </Wrapper>
  );
};

export default ErrorText;
