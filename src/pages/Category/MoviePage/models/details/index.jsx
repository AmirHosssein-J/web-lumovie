import S from "../models.module.scss";
import { Link } from "react-router-dom";

import Section from "../section";

import ReleaseDate from "./release-date";
import Rated from "./rated";
import Cast from "./cast";
import Directors from "./directors";
import Writers from "./writers";
import Musician from "./musician";
import UserScore from "./user-score";
import Genres from "./genres";
import Crew from "./crew";

const Details = ({ movie, credits, certification }) => {
  return (
    <section className={S["details"]}>
      <section className={S["title"]}>
        <div className={S["info"]}>
          <h2 className={S["name"]}>{movie.title}</h2>
          <div className={S["facts"]}>
            <ReleaseDate date={movie.release_date} />
            <Rated certification={certification} />
            <h5 className={S["fact"]}>{movie.runtime}m</h5>
          </div>
        </div>
      </section>
      <Genres genres={movie.genres} />
      <section className={S["additional-info"]}>
        <UserScore score={movie.vote_average} />
        {movie.production_countries.map((country, index) => {
          return (
            <Link key={index} to={`/country/${country.iso_3166_1}`}>
              <h5 className={S["country"]}>
                <img
                  src={`https://www.countryflagicons.com/FLAT/48/${country.iso_3166_1}.png`}
                ></img>
                {country.iso_3166_1}
              </h5>
            </Link>
          );
        })}
      </section>
      <p className={S["plot"]}>{movie.overview}</p>
      <Cast credits={credits} />
      <Directors credits={credits} />
      <Writers credits={credits} />
      <Musician credits={credits} />
    </section>
  );
};

export default Details;
