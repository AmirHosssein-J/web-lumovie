import S from "../detail.module.scss";

import Tooltip from "/src/components/Cards/Tooltip";

const AirDate = ({ lastAir, firstAir, status }) => {
  const yearFirstAir = firstAir.slice(0, 4);
  const yearLastAir = lastAir.slice(0, 4);

  const statusEnded = status === "Ended";

  return (
    <>
      {statusEnded ? (
        <div className={S["serie-airdate"]}>
          <span className={S["fact"]}>
            {yearFirstAir}
            <Tooltip className={S["fact-tooltip"]} text="First Air Date" />
          </span>
          |
          <span className={S["fact"]}>
            {yearLastAir}
            <Tooltip className={S["fact-tooltip"]} text="Last Air Date" />
          </span>
        </div>
      ) : (
        <div className={S["serie-airdate"]}>
          <span className={S["fact"]}>
            Since {yearFirstAir}
            <Tooltip className={S["fact-tooltip"]} text="First Air Date" />
          </span>
        </div>
      )}
    </>
  );
};

export default AirDate;
