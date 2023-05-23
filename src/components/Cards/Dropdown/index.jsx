import S from "./dropdown.module.scss";

import { Link } from "react-router-dom";

import Wrapper from "../../HOC/Wrapper";

const Dropdown = ({ links, className }) => {
  return (
    <Wrapper
      className={`
        ${className ? className : ""} 
        ${S["list"]}
      `}
    >
      {links.map((link, index) => {
        return (
          <Link to={link.href} key={index} className={S["list-link"]}>
            {link.icon}
            {link.title}
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default Dropdown;
