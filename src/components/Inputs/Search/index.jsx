import S from "../input.module.scss";

import { Form } from "react-router-dom";

import Button from "../../Button";
import Wrapper from "../../HOC/Wrapper";

import IC_Search from "/src/assets/icon/IC_Search";

const Search = ({ inputRef, onSearchSubmit, inputValue }) => {
  return (
    <Wrapper className={S["wrapper"]}>
      <Form className={S["search"]} action="/search/" onSubmit={onSearchSubmit}>
        <Button.Icon icon={<IC_Search />} dimension={3.25} alt="Search Icon" />
        <input
          type="search"
          placeholder="What do you want to watch?"
          className={S["search-input"]}
          name="q"
          ref={inputRef}
          value={inputValue}
        />
      </Form>
    </Wrapper>
  );
};

export default Search;
