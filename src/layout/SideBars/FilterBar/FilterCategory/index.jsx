import { useState } from "react";
import styles from "./filter-category.module.scss";

import Button from "/src/components/Button";
import Checkbox from "../Checkbox";

import SearchInput from "/src/components/Inputs/SearchInput";

import IC_Arrow from "/src/assets/icon/IC_ArrowSM";

const FilterCategory = ({ title, options, search }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggleBox = () => setIsOpen((isOpen) => !isOpen);

  const [filteredOptions, setFilteredOptions] = useState(options);
  const handleOnSearch = (e) => {
    const value = e.target.value;
    const copyOfOptions = [...options];
    const FilteredOptions = copyOfOptions.filter((opt) => {
      return opt.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });

    setFilteredOptions(FilteredOptions);
  };

  return (
    <fieldset
      className={
        !isOpen ? `${styles["box"]}` : `${styles["box"]} ${styles["box--open"]}`
      }
    >
      <header className={styles["header"]}>
        <legend className={styles["title"]}>{title}</legend>
        <Button.Icon
          className={styles["arrow"]}
          icon={<IC_Arrow />}
          dimension={2}
          onClick={handleToggleBox}
        />
      </header>
      <div className={styles["content"]}>
        {search && (
          <SearchInput placeholder={title} onChange={handleOnSearch} />
        )}
        <div className={styles["options"]}>
          {filteredOptions.map((opt, index) => {
            return (
              <Checkbox
                key={index}
                title={opt.title}
                image={opt.flag}
                categoryTitle={title}
              />
            );
          })}
        </div>
      </div>
    </fieldset>
  );
};

export default FilterCategory;
