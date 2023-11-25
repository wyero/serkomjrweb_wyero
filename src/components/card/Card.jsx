import React from "react";

const Card = (props) => {
  return (
    <div
      className={`${props.className} mt-5 bg-white shadow-md mx-auto shadow-[0, 0, 0.26] max-w-full py-3 px-5 w-[900px] rounded-md`}
    >
      <h1 className="uppercase font-800 text-[18px] text-center mb-3">
        {props.title}
      </h1>
      {props.children}
    </div>
  );
};

export default Card;
