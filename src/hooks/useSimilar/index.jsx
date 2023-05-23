import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { API_KEY, BASE_URL } from "/src/api";

const getMovie = async (id) => {
  const { data: similar } = await axios.get(
    `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
  );

  return similar;
};

export default function useSimilarMovies(movieId) {
  return useQuery({
    queryKey: ["similar-movies", movieId],
    queryFn: () => getMovie(movieId),
  });
}
