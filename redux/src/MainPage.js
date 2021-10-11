import React from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";


export const MainPage = () => {
  const history = useHistory();

  const goToNormalCounter = () => {
    history.push("/normalcounter");
  };

  const goToReduxCounter = () => {
    history.push("/reduxcounter");
  };

  const dispatch = useDispatch()
  const count = useSelector(state => state.counter)

  const reset = () => {
    dispatch({type: "RESET", payload: 0})
  }
  return (
    <div>
      <button onClick={goToNormalCounter}>
        Go to counter on hooks
      </button>
      <button onClick={goToReduxCounter}>
        Go to redux counter
      </button>
      <br/>
      THIS IS MAIN PAGE {count}
      <br />
      <button onClick={reset}>RESET REDUX COUNTER</button>
    </div>
  );
};