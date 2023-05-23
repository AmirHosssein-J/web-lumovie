import { useState } from "react";
import S from "../../models.module.scss";

import Button from "/src/components/Button";

import IC_DownloadOne from "/src/assets/icon/IC_DownloadOne";
import IC_Cinema from "/src/assets/icon/IC_Cinema";
import IC_Play from "/src/assets/icon/IC_Play";
// import IC_Play from "/src/assets/icon/IC_Play";

const Season = ({ season }) => {
  const [quickAccesses, setQuickAccesses] = useState([
    { name: "Play", icon: <IC_Play /> },
    { name: "Download", icon: <IC_DownloadOne /> },
    { name: "Start a session", icon: <IC_Cinema /> },
  ]);

  console.log(season);
  return (
    <div className={S["season"]}>
      <img
        className={S["poster"]}
        src={`https://image.tmdb.org/t/p/w342/${season.poster_path}`}
        alt={`${season.name} poster`}
      />
      <div className={S["info"]}>
        <div className={S["head"]}>
          <h4 className={S["name"]}>{season.name}</h4>
          <span className={S["fact"]}>
            <h5 className={S["title"]}> Episodes:</h5>
            <h6 className={S["value"]}>{season.episode_count}</h6>
          </span>
          <span className={S["fact"]}>
            <h5 className={S["title"]}> Air Date:</h5>
            <h6 className={S["value"]}>{season.air_date}</h6>
          </span>
        </div>
        <div className={S["quick-access"]}>
          {quickAccesses.map((button) => {
            return (
              <Button.Icon
                icon={button.icon}
                tooltip={button.name}
                border
                dimension={3}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Season;
