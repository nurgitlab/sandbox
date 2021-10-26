import React from "react";
import axios from "axios";
import { PERSON_API } from "./consts";
import { useHistory } from "react-router";
import { ClearAllPersons } from "./ClearAllPersons";


export const PersonList = () => {
  const history = useHistory()

  const [persons, setPersons] = React.useState([]);

  const fetchPersons = () => {
    console.log("SSH FETCH IN SSH")
    axios.get(PERSON_API)
      .then(response => {
        setPersons(response.data)
      })
      .catch(e => {
        console.error(e.message);
      });
  }

  React.useEffect(() => {
    fetchPersons()
  }, []);


  const openPerson = (id) => {
    history.push(`/user/${id}`)
  }

  const goToNext = () => {
    history.push(`/new`)
  }


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
                onClick={() => openPerson(obj._id)}
              >
                {obj?._id}
              </li>
            );
          })}
        </ul>
      </div>

      <ClearAllPersons persons={persons} updatePersons={fetchPersons}/>

    </div>
  );
};