import S from "../detail.module.scss";
import { Link } from "react-router-dom";

export default function Certification({ serie, certifications }) {
  const country = certifications.results.find((movie) => {
    return movie.iso_3166_1 === "US";
  });

  const isRated = country === undefined;
  const rated = !serie && !isRated && country.release_dates.slice(-1)[0];

  return (
    <>
      {serie ? (
        <Link
          className={`${S["fact-certification"]} ${S["fact"]}`}
          to={`/rated/${country?.rating}`}
        >
          {country?.rating}
        </Link>
      ) : (
        !isRated && (
          <Link
            className={`${S["fact-certification"]} ${S["fact"]}`}
            to={`/rated/${rated.certification}`}
          >
            {isRated ? "Not Rated" : rated.certification}
          </Link>
        )
      )}
    </>
  );
}
