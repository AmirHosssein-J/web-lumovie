import { Link } from "react-router-dom";

import styles from "../details.module.scss";

export default function Genres({ genres }) {
  return (
    <div className={`${styles["genres"]}`}>
      {genres.slice(0, 2).map((genre) => {
        return (
          <Link key={genre.id} to={genre.page}>
            {genre.name}
          </Link>
        );
      })}
    </div>
  );
}
