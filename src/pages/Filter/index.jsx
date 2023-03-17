import { useDispatch, useSelector } from "react-redux";

import { useQuery } from "react-query";

import styles from "./filter.module.scss";

import FilterBar from "/src/layout/SideBars/FilterBar";
import Movie from "/src/components/Cards/MoviesSection/Movie";

const Filter = () => {
  const isMoviesCompact = useSelector((state) => state.isMoviesCompact.value);

  const { isLoading, error, data } = useQuery("all", () =>
    fetch("http://localhost:3000/all").then((res) => res.json())
  );

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className={styles["filter"]}>
      <FilterBar />
      <section className={styles["content"]}>
        <div className={styles["movies"]}>
          {data.map((movie) => {
            return (
              <Movie
                key={movie.id}
                title={movie.title}
                genres={movie.genres}
                releasedDate={movie.releasedDate}
                releaseDate={movie.releaseDate}
                runTime={movie.runTime}
                rated={movie.rated}
                imdbScore={movie.imdbScore}
                path={movie.path}
                type={movie.type}
                img={movie.poster}
                isTrailer={movie.isTrailer}
                isCompact={isMoviesCompact}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Filter;
