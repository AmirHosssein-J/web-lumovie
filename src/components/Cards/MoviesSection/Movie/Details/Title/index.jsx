import { Link } from "react-router-dom";

import styles from "../details.module.scss";

export default function Title({ title, path, type }) {
  return (
    <Link to={path && `/${type}/${path}`} className={`${styles["title"]}`}>
      {title}
    </Link>
  );
}
