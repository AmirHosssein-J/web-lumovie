import S from "../models.module.scss";

import { BACKGROUND_URL_IMAGE_XL, POSTER_URL_IMAGE } from "/src/api";

export default function Background({
  backdropPath,
  posterPath,
  title,
  images,
}) {
  const poster =
    images && images.backdrops.length > 2
      ? images.backdrops[1]
      : images.backdrops[0];

  console.log(images);

  return (
    <>
      {backdropPath ? (
        <div className={S["background-image"]}>
          <div className={S["overlay"]}></div>
          <img
            src={`${BACKGROUND_URL_IMAGE_XL}/${poster.file_path}`}
            alt={`${title} poster`}
          />
        </div>
      ) : (
        <div className={S["background-poster"]}>
          <img
            className={S["poster"]}
            src={`${POSTER_URL_IMAGE}/${backdropPath}`}
            alt={`${title} poster`}
          />
        </div>
      )}
    </>
  );
}
