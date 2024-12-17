export const Select = (props) => {
  return (
    <div className={props.className}>
      <label htmlFor="">{props.children}</label>
      <select
        name={props.name}
        value={props.value}
        id={props.name}
        onChange={props.onChange}
      >
        {props.data.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};
//
