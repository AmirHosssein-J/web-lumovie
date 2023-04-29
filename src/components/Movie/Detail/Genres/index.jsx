import S from "../detail.module.scss";
import { Link } from "react-router-dom";
import Button from "/src/components/Button";
import useTitle from "/src/hooks/useTitle";

const Genres = ({ genres, isCard }) => {
  return (
    <div className={S["genres"]}>
      {isCard ? (
        <div className={S["genres-card"]}>
          {genres.slice(0, 2).map((genre) => {
            return (
              <Link
                className={S["fact"]}
                key={genre.id}
                to={`/genre/${useTitle(genre.name)}`}
              >
                {genre.name}
              </Link>
            );
          })}
        </div>
      ) : (
        <div className={S["genres-page"]}>
          {genres.map((genre) => {
            return (
              <Link key={genre.id} to={`/genre/${useTitle(genre.name)}`}>
                <Button.Stroke text={genre.name} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Genres;
