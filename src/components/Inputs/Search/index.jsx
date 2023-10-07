import S from "../input.module.scss";
import axios from "axios";

import { Form } from "react-router-dom";

import Button from "../../Button";
import Wrapper from "../../HOC/Wrapper";

import IC_Search from "/src/assets/icon/IC_Search";
import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { API_KEY, BASE_URL } from "/src/api";

const Search = ({ onSearchSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  const getAutoComplete = async (searchQuery) => {
    const data = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false&region=US`
    );

    return data;
  };

  const autoComplete = useQuery({
    queryKey: ["auto-complete", inputValue],
    queryFn: () => getAutoComplete(inputValue),
  });

  // if (autoComplete.isLoading) return console.log("loading");

  // console.log(autoComplete.data.data.results);

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
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Form>
    </Wrapper>
  );
};

export default Search;
