import S from "../detail.module.scss";

const Runtime = ({ minute }) => {
  return <span className={S["fact"]}>{minute}m</span>;
};

export default Runtime;
