import { useLoaderData } from "react-router-dom";
import MoviePage from "../../MoviePage";

import { getMovie } from "../../MoviePage/utils";

export async function loader({ params }) {
  const movie = await getMovie(params.movieId, "http://localhost:3000/movies");
  return movie;
}

const Movie = () => {
  const movie = useLoaderData();
  return <MoviePage movie={movie} />;
};

export default Movie;
