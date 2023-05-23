import { useEffect, useRef } from "react";
import S from "./search-tab.module.scss";

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
    <section className={`${S["search"]} ${isTabOpen ? S["search--open"] : ""}`}>
      <header className={S["head"]}>
        <h4 className={S["title"]}>Search</h4>
        <Button.Icon
          className={S["close-btn"]}
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
