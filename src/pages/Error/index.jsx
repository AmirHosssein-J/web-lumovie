import { Link } from "react-router-dom";

import Button from "/src/components/Button/";

import styles from "./error.module.scss";

const Error = () => {
  return (
    <section className={styles["error"]}>
      <h1 className={styles["code"]}>404</h1>
      <div className={styles["code-info"]}>
        <h3>Oops! Nothing Here</h3>
        <h4>You should get back</h4>
      </div>
      <Link to="/" style={{ display: "inline" }}>
        <Button.CTA text={"Take Me Home"} />
      </Link>
      <img
        className={styles["bob"]}
        src="/src/assets/image/Bob.png"
        alt="bob the mad man"
      />
    </section>
  );
};

export default Error;
