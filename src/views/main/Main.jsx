import React, { useState } from "react";
import Result from "../result/Result";
import Register from "../register/Register";

const Main = () => {
  const [data, setData] = useState([]);

  const addRegisterHandler = (userInput) => {
    setData((prevState) => {
      return [...prevState, userInput];
    });
  };
  return (
    <div>
      {data.length === 0 ? (
        <Register onAddRegister={addRegisterHandler} />
      ) : (
        <Result data={data} />
      )}
    </div>
  );
};

export default Main;
