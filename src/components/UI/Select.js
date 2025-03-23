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
      <label htmlFor={name}>{children}</label>
      <select
        name={name}
        value={value}
        id={name}
        key={name}
        onChange={onChange}
      >
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
//
