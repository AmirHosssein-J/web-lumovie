import { useLoaderData } from "react-router-dom";

import MoviePage from "../../MoviePage";
import { getMovie } from "../../MoviePage/utils";

export async function loader({ params }) {
  const animation = await getMovie(
    params.animationId,
    "http://localhost:3000/animations"
  );
  return animation;
}

const Animation = () => {
  const animation = useLoaderData();
  return <MoviePage movie={animation} />;
};

export default Animation;
