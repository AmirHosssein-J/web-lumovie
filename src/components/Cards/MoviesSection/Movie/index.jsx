import { Link } from "react-router-dom";

import S from "../movie.module.scss";

import Button from "/src/components/Button";
import Title from "./Details/Title";
import Genres from "./Details/Genres";
import Rated from "./Details/Rated";
import ReleaseDate from "./Details/ReleaseDate";
import Time from "./Details/Time";
import IMDbScore from "./Details/IMDbScore";

const Movie = ({ movie, isCompact }) => {
  return (
    <div
      className={`${S["movie"]} ${
        isCompact ? S["movie--compact"] : S["movie--normal"]
      }`}
    >
      <Link
        to={movie.path && `/${movie.type}/${movie.path}`}
        className={`${S["image"]}`}
      >
        <img src={movie.poster} alt={`${movie.title} poster`} />
      </Link>
      <div className={`${S["info"]}`}>
        <Title title={movie.title} path={movie.path} type={movie.type} />
        <div className={`${S["details"]}`}>
          {movie.genres && <Genres genres={movie.genres} />}
          {movie.releasedDate && <ReleaseDate date={movie.releasedDate} />}
          {movie.runTime && <Time time={movie.runTime} />}
          {movie.rated && <Rated rated={movie.rated} />}
          {movie.imdbScore && <IMDbScore score={movie.imdbScore} />}
          {movie.isTrailer && (
            <Button.Stroke text={"Watch Trailer"} href={movie.isTrailer} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;
