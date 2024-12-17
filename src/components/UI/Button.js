import "./Button.css";

export const Button = (props) => {
  return (
    <button
      className={(props.className ?? "") + " button"}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};
