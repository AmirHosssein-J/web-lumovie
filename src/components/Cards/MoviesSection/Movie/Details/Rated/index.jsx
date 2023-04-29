import { Link } from "react-router-dom";

import S from "../details.module.scss";

export default function Rated({ certification }) {
  const country = certification.results.find(
    (movie) =>
      (movie.iso_3166_1 === "US") |
      (movie.iso_3166_1 === "DE") |
      (movie.iso_3166_1 === "UK")
  );
  const rated = country.release_dates.slice(-1)[0];
  const isRated = !rated.certification | (rated.length === 0);

  return (
    <Link className={`${S["rated"]}`} to={`/rated/${rated.certification}`}>
      {isRated ? "Not Rated" : rated.certification}
    </Link>
  );
}
