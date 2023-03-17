import { useState } from "react";
import styles from "./checkbox..module.scss";

const Checkbox = ({ title, image }) => {
  // const [isSelected, setIsSelected] = useState(false);

  return (
    <div className={styles["checkbox"]}>
      <input
        // checked={isSelected}
        id={title}
        className={styles["input"]}
        type={"checkbox"}
        htmlFor={title}
      />
      <label htmlFor={title}>
        {title}
        {image && <img src={image} alt={`${image} flag`} />}
      </label>
    </div>
  );
};

export default Checkbox;
