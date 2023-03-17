import { Link } from "react-router-dom";

import styles from "../movie.module.scss";

import Button from "/src/components/Button";
import Title from "./Details/Title";
import Genres from "./Details/Genres";
import Rated from "./Details/Rated";
import ReleaseDate from "./Details/ReleaseDate";
import Time from "./Details/Time";
import IMDbScore from "./Details/IMDbScore";

const Movie = ({
  title,
  genres,
  releasedDate,
  releaseDate,
  runTime,
  rated,
  imdbScore,
  path,
  type,
  img,
  isBookmarked,
  isTrailer,
  isCompact,
}) => {
  return (
    <div
      className={
        !isCompact
          ? `${styles["movie"]} ${styles["movie--normal"]}`
          : `${styles["movie"]} ${styles["movie--compact"]}`
      }
    >
      <Link to={path && `/${type}/${path}`} className={`${styles["image"]}`}>
        <img src={img} alt={`${title} poster`} />
      </Link>
      <div className={`${styles["info"]}`}>
        <Title title={title} path={path} type={type} />
        <div className={`${styles["details"]}`}>
          {genres && <Genres genres={genres} />}
          {releasedDate && <ReleaseDate date={releasedDate} />}
          {runTime && <Time time={runTime} />}
          {rated && <Rated rated={rated} />}
          {imdbScore && <IMDbScore score={imdbScore} />}
          {isTrailer && (
            <Button.Stroke text={"Watch Trailer"} href={isTrailer} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;
