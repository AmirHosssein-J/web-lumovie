import S from "./serie.module.scss";
import OnLoading from "./OnLoading";

import { Link } from "react-router-dom";

import Wrapper from "../../HOC/Wrapper";
import useSerie from "../../../hooks/useSerie";
import useTitle from "/src/hooks/useTitle";

const Serie = ({ serieId }) => {
  const query = useSerie(serieId);

  if (query.isLoading) return <OnLoading />;

  const [serie] = query.data;
  const latestEp = serie.last_episode_to_air;

  return (
    <Wrapper className={S["series"]}>
      <Link
        to={`/serie/${serie.id}-${useTitle(serie.name)}`}
        className={S["poster"]}
      >
        <img
          className={S["img"]}
          src={`https://image.tmdb.org/t/p/w780/${serie.backdrop_path}`}
        />
      </Link>
      <div className={S["info"]}>
        <Link
          to={`/serie/${serie.id}-${useTitle(serie.name)}`}
          className={S["title"]}
        >
          {serie.name}
        </Link>
        <div className={S["details"]}>
          <h5 className={S["epName"]}>{latestEp.name}</h5>
          <h6 className={S["ep"]}>
            <span>{`S${latestEp.season_number}`}</span>
            <span> {`E${latestEp.episode_number}`}</span>
          </h6>
        </div>
      </div>
    </Wrapper>
  );
};

export default Serie;
