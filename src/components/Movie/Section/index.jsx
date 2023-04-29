import S from "../Detail/detail.module.scss";
import { Link } from "react-router-dom";

import useTitle from "/src/hooks/useTitle";

const Section = ({ category, title, links }) => {
  return (
    <section className={S["section"]}>
      {title && <h3 className={S["section-title"]}>{title}</h3>}
      <div className={S["section-links"]}>
        {links.map((link) => {
          return (
            <Link
              key={link.id}
              to={`/${category}/${useTitle(link.name)}`}
              className={S["person"]}
            >
              {link.profile_path && (
                <img
                  className={S["image"]}
                  src={`https://image.tmdb.org/t/p/w185/${link.profile_path}`}
                />
              )}

              <div className={S["info"]}>
                <h5 className={S["name"]}>{link.name}</h5>
                <h6 className={S["character"]}>{link.character}</h6>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
