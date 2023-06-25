import S from "./nav.module.scss";

import NavItem from "./NavItem";

const NavList = ({ title, links, isMenuClosed }) => {
  return (
    <ul className={S["list"]}>
      <div className={S["title-container"]}>
        {!isMenuClosed && <h4 className={S["title"]}> {title}</h4>}
      </div>
      {links.map((link, index) => {
        return (
          <NavItem
            key={index}
            icon={link.icon}
            alt={link.alt}
            text={link.text}
            href={link.href}
            isMenuClosed={isMenuClosed}></NavItem>
        );
      })}
    </ul>
  );
};

export default NavList;
