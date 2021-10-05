import React from "react";

const Summator = () => {
  const [firstNumber, changeFirstNumber] = React.useState(0);
  const [secondNumber, changeSecondNumber] = React.useState(0);
  const [thirdNumber, changeThirdNumber] = React.useState(0);

  const firstInput = (e) => {
    changeFirstNumber(e);
    changeThirdNumber(0)
  };

  const secondInput = (e) => {
    changeSecondNumber(e);
    changeThirdNumber(0)
  };

  const buttonClicked = () => {
    changeThirdNumber(Number(firstNumber) + Number(secondNumber));
    changeFirstNumber(0)
    changeSecondNumber(0)
  };

  return (
    <div>
      <input value={firstNumber} onChange={e => firstInput(e.target.value)}/>
      +
      <input value={secondNumber} onChange={e => secondInput(e.target.value)}/>
      <button onClick={buttonClicked}>=</button>
      <input readOnly value={thirdNumber}/>
    </div>
  );
};

export default Summator;