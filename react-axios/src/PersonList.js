import React from "react";
import axios from "axios";
import { PERSON_API } from "./consts";
import { useHistory } from "react-router";


export const PersonList = () => {
  const history = useHistory()

  const [persons, setPersons] = React.useState([]);

  const filesfromGit = () => {
    axios.get(PERSON_API)
      .then(response => {
        setPersons(response.data)
      })
      .catch(e => {
        console.error(e.message);
      });
  };

  const openPerson = (id) => {
    history.push(`/user/${id}`)
  }

  const goToNext = () => {
    history.push(`/new`)
  }

  React.useEffect(() => {
    filesfromGit();
  }, []);
  // console.log(infoFromJson)
  return (
    <div>
      <button onClick={goToNext}>NEW -></button>
      <div>
        <ul>
          {persons.map((obj, index) => {
            return (
              <li
                key={index}
                onClick={()=>openPerson(obj._id)}
              >{obj?._id}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};