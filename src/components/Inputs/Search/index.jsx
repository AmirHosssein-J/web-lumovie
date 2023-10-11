import S from "../input.module.scss";

import { useEffect, useRef, useState } from "react";
import { Form } from "react-router-dom";

import Button from "../../Button";
import Wrapper from "../../HOC/Wrapper";

import IC_Search from "/src/assets/icon/IC_Search";
import IC_Close from "/src/assets/icon/IC_Close";

import useAutoComplete from "/src/hooks/useAutoComplete";
import useDebounce from "/src/hooks/useDebounce";
import AutoComplete from "../AutoComplete";

const Search = ({ isTabOpen, setIsTabOpen }) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const debouncedInputValue = useDebounce(inputValue, 200);
  const autoCompleteMovies = useAutoComplete(debouncedInputValue);

  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isOverlay, setIsOverlay] = useState(false);

  const [movies, setMovies] = useState([]);

  // if form submited close search tab
  const handleOnSubmit = () => {
    setIsTabOpen(false);
    inputRef.current.blur();
  };

  // close auto complete with a delay
  const handleBlurInput = () => {
    setTimeout(() => {
      setIsInputFocused(false);
    }, 200);
  };

  const handleFocusInput = () => {
    setIsInputFocused(true);
  };

  useEffect(() => {
    if (isTabOpen) {
      inputRef.current.focus();
    }

    if (autoCompleteMovies.data) {
      setMovies(autoCompleteMovies.data.results);
    }

    if (!inputValue == "" && isOverlay) {
      setIsInputFocused(true);
    }
  }, [isTabOpen, movies, autoCompleteMovies, isInputFocused]);

  return (
    <Wrapper className={S["wrapper"]}>
      {/* input */}
      <Form className={S["search"]} action="/search/" onSubmit={handleOnSubmit}>
        <Button.Icon icon={<IC_Search />} dimension={3.25} alt="Search Icon" />
        <input
          type="search"
          placeholder="What do you want to watch?"
          className={S["search-input"]}
          autoComplete="off"
          name="q"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => handleBlurInput()}
          onFocus={() => handleFocusInput()}
        />
        {inputValue && (
          <Button.Icon
            icon={<IC_Close />}
            onClick={() => setInputValue("")}
            dimension={2}
          />
        )}
      </Form>

      {/* auto complete after typing */}
      {movies.length && isInputFocused && (
        <AutoComplete movies={movies} handleOnSubmit={() => handleOnSubmit()} />
      )}

      {/* overlay to close autocomplete when autocomplete appears */}
      {!inputValue == "" && isInputFocused && (
        <div className={S["overlay"]} onClick={() => handleOnSubmit()}></div>
      )}
    </Wrapper>
  );
};

export default Search;
