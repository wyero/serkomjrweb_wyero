import React from "react";

const Input = (props) => {
  return (
    <div className="flex items-center gap-10">
      <label htmlFor={props.id} className="capitalize font-500 flex-[0.4] text-[15px]">{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled || null}
        className={`${props.className} border-[1px] outline-none border-gray-400 rounded-md py-1 px-2 text-[14px] flex-1`}
      />
    </div>
  );
};

export default Input;
