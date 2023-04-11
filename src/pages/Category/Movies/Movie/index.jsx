import { useLoaderData } from "react-router-dom";
import MoviePage from "../../MoviePage";

import { getMovie } from "../../MoviePage/utils";

import data from "/src/assets/data/db.json";

// console.log(data.movies);

const getMovies = (path, data) => {
  let movie = data.find((movie) => movie.path === path);
  return movie ?? null;
};

export async function loader({ params }) {
  // const movie = await getMovie(params.movieId, "http://localhost:3000/movies");
  const movie = await getMovies(params.movieId, data.movies);
  return movie;
}

const Movie = () => {
  const movie = useLoaderData();
  return <MoviePage movie={movie} />;
};

export default Movie;
