import S from "./HOC.module.scss";

const Wrapper = ({ className, onClick, children }) => {
  return (
    <div
      className={`${className && className} ${S["wrapper"]}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Wrapper;
