import React from "react";
import { useHistory } from "react-router";
import { createStore } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { render } from "@testing-library/react";

export const ReduxCounter = ({mock}) => {
  const history = useHistory();
  const backToMain = () => {
    history.push("");
  };


  const dispatch = useDispatch();
  const count = useSelector(state => state.counter);

  // console.log(count);
  // console.log("render")
  console.log(mock)

  const plus = () => {
    dispatch({type: "PLUS", payload: 1})
  }
  const minus = () => {
    dispatch({type:"MINUS", payload: 1})
  }

  return (
    <div>
      <button onClick={backToMain}>Go back to main</button>
      <br/>
      Here will be Redux counter
      <br/>
      {count}
      <br/>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
};