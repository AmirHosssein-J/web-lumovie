import axios from "axios";
import { useLoaderData } from "react-router-dom";

import { BASE_URL, API_KEY } from "/src/api";

import SeriePage from "/src/pages/SeriePage";
import useSerie from "/src/hooks/useSerie";
import Loading from "/src/pages/Loading";

export async function loader({ params }) {
  const getSerie = async (serieId) => {
    const response = await axios.get(
      `${BASE_URL}/tv/${serieId}?api_key=${API_KEY}`
    );

    return response ?? null;
  };

  const serie = getSerie(params.serieId);
  return serie;
}

const Serie = () => {
  const serie = useLoaderData();

  const { data, isLoading } = useSerie(serie.data.id);
  if (isLoading) return <Loading />;

  const [detail, credits, certification, images] = data;
  return (
    <SeriePage
      serie={detail}
      credits={credits}
      certification={certification}
      images={images}
    />
  );
};

export default Serie;
