import React from "react";
import axios from "axios";
import { PERSON_API } from "./consts";


export const ShowInfoFromServer = () => {
  const [look, setLook] = React.useState([]);


  const filesFromServer = () => {
    axios.get(PERSON_API)
      .then(response => {
        setLook(response.data)
      })
      .catch(e => {
        console.error(e.message);
      });
  };

  React.useEffect(() => {
    filesFromServer();
  }, []);

  return (
    <div>

    </div>
  );
};