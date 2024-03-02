const Button = ({ children, onClick, style, disabled }) => {
  return (
    <button className={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
