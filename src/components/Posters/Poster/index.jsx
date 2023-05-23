import S from "../posters.module.scss";
import { Link } from "react-router-dom";
import { BACKGROUND_URL_IMAGE_M } from "/src/api";

import useTitle from "/src/hooks/useTitle";
import useMovie from "/src/hooks/useMovie";

import OnLoading from "./OnLoading";

const Poster = ({ className, path, id }) => {
  const query = useMovie(id);
  if (query.isLoading) return <OnLoading />;

  const [detail] = query.data;

  return (
    <Link
      className={`${className ? className : ""} ${S["poster"]}`}
      to={`/movie/${id}-${useTitle(path)}`}
    >
      <img
        className={`${className ? className : ""} ${S["poster-img"]}`}
        src={`${BACKGROUND_URL_IMAGE_M}/${detail.backdrop_path}`}
        alt={`${detail.title} poster`}
      />
    </Link>
  );
};

export default Poster;
