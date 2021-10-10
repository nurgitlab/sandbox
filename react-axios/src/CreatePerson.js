import React from "react";
import axios from "axios";
import { PERSON_API } from "./consts";
import { useHistory } from "react-router";


export const CreatePerson = () => {
  const history = useHistory();

  const [newPerson, setNewPerson] = React.useState({
    name: "",
    age: "",
  });


  const inputName = (e) => {
    setNewPerson({
      ...newPerson,
      name: e.target.value,
    });
  };

  const inputAge = (e) => {
    setNewPerson({
      ...newPerson,
      age: e.target.value,
    });
  };



  const createPerson = () => {
    axios.post(PERSON_API,{...newPerson})
      .then(send=>{
        //window.location.reload()
        history.push("/")
      })

  }

  return (
    <div>

      <div>
        <input onChange={e => inputName(e)} value={newPerson.name ? newPerson.name : ""}/>
        <input onChange={e => inputAge(e)} value={newPerson.age ? newPerson.age: ""}/>
      </div>

      <button onClick={createPerson}>CREATE PERSON</button>

    </div>
  );
};