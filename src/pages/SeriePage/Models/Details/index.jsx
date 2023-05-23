import S from "/src/pages/MoviePage/Models/models.module.scss";
// import Trailer from "../Trailer";

import Title from "/src/components/Movie/Detail/Title";
import ReleaseDate from "/src/components/Movie/Detail/ReleaseDate";
import Certification from "/src/components/Movie/Detail/Certification";
import Runtime from "/src/components/Movie/Detail/Runtime";
import Genres from "/src/components/Movie/Detail/Genres";
import UserScore from "/src/components/Movie/Detail/UserScore";
import Countries from "/src/components/Movie/Detail/Countries";
import Cast from "/src/components/Movie/Detail/Cast";
import Directors from "/src/components/Movie/Detail/Directors";
import Writers from "/src/components/Movie/Detail/Writers";
import Musician from "/src/components/Movie/Detail/Musician";
import Plot from "/src/components/Movie/Detail/Plot";
import CreatedBy from "/src/components/Movie/Detail/CreatedBy";
import Status from "/src/components/Movie/Detail/Status";

const Details = ({ serie, credits, certification }) => {
  return (
    <section className={S["details"]}>
      <section className={S["title"]}>
        <div className={S["info"]}>
          <div className={S["head"]}>
            <Title title={serie.name} />
            {/* <Trailer movieId={serie.id} /> */}
          </div>
          <div className={S["facts"]}>
            <ReleaseDate
              serie
              firstAirDate={serie.first_air_date}
              lastAirDate={serie.last_air_date}
            />
            <Certification serie certifications={certification} />
            <Runtime minute={[serie.episode_run_time]} />
            <Status status={serie.status} />
          </div>
        </div>
      </section>
      <Genres genres={serie.genres} />
      <section className={S["additional-info"]}>
        <UserScore score={serie.vote_average} />
        <Countries countries={serie.production_countries} />
      </section>
      <Plot plot={serie.overview} />
      <Cast cast={credits.cast} />
      <CreatedBy creators={serie.created_by} />
      <Writers crew={credits.crew} />
      <Musician crew={credits.crew} />
    </section>
  );
};

export default Details;
