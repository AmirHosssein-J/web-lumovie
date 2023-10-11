import S from "../input.module.scss";

import { POSTER_URL_IMAGE } from "/src/api";

import { Link } from "react-router-dom";

import useTitle from "/src/hooks/useTitle";

const AutoComplete = ({ movies, handleOnSubmit }) => {
  return (
    <div className={S["auto-complete"]}>
      <ul className={S["auto-complete-list"]}>
        {movies?.map((movie, index) => (
          <li
            className={S["auto-complete-item"]}
            key={index}
            onClick={handleOnSubmit}>
            <Link
              className={S["auto-complete-link"]}
              to={`/movie/${movie.id}-${useTitle(movie.title)}`}>
              <img
                className={S["poster"]}
                src={`${POSTER_URL_IMAGE}/${movie.poster_path}`}
              />
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoComplete;
