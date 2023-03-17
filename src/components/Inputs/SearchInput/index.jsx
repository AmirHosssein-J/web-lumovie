import styles from "../input.module.scss";

import Wrapper from "../../HOC/Wrapper";

const SearchInput = ({ placeholder, onChange }) => {
  return (
    <Wrapper className={`${styles["wrapper"]} ${styles["search-bar"]}`}>
      <input
        type="search"
        placeholder={`Search for ${placeholder}`}
        className={`${styles["input"]}`}
        onChange={onChange}
        onSubmit={(e) => e.preventDefault()}
      />
    </Wrapper>
  );
};

export default SearchInput;
