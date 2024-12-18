import "./Select.css";

export const Select = ({
  className,
  children,
  name,
  value,
  onChange,
  options,
}) => {
  return (
    <div className={className}>
      <label htmlFor="">{children}</label>
      <select name={name} value={value} id={name} onChange={onChange}>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};
//
