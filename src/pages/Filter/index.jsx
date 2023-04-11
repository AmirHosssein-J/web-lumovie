import S from "./filter.module.scss";

import { useSelector } from "react-redux";

import { useQuery } from "react-query";

import FilterBar from "/src/layout/SideBars/FilterBar";
import Movie from "/src/components/Cards/MoviesSection/Movie";
import ErrorText from "/src/pages/Error/ErrorText";
import OnLoading from "/src/components/Cards/MoviesSection/OnLoading";
import { useLoaderData } from "react-router-dom";

// import fetchMovies from "/src/components/fetchMovies";

const fetchMovies = async () => {
  const response = await fetch("http://localhost:3000/all");
  return response.json();
};

const Filter = () => {
  const loaderData = useLoaderData();
  const isMoviesCompact = useSelector((state) => state.isMoviesCompact.value);

  const { isLoading, error, isError, data } = useQuery("all", fetchMovies);
  if (isError) return <ErrorText message={error.message} />;

  return (
    <div className={S["filter"]}>
      <FilterBar />
      <section className={S["content"]}>
        <div className={S["movies"]}>
          {isLoading ? (
            <OnLoading className={S["skeletons"]} />
          ) : (
            data?.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  movie={movie}
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

//  filteredData.map((movie) => {
//             return (
//               <Movie
//                 key={movie.id}
//                 title={movie.title}
//                 genres={movie.genres}
//                 releasedDate={movie.releasedDate}
//                 releaseDate={movie.releaseDate}
//                 runTime={movie.runTime}
//                 rated={movie.rated}
//                 imdbScore={movie.imdbScore}
//                 path={movie.path}
//                 type={movie.type}
//                 img={movie.poster}
//                 isTrailer={movie.isTrailer}
//                 isCompact={isMoviesCompact}
//               />
//             );
//           })
//         )}

{
  /* <div className={S["filter"]}>
<FilterBar onSubmit={handleFiltering} />
<section className={S["content"]}>
  <div className={S["movies"]}>
    {isLoading ? (
      <OnLoading className={S["skeletons"]} />
    ) : filteredData.length === 0 ? (
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
    ) : (
      filteredData.map((movie) => {
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
</div> */
}
