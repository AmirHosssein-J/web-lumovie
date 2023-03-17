import styles from "./serie.module.scss";

import Wrapper from "../../HOC/Wrapper";

const Serie = ({ poster, title, ep, szn, whatsNew, href }) => {
  return (
    <Wrapper className={styles["series"]}>
      <a className={styles["poster"]} href={href}>
        <img className={styles["img"]} src={poster} />
      </a>
      <div className={styles["info"]}>
        <a className={styles["title"]} href={href}>
          {title}
        </a>
        <div className={styles["details"]}>
          <h6 className={styles["ep"]}>
            {szn && `S${szn}`} {ep && `Ep${ep}`}
          </h6>
          <h5 className={styles["whats-new"]}>{whatsNew}</h5>
        </div>
      </div>
    </Wrapper>
  );
};

export default Serie;
