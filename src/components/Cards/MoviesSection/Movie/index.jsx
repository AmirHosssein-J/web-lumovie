import axios from "axios";

import S from "../movie.module.scss";
import { Link } from "react-router-dom";

import useTitle from "/src/hooks/useTitle";
import useMovie from "/src/hooks/useMovie";

import Button from "/src/components/Button";
import Title from "./Details/Title";
import Genres from "./Details/Genres";
import Rated from "./Details/Rated";
import ReleaseDate from "./Details/ReleaseDate";
import Time from "./Details/Time";
import UserScore from "/src/pages/Category/MoviePage/models/details/user-score";

const Movie = ({ movie, isCompact }) => {
  const MOVIE = useMovie(movie.id);
  if (MOVIE.isLoading) return "Detail Loading";

  const [detail, credits, certifs] = MOVIE.data;

  console.log(detail);

  return (
    <div
      className={`${S["movie"]} ${
        isCompact ? S["movie--compact"] : S["movie--normal"]
      }`}
    >
      <Link
        to={`/movie/${movie.id}-${useTitle(movie.title)}`}
        className={`${S["image"]}`}
      >
        <img
          src={`https://image.tmdb.org/t/p/w400/${detail.poster_path}`}
          alt={`${detail.title} poster`}
        />
      </Link>
      <div className={`${S["info"]}`}>
        <Title
          title={movie.title}
          path={`/movie/${movie.id}-${useTitle(movie.title)}`}
        />
        <div className={`${S["details"]}`}>
          <Genres genres={detail.genres} />
          <Time time={detail.runtime} />
          <ReleaseDate date={detail.release_date} />
          <Rated certification={certifs} />
          <UserScore score={detail.vote_average} />
          {/*
          {movie.rated && <Rated rated={movie.rated} />}
          {movie.imdbScore && <IMDbScore score={movie.imdbScore} />}
          {movie.isTrailer && (
            <Button.Stroke text={"Watch Trailer"} href={movie.isTrailer} />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Movie;
