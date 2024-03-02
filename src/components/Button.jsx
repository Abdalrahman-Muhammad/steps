const Button = ({ children, onClick, style, disabled }) => {
  console.log(children);
  return (
    <button className={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
