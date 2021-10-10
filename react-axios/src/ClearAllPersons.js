import React from "react";
import axios from "axios";
import { PERSON_API } from "./consts";
import { useHistory } from "react-router";


export const ClearAllPersons = ({
  persons,
  updatePersons,
}) => {
  const history = useHistory()

  const deleteFunc = () =>{
    persons.map((userId)=>{
      axios.delete(`${PERSON_API}/${userId._id}`)
        .then(res=>{
          // window.location.reload()
          updatePersons()
        })
    })

    // axios.delete(`https://crudcrud.com/api/795f000f8b8f461784208eac750f422a/person/6161cfce97069d03e848e849`)
    //   .then(res=>{
    //     console.log(res)
    //   })
  }
  return(
    <div>
      <button onClick={deleteFunc}>DELETE ALL</button>
    </div>
  )
};