import { Link } from "react-router-dom";
import S from "../detail.module.scss";

export default function Certification({ certifications }) {
  const country = certifications.results.find(
    (movie) =>
      (movie.iso_3166_1 === "US") |
      (movie.iso_3166_1 === "DE") |
      (movie.iso_3166_1 === "UK")
  );
  const rated = country.release_dates.slice(-1)[0];
  const isRated = !rated.certification | (rated.length === 0);

  return (
    <Link
      className={`${S["fact-certification"]} ${S["fact"]}`}
      to={`/rated/${rated.certification}`}
    >
      {isRated ? "Not Rated" : rated.certification}
    </Link>
  );
}
