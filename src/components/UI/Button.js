import "./Button.css";

export const Button = ({ className, onClick, type, children }) => {
  return (
    <button
      className={(className ?? "") + " button"}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
