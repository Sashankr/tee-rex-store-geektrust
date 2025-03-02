import "./styles.scss";

const Button = ({ children, type }) => {
  return <button className={`custom-btn ${type}`}>{children}</button>;
};

export default Button;
