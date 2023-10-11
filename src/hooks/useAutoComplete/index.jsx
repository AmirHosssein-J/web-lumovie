import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { API_KEY, BASE_URL } from "/src/api";

const getAutoComplete = async (searchQuery) => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false&region=US`
  );

  return data;
};

export default function useAutoComplete(searchQuery) {
  return useQuery({
    queryKey: ["auto-complete", searchQuery],
    queryFn: () => getAutoComplete(searchQuery),
  });
}
