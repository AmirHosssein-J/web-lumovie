import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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

  return (
    <div className={styles["filter"]}>
      <FilterBar />
      <section className={styles["content"]}>
        <div className={styles["movies"]}>
          {error && console.log(`Filter Movies ${error.message}`)}

          {!data ? (
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <Skeleton height={240} borderRadius={10} />
            </SkeletonTheme>
          ) : (
            data.map((movie) => {
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
            })
          )}
        </div>
      </section>
    </div>
  );
};

export default Filter;
