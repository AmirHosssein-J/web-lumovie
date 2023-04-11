import S from "../input.module.scss";

import Wrapper from "../../HOC/Wrapper";

const SearchInput = ({ placeholder, onChange }) => {
  return (
    <Wrapper className={`${S["wrapper"]} ${S["search-bar"]}`}>
      <input
        type="search"
        placeholder={`Search for ${placeholder}`}
        className={S["input"]}
        onChange={onChange}
        onSubmit={(e) => e.preventDefault()}
      />
    </Wrapper>
  );
};

export default SearchInput;
