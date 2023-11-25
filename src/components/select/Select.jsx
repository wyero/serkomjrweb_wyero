import React from "react";

const Select = (props) => {
  return (
    <div className="flex items-center gap-10">
      <label htmlFor={props.id} className="capitalize font-500 flex-[0.4] text-[15px]">
        {props.label}
      </label>
      <select
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        className="border-[1px] outline-none border-gray-400 rounded-md py-1 px-2 text-[14px] flex-1"
      >
        <option value="">{props.default}</option>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
