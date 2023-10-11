import S from "../input.module.scss";

import { useEffect, useRef, useState } from "react";
import { Form, Link } from "react-router-dom";

import Button from "../../Button";
import Wrapper from "../../HOC/Wrapper";

import IC_Search from "/src/assets/icon/IC_Search";
import IC_Close from "/src/assets/icon/IC_Close";

import useAutoComplete from "/src/hooks/useAutoComplete";
import useDebounce from "/src/hooks/useDebounce";

const Search = ({ isTabOpen, setIsTabOpen }) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const debouncedInputValue = useDebounce(inputValue, 200);
  const autoCompleteMovies = useAutoComplete(debouncedInputValue);
  const [movies, setMovies] = useState([]);

  const handleOnSubmit = () => {
    setIsTabOpen(false);
    inputRef.current.blur();
  };

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

    if (!inputValue == "") {
      setIsInputFocused(true);
    }
  }, [isTabOpen, movies, autoCompleteMovies, isInputFocused]);

  return (
    <Wrapper className={S["wrapper"]}>
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
      {movies.length && isInputFocused && (
        <div className={S["auto-complete"]}>
          <ul className={S["auto-complete-list"]}>
            {movies?.map((movie, index) => (
              <li
                className={S["auto-complete-item"]}
                key={index}
                onClick={() => setInputValue(movie.original_title)}>
                {movie.original_title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Wrapper>
  );
};

export default Search;
