import { Link } from "react-router-dom";

import styles from "../poster.module.scss";

const Poster = ({ className, img, alt, path, type }) => {
  return (
    <Link
      className={`${className && className} ${styles["poster"]}`}
      to={`${type}/${path}`}
    >
      <img
        className={`${className && className} ${styles["poster-img"]}`}
        src={img}
        alt={alt}
      />
    </Link>
  );
};

export default Poster;
