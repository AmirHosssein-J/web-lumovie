import S from "../detail.module.scss";

import Tooltip from "/src/components/Cards/Tooltip";

const Status = ({ status }) => {
  const ended = status === "Ended";
  const canceled = status === "Canceled";

  return (
    <span
      className={`
        ${ended ? S["status--ended"] : ""} 
        ${canceled ? S["status--canceled"] : ""}
        ${S["fact"]}
        ${S["status"]}
      `}
    >
      {status}
      <Tooltip className={S["fact-tooltip"]} text="Status" />
    </span>
  );
};

export default Status;
