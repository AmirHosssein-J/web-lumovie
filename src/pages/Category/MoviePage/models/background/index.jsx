import S from "../models.module.scss";

export default function Background({ imgPath }) {
  return (
    <div className={S["background-image"]}>
      <div className={S["overlay"]}></div>
      <img src={`https://image.tmdb.org/t/p/original/${imgPath}`} />
    </div>
  );
}
