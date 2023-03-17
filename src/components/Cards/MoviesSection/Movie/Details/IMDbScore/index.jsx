import styles from "../details.module.scss";

import IC_IMDb from "/src/assets/icon/IMDb.svg";

export default function IMDbScore({ score }) {
  return (
    <div className={`${styles["imdb"]}`}>
      <img src={IC_IMDb} alt={"imdb logo"} />
      <h5 className={`${styles["imdb-score"]}`}>{score ? score : "-"}</h5>
    </div>
  );
}
