import React from "react";
import axios from "axios";
import { PERSON_API, ROOT_API } from "./consts";
import { useHistory } from "react-router";


export const Person = ({userId}) => {
  const history = useHistory()

  const [person, setPerson] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${PERSON_API}/${userId}`)
      .then(response => {
        setPerson(response.data);
      })
      .catch(e => {
        console.error(e.message);
      });
  }, []);
  console.log(person);

  const onDelete = () => {
    axios.delete(`${PERSON_API}/${userId}`)
      .then(res => {
        console.log(res);
        history.push("/")
      });
  };
  // console.log(infoFromJson)
  return (
    <div>
      {person && (
        <div>
          UserInfo
          <button onClick={onDelete}>DELETE</button>
        </div>
      )}
    </div>
  );
};