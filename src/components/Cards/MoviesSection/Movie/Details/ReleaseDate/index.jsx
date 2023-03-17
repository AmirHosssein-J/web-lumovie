import { Link } from "react-router-dom";

import styles from "../details.module.scss";

export default function ReleaseDate({ date }) {
  return (
    <Link className={`${styles["releaseDate"]}`} to={`/released/${date}`}>
      {date}
    </Link>
  );
}
