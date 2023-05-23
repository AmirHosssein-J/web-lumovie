import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { API_KEY, BASE_URL } from "/src/api";

const getMovie = async (id) => {
  const { data: collection } = await axios.get(
    `${BASE_URL}/collection/${id}?api_key=${API_KEY}&language=en-US`
  );

  return collection;
};

export default function useCollection(collectionId) {
  return useQuery({
    queryKey: ["movie-collection", collectionId],
    queryFn: () => getMovie(collectionId),
  });
}
