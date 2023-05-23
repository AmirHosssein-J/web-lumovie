import S from "./HOC.module.scss";

const Wrapper = ({ className, onClick, children, style }) => {
  return (
    <div
      className={`${className && className} ${S["wrapper"]}`}
      style={{ style }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Wrapper;
