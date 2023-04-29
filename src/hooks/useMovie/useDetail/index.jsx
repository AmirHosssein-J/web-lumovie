import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getDetail = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=1b10176a16c36b444c7c73221e99d0c5`
  );
  return data;
};

export default function useDetail(movieId) {
  return useQuery({
    queryKey: ["detail", movieId],
    queryFn: () => getDetail(movieId),
  });
}
