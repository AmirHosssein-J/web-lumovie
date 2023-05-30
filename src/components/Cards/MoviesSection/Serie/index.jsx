import S from "../Movie/movie.module.scss";
import { Link } from "react-router-dom";

import { POSTER_URL_IMAGE } from "/src/api";

import PosterPlaceholder from "/src/assets/icon/poster_placeholder.png";

import useTitle from "/src/hooks/useTitle";
import useSerie from "/src/hooks/useSerie";

import Title from "/src/components/Movie/Detail/Title";
import Genres from "/src/components/Movie/Detail/Genres";
import Runtime from "/src/components/Movie/Detail/Runtime";
import UserScore from "/src/components/Movie/Detail/UserScore";
import OnLoading from "../Movie/onLoading";
import AirDate from "../../../Movie/Detail/AirDate";
import Seasons from "../../../Movie/Detail/Seasons";

const Serie = ({ serie, isCompact, className }) => {
  const query = useSerie(1399);
  if (query.isLoading) return <OnLoading />;

  const [detail, _, certifications] = query.data;

  return (
    <div
      className={`${S["movie"]} ${
        isCompact ? S["movie--compact"] : S["movie--normal"]
      } ${className ? className : ""}`}
    >
      <Link
        to={`/serie/${detail.id}-${useTitle(detail.name)}`}
        className={S["image"]}
      >
        {detail.poster_path ? (
          <img
            src={`${POSTER_URL_IMAGE}/${detail.poster_path}`}
            alt={`${detail.name} poster`}
          />
        ) : (
          <img src={PosterPlaceholder} />
        )}
      </Link>
      <div className={S["info"]}>
        <Title
          category="serie"
          title={detail.name}
          movieId={detail.id}
          isCard
        />
        <div className={S["details"]}>
          <Genres genres={detail.genres} isCard />
          <Runtime minute={detail.episode_run_time} />
          <Seasons seasons={detail.number_of_seasons} />
          <AirDate
            status={detail.status}
            firstAir={detail.first_air_date}
            lastAir={detail.last_air_date}
          />
          <UserScore score={detail.vote_average} />
        </div>
      </div>
    </div>
  );
};

export default Serie;
