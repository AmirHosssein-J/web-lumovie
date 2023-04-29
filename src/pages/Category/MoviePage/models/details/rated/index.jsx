import { Link } from "react-router-dom";
import S from "../../models.module.scss";

export default function Rated({ certification }) {
  const country = certification.results.find(
    (movie) => movie.iso_3166_1 === "US"
  );
  const rated = country.release_dates.slice(-1)[0];

  return (
    <Link to={`/rated/${rated.certification}`} className={S["fact"]}>
      {rated.certification}
    </Link>
  );
}
