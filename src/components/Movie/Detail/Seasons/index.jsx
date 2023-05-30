import S from "../detail.module.scss";

const Seasons = ({ seasons }) => {
  return <span className={S["fact"]}>{seasons} Seasons</span>;
};

export default Seasons;
