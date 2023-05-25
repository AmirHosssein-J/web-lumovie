import S from "../Detail/detail.module.scss";

import { useMediaQuery } from "react-responsive";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "/src/components/Button";

import PosterPlaceholder from "/src/assets/icon/poster_placeholder.png";
import useTitle from "/src/hooks/useTitle";
import ArrowSM from "/src/assets/icon/IC_ArrowSM";

const Section = ({ category, title, links }) => {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const onMobile = useMediaQuery({ query: "(max-width: 30rem)" });

  console.log("section");

  useEffect(() => {
    if (!onMobile) {
      setIsSectionOpen(true);
    }
  }, [isSectionOpen, onMobile]);

  const handleToggle = () => {
    if (onMobile) {
      setIsSectionOpen(!isSectionOpen);
    }
  };

  return (
    <section className={S["section"]}>
      <header className={S["section-header"]} onClick={() => handleToggle()}>
        {title && <h3 className={S["title"]}>{title}</h3>}
        {onMobile && (
          <Button.Icon
            className={isSectionOpen ? S["arrow"] : ""}
            icon={<ArrowSM />}
            dimension={2}
          />
        )}
      </header>
      <div
        className={`${S["wrapper"]} ${isSectionOpen ? S["wrapper--open"] : ""}
        `}
      >
        <div className={S["wrapper-grid"]}>
          <div className={S["section-links"]}>
            {links.map((link) => {
              return (
                <Link
                  key={link.id}
                  to={`/${category}/${useTitle(link.name)}`}
                  className={S["person"]}
                >
                  {link.profile_path ? (
                    <img
                      className={S["image"]}
                      src={`https://image.tmdb.org/t/p/h632/${link.profile_path}`}
                    />
                  ) : (
                    <img className={S["image"]} src={PosterPlaceholder} />
                  )}

                  <div className={S["info"]}>
                    <h5 className={S["name"]}>{link.name}</h5>
                    <h6 className={S["character"]}>{link.character}</h6>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
