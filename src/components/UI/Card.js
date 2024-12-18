import "./Card.css";

export const Card = ({ className, children }) => {
  return <div className={(className ?? "") + " card"}>{children}</div>;
};
