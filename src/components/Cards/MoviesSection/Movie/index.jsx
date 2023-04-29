import S from "../movie.module.scss";
import { Link } from "react-router-dom";

import useTitle from "/src/hooks/useTitle";
import useMovie from "/src/hooks/useMovie";

import Title from "/src/components/Movie/Detail/Title";
import Genres from "/src/components/Movie/Detail/Genres";
import ReleaseDate from "/src/components/Movie/Detail/ReleaseDate";
import Certification from "/src/components/Movie/Detail/Certification";
import Runtime from "/src/components/Movie/Detail/Runtime";
import UserScore from "/src/components/Movie/Detail/UserScore";

const Movie = ({ movie, isCompact }) => {
  const MOVIE = useMovie(movie.id);
  if (MOVIE.isLoading) return "Detail Loading";

  const [detail, credits, certifications] = MOVIE.data;

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
        <Title title={movie.title} movieId={movie.id} isCard />
        <div className={`${S["details"]}`}>
          <Genres genres={detail.genres} isCard />
          <Runtime minute={detail.runtime} />
          <ReleaseDate date={detail.release_date} />
          <Certification certifications={certifications} />
          <UserScore score={detail.vote_average} />
        </div>
      </div>
    </div>
  );
};

export default Movie;
