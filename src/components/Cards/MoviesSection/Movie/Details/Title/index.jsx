import { Link } from "react-router-dom";

import styles from "../details.module.scss";

export default function Title({ title, path }) {
  return (
    <Link to={path} className={`${styles["title"]}`}>
      {title}
    </Link>
  );
}
