import { useState } from "react";
import styles from "./box.module.scss";

import Button from "/src/components/Button";
import Checkbox from "../Checkbox";

import SearchInput from "/src/components/Inputs/SearchInput";

import IC_Arrow from "/src/assets/icon/IC_ArrowSM";

const Box = ({ title, options, search }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggleBox = () => setIsOpen((isOpen) => !isOpen);

  const [filteredOptions, setFilteredOptions] = useState(options);
  const handleFilter = (e) => {
    const value = e.target.value;
    const copyOfOptions = [...options];
    const FilteredOptions = copyOfOptions.filter((opt) => {
      return opt.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });

    setFilteredOptions(FilteredOptions);
  };

  return (
    <div
      className={
        !isOpen ? `${styles["box"]}` : `${styles["box"]} ${styles["box--open"]}`
      }
    >
      <header className={styles["header"]}>
        <h5 className={styles["title"]}>{title}</h5>
        <Button.Icon
          className={styles["arrow"]}
          icon={<IC_Arrow />}
          width={2}
          height={2}
          rounded={100}
          onClick={handleToggleBox}
        />
      </header>
      <div className={styles["content"]}>
        {search && <SearchInput placeholder={title} onChange={handleFilter} />}

        <div className={styles["options"]}>
          {filteredOptions.map((opt, index) => {
            return <Checkbox key={index} title={opt.title} image={opt.flag} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Box;
