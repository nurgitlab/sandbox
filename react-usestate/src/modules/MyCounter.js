import React from "react";

const MyCounter = () => {
  const [number, changeNumber] = React.useState(0)

  const plusOne = () => {
    changeNumber(number+1)
  }

  const minusOne = () => {
    changeNumber(number-1)
  }

  return (
    <div>
      <button onClick={plusOne}>PLUS</button>
      <button onClick={minusOne}>MINUS</button>
      {number}
    </div>
  );
};

export default MyCounter;

