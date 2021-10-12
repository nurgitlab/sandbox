import React from "react";
import { useHistory } from "react-router";


export const NormalCounter = ({
                                counter,
                                setCounter,
}) => {
  const history = useHistory();
  // const [counter, setCounter] = React.useState(0);

  const plus = () => {
    setCounter(counter + 1);
  };

  const minus = () => {
    setCounter(counter - 1);
  };

  const backToMain = () => {
    history.push("/");
  };

  return (
    <div>
      <button onClick={backToMain}>Go back to main</button>
      <br />
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      {counter}
    </div>
  );
};