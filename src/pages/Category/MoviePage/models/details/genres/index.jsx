import S from "../../models.module.scss";
import Button from "/src/components/Button";

import { Link } from "react-router-dom";
import useTitle from "/src/hooks/useTitle";

const Genres = ({ genres }) => {
  return (
    <div className={S["section-links"]}>
      {genres.map((genre, index) => {
        return (
          <Link
            key={genre.id}
            to={`/genre/${useTitle(genre.name)}`}
            className={S["person"]}
          >
            <Button.Stroke key={index} text={genre.name} />
          </Link>
        );
      })}
    </div>
  );
};

export default Genres;
