import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getMovie = async (id) => {
  const { data: detail } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=1b10176a16c36b444c7c73221e99d0c5`
  );
  const { data: credits } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=1b10176a16c36b444c7c73221e99d0c5`
  );
  const { data: certifs } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=1b10176a16c36b444c7c73221e99d0c5`
  );

  return [detail, credits, certifs];
};

export default function useMovie(movieId) {
  return useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => getMovie(movieId),
  });
}
