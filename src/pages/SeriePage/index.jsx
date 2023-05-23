import Background from "../MoviePage/Models/Background";
import Details from "./Models/Details";
import S from "../MoviePage/movie-page.module.scss";
import Season from "./Models/Seasons/Season";
import Seasons from "./Models/Seasons";

const SeriePage = ({ serie, credits, certification }) => {
  return (
    <section className={S["content"]}>
      <div className={S["serie"]}>
        <Background
          backdropPath={serie.backdrop_path}
          posterPath={serie.poster_path}
          title={serie.title}
          movie={serie}
        />
        <Details
          serie={serie}
          credits={credits}
          certification={certification}
        />
      </div>
      <div className={S["info"]}>
        <Seasons seasons={serie.seasons} />
        {/* <Season season={serie.seasons[1]} /> */}
      </div>
    </section>
  );
};

export default SeriePage;
