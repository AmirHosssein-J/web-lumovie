import React from "react";

import { all } from "/src/assets/data/db.json";
import { useSearchParams } from "react-router-dom";

import Movie from "/src/components/cards/MoviesSection/Movie";
import SearchError from "/src/pages/Error/SearchError";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");

  const movies = [...all].filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (movies.length === 0) return <SearchError />;

  return (
    <div>
      {all
        .filter((movie) =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((movie) => (
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
          />
        ))}
    </div>
  );
};

export default Search;
