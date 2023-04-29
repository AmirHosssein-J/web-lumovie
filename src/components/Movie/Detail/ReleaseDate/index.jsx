import { Link } from "react-router-dom";
import S from "../detail.module.scss";

export default function ReleaseDate({ date }) {
  const year = date.slice(0, 4);
  return (
    <Link to={`/released/${year}`} className={S["fact"]}>
      {date}
    </Link>
  );
}
