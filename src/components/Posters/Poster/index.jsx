import S from "../posters.module.scss";

import useTitle from "/src/hooks/useTitle";
import { Link } from "react-router-dom";

const Poster = ({ className, alt, img, path, id }) => {
  return (
    <Link
      className={`${className ? className : ""} ${S["poster"]}`}
      to={`/movie/${id}-${useTitle(path)}`}
    >
      <img
        className={`${className ? className : ""} ${S["poster-img"]}`}
        src={`https://image.tmdb.org/t/p/w780/${img}`}
        alt={alt}
      />
    </Link>
  );
};

export default Poster;
