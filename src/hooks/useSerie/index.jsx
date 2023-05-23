import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { API_KEY, BASE_URL } from "/src/api";

const getSerie = async (id) => {
  const { data: detail } = await axios.get(
    `${BASE_URL}/tv/${id}?api_key=${API_KEY}`
  );
  const { data: credits } = await axios.get(
    `${BASE_URL}/tv/${id}/credits?api_key=${API_KEY}`
  );
  const { data: certifs } = await axios.get(
    `${BASE_URL}/tv/${id}/content_ratings?api_key=${API_KEY}`
  );

  return [detail, credits, certifs];
};

export default function useSerie(serieId) {
  return useQuery({
    queryKey: ["serie", serieId],
    queryFn: () => getSerie(serieId),
  });
}
