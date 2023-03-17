import { Link } from "react-router-dom";

import styles from "../models.module.scss";

import Button from "/src/components/Button";

const Section = ({ title, links }) => {
  return (
    <section className={styles["section"]}>
      {title && <h3 className={styles["section-title"]}>{title}</h3>}
      <div className={styles["section-links"]}>
        {links.map((link) => {
          return (
            <Link key={link.id} to={link.page}>
              <Button.Stroke text={link.name} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
