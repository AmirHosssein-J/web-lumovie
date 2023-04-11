import S from "../error.module.scss";
import Pattern from "/src/assets/image/pattern.jpg";

const SearchError = () => {
  return (
    <div className={S["search-error"]}>
      <section className={S["content"]}>
        <h2 className={S["title"]}>No Results Found</h2>
        <p className={S["sub-title"]}>
          We couldn`t find what you searched for.
        </p>
        <p className={S["sub-title"]}>Try searching again.</p>
      </section>
      <div
        className={S["background"]}
        style={{ backgroundImage: `url(${Pattern})` }}
      />
    </div>
  );
};

export default SearchError;
