import styles from "./HOC.module.scss";

const Container = ({ className, onClick, children, style }) => {
  return (
    <div
      className={`${className ? className : ""} ${styles["container"]}`}
      style={style && style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Container;
