import React from "react";
import axios from "axios";
import { PERSON_API } from "./consts";
import { useHistory } from "react-router";


export const CreatePerson = () => {
  const history = useHistory()

  const [fromInput, setFromInput] = React.useState("");
  const [list, setList] = React.useState([]);

  const inputFunc = (e) => {
    setFromInput(e.target.value);
  };

  const sendFunc = () => {
    setList([...list, fromInput]);
  };

  const sendToServer = () => {
    axios.post(PERSON_API,{list})
      .then(send=>{
        //window.location.reload()
        history.push("/")
      })

  }

  return (
    <div>
      ____________________
      <div>
        <input onChange={e => inputFunc(e)}/>
        <button onClick={sendFunc}>Send</button>
        {fromInput}
      </div>
      <div>
        <button onClick={sendToServer}>-> On server</button>
      </div>
      <div>
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      ____________________
    </div>
  );
};