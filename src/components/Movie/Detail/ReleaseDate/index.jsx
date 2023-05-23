import { Link } from "react-router-dom";
import S from "../detail.module.scss";

import Tooltip from "/src/components/Cards/Tooltip";

export default function ReleaseDate({
  date,
  serie,
  firstAirDate,
  lastAirDate,
}) {
  const year = date && date.slice(0, 4);
  const yearFirstAir = serie && firstAirDate.slice(0, 4);
  const yearLastAir = serie && lastAirDate.slice(0, 4);
  return (
    <>
      {serie ? (
        <div className={S["serie-airdate"]}>
          <span className={S["fact"]}>
            {firstAirDate}{" "}
            <Tooltip className={S["fact-tooltip"]} text="First Air Date" />
          </span>
          |
          <span className={S["fact"]}>
            {lastAirDate}
            <Tooltip className={S["fact-tooltip"]} text="Last Air Date" />
          </span>
        </div>
      ) : (
        <Link to={`/released/${year}`} className={S["fact"]}>
          {date}
        </Link>
      )}
    </>
  );
}
