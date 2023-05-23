import S from "../detail.module.scss";

const Plot = ({ plot }) => {
  return <p className={S["plot"]}>{plot}</p>;
};

export default Plot;
