import S from "../detail.module.scss";

import Tooltip from "/src/components/Cards/Tooltip";

const Runtime = ({ minute }) => {
  return (
    <span className={S["fact"]}>
      {minute}m
      <Tooltip className={S["fact-tooltip"]} text="Runtime" />
    </span>
  );
};

export default Runtime;
