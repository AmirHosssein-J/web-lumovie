import { Link } from "react-router-dom";
import S from "../detail.module.scss";
import useTitle from "/src/hooks/useTitle";

export default function Title({ title, movieId, isCard, category }) {
  return (
    <>
      {isCard ? (
        <Link
          to={`/${category}/${movieId}-${useTitle(title)}`}
          className={`${S["title-card"]} ${S["title"]}`}
        >
          <h2 data-title="title">{title}</h2>
        </Link>
      ) : (
        <h2 className={`${S["title-page"]} ${S["title"]}`}>{title}</h2>
      )}
    </>
  );
}
