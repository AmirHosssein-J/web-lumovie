import styles from "./button.module.scss";

import Tooltip from "../Cards/Tooltip";

export const ButtonTemplate = ({
  text,
  icon,
  className,
  type,
  width,
  height,
  rounded,
  tooltip,
  alert,
  onClick,
  tooltipClassName,
}) => {
  return (
    <>
      <button
        className={`${className && className} ${styles["button"]}`}
        style={{
          width: `${width}rem`,
          height: `${height}rem`,
          minWidth: `${width}rem`,
          minHeight: `${height}rem`,
          borderRadius: `${rounded}px`,
        }}
        onClick={onClick}
        type={type}
      >
        {tooltip && <Tooltip text={tooltip} />}
        {alert && <div className={styles["alert"]}>{alert}</div>}
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
  width,
  height,
  rounded,
  tooltip,
  alert,
  onClick,
}) => {
  return (
    <ButtonTemplate
      className={`${className && className} ${
        border && styles["button--border"]
      }`}
      icon={icon}
      href={href}
      width={width}
      height={height}
      rounded={rounded}
      onClick={onClick}
      tooltip={tooltip}
      alert={alert}
    ></ButtonTemplate>
  );
};

const IconBox = ({ className, icon, width, height, tooltip }) => {
  return (
    <div
      className={`${className && className} ${styles["button--iconbox"]}`}
      style={{
        minWidth: `${width}rem`,
        minHeight: `${height}rem`,
      }}
    >
      {tooltip && <Tooltip text={tooltip} />}
      {icon}
    </div>
  );
};

const CTA = ({ text, href, width, rounded, type }) => {
  return (
    <ButtonTemplate
      className={`${styles["button--cta"]}`}
      text={text}
      href={href}
      width={width}
      rounded={rounded}
      type={type}
    />
  );
};

const Link = ({ text, href, icon, alt, underline }) => {
  return (
    <ButtonTemplate
      className={`${
        underline
          ? `${styles["button--link"]} ${styles["button--link--underline"]}`
          : `${styles["button--link"]}`
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
      className={`${className && className} ${styles["button--stroke"]}`}
      text={text}
      href={href}
      icon={icon}
      alt={alt}
    />
  );
};

const buttons = {
  Icon,
  IconBox,
  CTA,
  Link,
  Stroke,
};

export default buttons;
