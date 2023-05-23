import { useState } from "react";
import S from "./movie-page.module.scss";

import Background from "./Models/Background";
import Details from "./Models/Details";
import QuickAccess from "./Models/QuickAccess";
import Collection from "/src/components/Movie/Detail/Collection";

import IC_Download_PH from "/src/assets/icon/IC_Download_PH";
import IC_Play_PH from "/src/assets/icon/IC_Play_PH";
import IC_Cinema_PH from "/src/assets/icon/IC_Cinema_PH";
import Similar from "/src/components/Movie/Detail/Similar";

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
    <section className={S["content"]}>
      <div className={S["movie"]}>
        <Background
          backdropPath={movie.backdrop_path}
          posterPath={movie.poster_path}
          title={movie.title}
          movie={movie}
        />
        <Details
          movie={movie}
          credits={credits}
          certification={certification}
        />
      </div>
      <div className={S["info"]}>
        <div className={S["quick-accesses"]}>
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
        {movie.belongs_to_collection && (
          <Collection collection={movie.belongs_to_collection} />
        )}
        <Similar movieId={movie.id} />
      </div>
    </section>
  );
};

export default MoviePage;
