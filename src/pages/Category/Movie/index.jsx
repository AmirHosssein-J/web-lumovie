import axios from "axios";
import { useLoaderData } from "react-router-dom";

import { BASE_URL, API_KEY } from "/src/api";

import MoviePage from "/src/pages/MoviePage";
import useMovie from "/src/hooks/useMovie";
import Loading from "/src/pages/Loading";

export async function loader({ params }) {
  const getMovie = async (movieId) => {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );

    return response ?? null;
  };

  const movie = getMovie(params.movieId);
  return movie;
}

const Movie = () => {
  const movie = useLoaderData();

  const { data, isLoading } = useMovie(movie.data.id);
  if (isLoading) return <Loading />;

  const [detail, credits, certification, images] = data;
  return (
    <MoviePage
      movie={detail}
      credits={credits}
      certification={certification}
      images={images}
    />
  );
};

export default Movie;
