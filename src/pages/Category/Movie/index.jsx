import axios from "axios";
import { useLoaderData } from "react-router-dom";

import MoviePage from "../../Category/MoviePage";
import useMovie from "/src/hooks/useMovie";
import Loading from "/src/pages/Loading";

export async function loader({ params }) {
  const getMovie = async (path) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${path}?api_key=1b10176a16c36b444c7c73221e99d0c5`
    );

    return response ?? null;
  };

  const movie = getMovie(params.movieId);
  return movie;
}

const Movie = () => {
  const movie = useLoaderData();

  const fullMovieInfo = useMovie(movie.data.id);
  if (fullMovieInfo.isLoading) return <Loading />;

  const [detail, credits, certification] = fullMovieInfo.data;
  return (
    <MoviePage movie={detail} credits={credits} certification={certification} />
  );
};

export default Movie;
