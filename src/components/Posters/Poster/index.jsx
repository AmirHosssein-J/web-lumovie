import S from "../posters.module.scss";
import { Link } from "react-router-dom";
import { BACKGROUND_URL_IMAGE_M, POSTER_URL_IMAGE } from "/src/api";

import useTitle from "/src/hooks/useTitle";
import useMovie from "/src/hooks/useMovie";

import OnLoading from "./OnLoading";

const Poster = ({ className, path, id }) => {
  const query = useMovie(id);
  if (query.isLoading) return <OnLoading />;

  const [detail, _, , images] = query.data;
  const enLogo =
    images.logos.length > 0 &&
    images.logos.find((img) => img.iso_639_1 === "en");

  return (
    <Link
      className={`${className ? className : ""} ${S["poster"]}`}
      to={`/movie/${id}-${useTitle(path)}`}>
      {enLogo && (
        <img
          src={`${POSTER_URL_IMAGE}/${enLogo.file_path}`}
          className={S["poster-logo"]}
        />
      )}

      <img
        className={`${className ? className : ""} ${S["poster-img"]}`}
        src={`${BACKGROUND_URL_IMAGE_M}/${detail.backdrop_path}`}
        alt={`${detail.title} poster`}
      />
    </Link>
  );
};

export default Poster;
