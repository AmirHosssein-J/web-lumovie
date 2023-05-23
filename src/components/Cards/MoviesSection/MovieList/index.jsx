import S from "./movie-list.module.scss";
import Movie from "../Movie";

import useWindowsSize from "/src/hooks/useWindowSize";

const MovieList = ({ movies, isCompact }) => {
  const { width } = useWindowsSize();
  const onMobile = width <= 643;

  return (
    <div className={S["movie-list"]}>
      {movies?.map((movie) => {
        return (
          <Movie
            className={onMobile ? S["movie-card"] : ""}
            key={movie.id}
            movie={movie}
            isCompact={isCompact}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
