import { useLoaderData } from "react-router-dom";

import MoviePage from "../../MoviePage";
import { getMovie } from "../../MoviePage/utils";

export async function loader({ params }) {
  const anime = await getMovie(params.animeId, "http://localhost:3000/animes");
  return anime;
}

const Anime = () => {
  const anime = useLoaderData();
  return <MoviePage movie={anime} />;
};

export default Anime;
