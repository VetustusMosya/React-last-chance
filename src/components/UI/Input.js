import "./Input.css";

export const Input = ({ className, children, type, id, value, onChange }) => {
  return (
    <div className={className}>
      <label htmlFor="">{children}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
};
