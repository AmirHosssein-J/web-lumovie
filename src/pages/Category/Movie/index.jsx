import { useLoaderData } from "react-router-dom";
import MoviePage from "../MoviePage";

import { getMovie } from "../MoviePage/utils";

export async function loader({ params }) {
  console.log(params);
  const movie = await getMovie(
    params.movieId,
    "https://api.themoviedb.org/3/movie/now_playing?api_key=1b10176a16c36b444c7c73221e99d0c5&language=en-US&page=1&region=DE"
  );
  return movie;
}

const Movie = () => {
  const movie = useLoaderData();
  console.log(movie);
  return <h1 style={{ color: "red" }}> {movie.title}</h1>;
};

export default Movie;
