import { Link } from "react-router-dom";

import styles from "../details.module.scss";

export default function Rated({ rated }) {
  return (
    <Link className={`${styles["rated"]}`} to={`/rated/${rated}`}>
      {rated}
    </Link>
  );
}
