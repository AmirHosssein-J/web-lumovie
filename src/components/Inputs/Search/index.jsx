import { Form, Link } from "react-router-dom";

import styles from "../input.module.scss";

import Button from "../../Button";
import Wrapper from "../../HOC/Wrapper";

import IC_Search from "/src/assets/icon/IC_Search";
import IC_Filter from "/src/assets/icon/IC_Filter";

const Search = () => {
  return (
    <Wrapper className={`${styles["wrapper"]}`}>
      <Form className={`${styles["search"]}`}>
        <Button.Icon
          icon={<IC_Search />}
          width={3.25}
          height={3.25}
          alt={"Search Icon"}
          rounded={100}
          href={"./hello"}
        />
        <input
          type="search"
          placeholder="Search for Movies and More..."
          className={`${styles["search-input"]}`}
          name={"q"}
        />
        <Link to={"/filter"}>
          <Button.IconBox
            icon={<IC_Filter />}
            width={3.25}
            height={3.25}
            alt={"Filter Icon"}
            rounded={100}
          ></Button.IconBox>
        </Link>
      </Form>
    </Wrapper>
  );
};

export default Search;
