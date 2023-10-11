import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { API_KEY, BASE_URL } from "/src/api";

const getMovie = async (id) => {
  const { data: detail } = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );
  const { data: credits } = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  const { data: certifs } = await axios.get(
    `${BASE_URL}/movie/${id}/release_dates?api_key=${API_KEY}`
  );
  const { data: images } = await axios.get(
    `${BASE_URL}/movie/${id}/images?api_key=${API_KEY}`
  );

  return [detail, credits, certifs, images];
};

export default function useMovie(movieId) {
  return useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => getMovie(movieId),
  });
}
