import { useState } from "react";
import S from "./checkbox.module.scss";

const Checkbox = ({ title, image, categoryTitle }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={S["checkbox"]}>
      <input
        id={title}
        className={S["input"]}
        type="checkbox"
        htmlFor={title}
        name={categoryTitle}
        value={title}
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label htmlFor={title}>
        {title}
        {image && <img src={image} alt={`${image} flag`} />}
      </label>
    </div>
  );
};

export default Checkbox;
