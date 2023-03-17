import styles from "./HOC.module.scss";

const Container = ({ className, onClick, children }) => {
  return (
    <div
      className={`${className && className} ${styles["container"]}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Container;
