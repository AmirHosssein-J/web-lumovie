import { useState } from "react";

import styles from "./movie-page.module.scss";

import QuickAccess from "./models/quick-access";

import IC_Bookmark from "/src/assets/icon/IC_Bookmark";
import IC_Download_PH from "/src/assets/icon/IC_Download_PH";
import IC_Play_PH from "/src/assets/icon/IC_Play_PH";
import IC_Cinema_PH from "/src/assets/icon/IC_Cinema_PH";

import Details from "./models/details";
import Background from "./models/background";

import Cast from "./models/details/cast";
import Crew from "./models/details/crew";

const MoviePage = ({ movie, credits, certification }) => {
  const [quickAccesses, setQuickAccesses] = useState([
    {
      title: "Download",
      info: "Download now with highest speed and quality",
      cta: "Download",
      icon: <IC_Download_PH />,
    },
    {
      title: "Watch",
      info: "Watch Now  on your platform",
      cta: "Watch Now",
      icon: <IC_Play_PH />,
    },
    {
      title: "Cinema",
      info: `Start a "${movie.title}" Session to watch with your friends`,
      cta: "Start a Session",
      icon: <IC_Cinema_PH />,
    },
  ]);

  return (
    <section className={styles["content"]}>
      <div className={styles["movie"]}>
        <Background imgPath={movie.backdrop_path} />
        <Details
          movie={movie}
          credits={credits}
          certification={certification}
        />
      </div>
      <div className={styles["quick-accesses"]}>
        {quickAccesses.map((quickAccess, index) => {
          return (
            <QuickAccess
              key={index}
              title={quickAccess.title}
              info={quickAccess.info}
              cta={quickAccess.cta}
              icon={quickAccess.icon}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MoviePage;
