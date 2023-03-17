import styles from "./HOC.module.scss";

const Wrapper = ({ className, onClick, children }) => {
  return (
    <div
      className={`${className && className} ${styles["wrapper"]}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Wrapper;
