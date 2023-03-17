import { Link } from "react-router-dom";

import styles from "./dropdown.module.scss";

import Wrapper from "../../HOC/Wrapper";

const Dropdown = ({ links, className }) => {
  return (
    <Wrapper className={`${className && className} ${styles["list"]}`}>
      {links.map((link, index) => {
        return (
          <Link to={link.href} key={index} className={`${styles["list-link"]}`}>
            {link.icon}
            {link.title}
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default Dropdown;
