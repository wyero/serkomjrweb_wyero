import React from "react";

const Button = (props) => {
  return (
    <button
      disabeld={props.disabeld || null}
      onClick={props.onClick || null}
      className={`${props.className} capitalize bg-blue-500 text-white font-700 rounded-sm mt-3 text-[14px] py-1 px-4 hover:opacity-80 duration-100`}
    >
      {props.name}
    </button>
  );
};

export default Button;
