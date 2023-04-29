import { useQueries } from "@tanstack/react-query";

import { useLoaderData } from "react-router-dom";
import { getMovie } from "/src/pages/Category/MoviePage/utils";

import MoviePage from "../../Category/MoviePage";
import useFetch from "/src/hooks/useFetch";

export async function loader({ params }) {
  const movie = await getMovie(
    params.moviePath,
    "https://api.themoviedb.org/3/movie/now_playing?api_key=1b10176a16c36b444c7c73221e99d0c5&language=en-US&page=1&region=DE"
  );
  return movie;
}

const Utils = () => {
  const movie = useLoaderData();
  const [movieQuery, creditsQuery, certificationQuery] = useQueries({
    queries: [
      {
        queryKey: ["movie"],
        queryFn: () =>
          useFetch(
            `https://api.themoviedb.org/3/movie/${movie.id}?api_key=1b10176a16c36b444c7c73221e99d0c5`
          ),
      },
      {
        queryKey: ["credits"],
        queryFn: () =>
          useFetch(
            `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=1b10176a16c36b444c7c73221e99d0c5`
          ),
      },
      {
        queryKey: ["certification"],
        queryFn: () =>
          useFetch(
            `https://api.themoviedb.org/3/movie/${movie.id}/release_dates?api_key=1b10176a16c36b444c7c73221e99d0c5`
          ),
      },
    ],
  });

  if (movieQuery.isLoading) return `on Loading`;
  if (movieQuery.isError) return `got error ${error.message}`;
  if (creditsQuery.isLoading) return `on Loading`;
  if (creditsQuery.isError) return `got error ${error.message}`;
  if (certificationQuery.isLoading) return `on Loading`;
  if (certificationQuery.isError) return `got error ${error.message}`;

  return (
    <MoviePage
      movie={movieQuery.data}
      credits={creditsQuery.data}
      certification={certificationQuery.data}
    />
  );
};

export default Utils;
