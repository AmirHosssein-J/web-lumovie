import S from "./button.module.scss";

import Tooltip from "../Cards/Tooltip";
import IC_ArrowSM from "/src/assets/icon/IC_ArrowSM";

export const ButtonTemplate = ({
  text,
  icon,
  className,
  type,
  dimension,
  tooltip,
  alert,
  onClick,
  onSubmit,
}) => {
  return (
    <>
      <button
        className={`${className ? className : ""} ${S["button"]}`}
        style={{
          width: `${dimension}rem`,
          height: `${dimension}rem`,
          minWidth: `${dimension}rem`,
          minHeight: `${dimension}rem`,
        }}
        onClick={onClick}
        onSubmitCapture={onSubmit}
        type={type}
      >
        {tooltip && <Tooltip text={tooltip} />}
        {alert && <div className={S["alert"]}>{alert}</div>}
        {text && text}
        {icon && icon}
      </button>
    </>
  );
};

const Icon = ({
  className,
  icon,
  href,
  border,
  dimension,
  tooltip,
  alert,
  onClick,
  onSubmit,
}) => {
  return (
    <ButtonTemplate
      className={`${className && className} ${border && S["button--border"]}`}
      icon={icon}
      href={href}
      dimension={dimension}
      onClick={onClick}
      onSubmit={onSubmit}
      tooltip={tooltip}
      alert={alert}
    ></ButtonTemplate>
  );
};

const IconBox = ({ className, icon, width, height, tooltip, onClick }) => {
  return (
    <div
      className={`${className && className} ${S["button--iconbox"]}`}
      style={{
        minWidth: `${width}rem`,
        minHeight: `${height}rem`,
      }}
      onClick={onClick}
    >
      {tooltip && <Tooltip text={tooltip} />}
      {icon}
    </div>
  );
};

const CTA = ({ text, href, width, type, onClick }) => {
  return (
    <ButtonTemplate
      className={`${S["button--cta"]}`}
      text={text}
      href={href}
      width={width}
      type={type}
      onClick={onClick}
    />
  );
};

const Link = ({ text, href, icon, alt, underline }) => {
  return (
    <ButtonTemplate
      className={`${
        underline
          ? `${S["button--link"]} ${S["button--link--underline"]}`
          : `${S["button--link"]}`
      }`}
      text={text}
      href={href}
      icon={icon}
      alt={alt}
    />
  );
};

const Stroke = ({ className, text, href, icon, alt }) => {
  return (
    <ButtonTemplate
      className={`${className && className} ${S["button--stroke"]}`}
      text={text}
      href={href}
      icon={icon}
      alt={alt}
    />
  );
};

const HamburgerMenu = ({ isClosed, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${isClosed ? `${S["hamburger-menu--closed"]}` : ""} ${
        S["hamburger-menu"]
      }`}
    >
      <div className={S["line"]}></div>
    </div>
  );
};

const Arrow = ({ className, onClick }) => {
  return (
    <ButtonTemplate
      className={`${className ? className : ""} ${S["button--border"]}`}
      icon={<IC_ArrowSM />}
      onClick={onClick}
      alt="arrow icon"
      dimension={2}
    />
  );
};

const buttons = {
  Icon,
  IconBox,
  CTA,
  Link,
  Stroke,
  HamburgerMenu,
  Arrow,
};

export default buttons;
