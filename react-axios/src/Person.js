import React from "react";
import axios from "axios";
import { PERSON_API, ROOT_API } from "./consts";
import { useHistory } from "react-router";


export const Person = ({userId}) => {
  const history = useHistory();

  const [person, setPerson] = React.useState(null);
  const [changePerson, setChangePerson] = React.useState({
    name: "",
    age: "",
  });

  React.useEffect(() => {
    axios.get(`${PERSON_API}/${userId}`)
      .then(response => {
        setPerson(response.data);
      })
      .catch(e => {
        console.error(e.message);
      });
  }, []);


  const onDelete = () => {
    axios.delete(`${PERSON_API}/${userId}`)
      .then(res => {
        history.push("/");
      });
  };

  const onUpdate = () => {
    axios.put(`${PERSON_API}/${userId}`, {
      name: changePerson.name,
      age: changePerson.age,
    }).then(() => {
      history.push("/");
    });
  };

  const onName = (e) => {
    setChangePerson({...changePerson, name: e.target.value});
  };

  const onAge = (e) => {
    setChangePerson({...changePerson, age: e.target.value});
  };
  // console.log(infoFromJson)
  return (
    <div>
      {person && (
        <div>
          {console.log(person)}
          UserInfo
          <button onClick={onDelete}>DELETE</button>

          <div>
            UserInfo
            <input defaultValue={person.name} onChange={e => onName(e)}/>
            <input defaultValue={person.age} onChange={e => onAge(e)}/>

            <button onClick={onUpdate}>UPDATE INFO</button>
          </div>

        </div>
      )}
    </div>
  );
};