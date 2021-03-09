const Button = ({ text, color }) => {
  return (
    <button style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "blue",
};
export default Button;
