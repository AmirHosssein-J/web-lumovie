import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./movie-page.module.scss";

import Button from "/src/components/Button";
import Section from "./models/section";
import QuickAccess from "./models/quick-access";

import IC_IMDb from "/src/assets/icon/IMDb.svg";
import IC_Bookmark from "/src/assets/icon/IC_Bookmark";
import IC_Download_PH from "/src/assets/icon/IC_Download_PH";
import IC_Play_PH from "/src/assets/icon/IC_Play_PH";
import IC_Cinema_PH from "/src/assets/icon/IC_Cinema_PH";

const MoviePage = ({ movie }) => {
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
      <div
        className={styles["movie"]}
        style={{ backgroundImage: `url(${movie.screenshot})` }}
      >
        <div className={styles["movie-content"]}>
          <section className={styles["details"]}>
            <section className={styles["title"]}>
              <div className={styles["info"]}>
                <h2 className={styles["name"]}>{movie.title}</h2>
                <div className={styles["facts"]}>
                  <Link
                    to={`/released/${movie.releasedDate}`}
                    className={styles["fact"]}
                  >
                    {movie.releasedDate}
                  </Link>
                  <Link to={`/rated/${movie.rated}`} className={styles["fact"]}>
                    {movie.rated}
                  </Link>
                  <h5 className={styles["fact"]}>{movie.runTime}</h5>
                </div>
              </div>

              <Button.Icon
                border
                width={2.625}
                height={2.625}
                rounded={100}
                icon={<IC_Bookmark />}
              />
            </section>

            <Section links={movie.genres} />

            <section className={styles["additional-info"]}>
              <h5 className={styles["imdb-score"]}>
                <img src={IC_IMDb} alt={"imdb logo"} />
                {movie.imdbScore}
              </h5>

              {movie.countries.map((country) => {
                return (
                  <Link key={country.id} to={country.page}>
                    <h5 className={styles["country"]}>
                      <img src={country.flag} alt={`${country.name} flag`} />
                      {country.name}
                    </h5>
                  </Link>
                );
              })}

              {movie.imdbRank && (
                <h5 className={styles["imdb-rank"]}>{movie.imdbRank}</h5>
              )}
            </section>

            <p className={styles["plot"]}>{movie.story}</p>

            {movie.directors && (
              <Section title={"Directors"} links={movie.directors} />
            )}

            {movie.writers && (
              <Section title={"Writers"} links={movie.writers} />
            )}

            {movie.actors && <Section title={"Stars"} links={movie.actors} />}
          </section>
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
      </div>
    </section>
  );
};

export default MoviePage;
