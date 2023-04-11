import S from "../posters.module.scss";

import { Link } from "react-router-dom";

const Poster = ({ className, img, alt, path, type }) => {
  return (
    <Link
      className={`${className ? className : ""} ${S["poster"]}`}
      to={`${type}/${path}`}
    >
      <img
        className={`${className ? className : ""} ${S["poster-img"]}`}
        src={img}
        alt={alt}
      />
    </Link>
  );
};

export default Poster;
