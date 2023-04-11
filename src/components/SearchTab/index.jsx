import { useEffect, useRef } from "react";
import styles from "./search-tab.module.scss";

import Button from "/src/components/Button";
import Search from "/src/components/Inputs/Search";

import IC_Close from "/src/assets/icon/IC_Close";

const SearchTab = ({ isTabOpen, setIsTabOpen }) => {
  const inputRef = useRef(null);
  const handleCloseTab = () => setIsTabOpen(false);
  const handleOnSubmit = () => {
    setIsTabOpen(false);
    inputRef.current.blur();
  };

  useEffect(() => {
    if (isTabOpen) {
      inputRef.current.focus();
    }
  }, [isTabOpen]);

  return (
    <section
      className={
        isTabOpen
          ? `${styles["search"]} ${styles["search--open"]}`
          : `${styles["search"]}`
      }
    >
      <header className={styles["head"]}>
        <h4 className={styles["title"]}>Search</h4>
        <Button.Icon
          className={styles["close-btn"]}
          icon={<IC_Close />}
          width={3.25}
          height={3.25}
          onClick={handleCloseTab}
        />
      </header>

      <Search
        inputRef={inputRef}
        onFilterClick={handleCloseTab}
        onSearchSubmit={handleOnSubmit}
      />
    </section>
  );
};

export default SearchTab;
