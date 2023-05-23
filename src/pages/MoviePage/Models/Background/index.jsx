import S from "../models.module.scss";

import { BACKGROUND_URL_IMAGE_XL, POSTER_URL_IMAGE } from "/src/api";

export default function Background({ backdropPath, posterPath, title }) {
  return (
    <>
      {backdropPath ? (
        <div className={S["background-image"]}>
          <div className={S["overlay"]}></div>
          <img
            src={`${BACKGROUND_URL_IMAGE_XL}/${backdropPath}`}
            alt={`${title} poster`}
          />
        </div>
      ) : (
        <div className={S["background-poster"]}>
          <img
            className={S["poster"]}
            src={`${POSTER_URL_IMAGE}/${posterPath}`}
            alt={`${title} poster`}
          />
        </div>
      )}
    </>
  );
}
