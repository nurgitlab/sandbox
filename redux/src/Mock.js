import React from "react";
import { useDispatch } from "react-redux";


export const Mock = () => {
  const dispatch = useDispatch();
  const onClock = () => {
    dispatch ({
      type: "MOSCOW",
    })
    console.log("Pushed")
  }
  return (
    <div
      onClick={onClock}
    >
      MOCK COMPONENT
    </div>
  );
};