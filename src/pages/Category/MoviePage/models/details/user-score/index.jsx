import S from "../../models.module.scss";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function UserScore({ score }) {
  const votePercentage = score.toString().split(".").join("").slice(0, 2);

  return (
    <div className={S["user-score"]}>
      <img src="/src/assets/icon/tmdb.svg" />
      <span className={S["score"]}>{votePercentage}%</span>
    </div>
  );
}

{
  /* <CircularProgressbar
        styles={buildStyles({
          minValue: 0,
          maxValue: 10,
          textSize: "22px",
          pathColor: "#E2FCFC",
          trailColor: "#0F0F0F",
          textColor: "#E2FCFC",
        })}
        value={votePercentage}
        text={`${votePercentage}%`}
      /> */
}
