import React from "react";
import axios from "axios";
import { PERSON_API } from "./consts";


export const PersonList = () => {
  const [persons, setPersons] = React.useState([]);


  const filesfromGit = () => {
    axios.get(PERSON_API)
      .then(response => {
        setPersons(response.data)
      })
      .catch(e => {
        console.error(e.message);
      });
    // try {
    //   const response = await
    //     axios.get(PERSON_API);
    //   setData(response.data);
    // } catch (e) {
    //   setData(e.message);
    // }
  };

  React.useEffect(() => {
    filesfromGit();
  }, []);
  // console.log(infoFromJson)
  return (
    <div>
      <div>
        <ul>
          {persons.map((obj, index) => {
            return (
              <li key={index}>{obj?._id}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};