import React from "react";
import axios from "axios";
import { PERSON_API } from "./consts";

export const ClearAllPersons = () => {

  const deleteFunc = () =>{

  }
  return(
    <div>
      <button onClick={deleteFunc}>DELETE ALL</button>
    </div>
  )
};