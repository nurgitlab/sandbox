import React from "react";


export const PeopleAdd = () => {
  const [nameInfo, setNameInfo] = React.useState("");
  const [surnameInfo, setSurnameInfo] = React.useState("");

  const [userInfo, setUserInfo] = React.useState({
    name: "",
    surname: ""
  });

  const inputName = (e) => {
    setNameInfo(e.target.value);
  };

  const inputSurname = (e) => {
    setSurnameInfo(e.target.value);
  };

  const rememberInfo = () => {
    setUserInfo({
      name: nameInfo,
      surname: surnameInfo
    });
    setNameInfo("");
    setSurnameInfo("");
  };

  return (
    <div>
      __________________
      <br/>
      ADD INFO
      <br/>
      <input onChange={e => inputName(e)} value={nameInfo}/>
      <input onChange={e => inputSurname(e)} value={surnameInfo}/>
      <button onClick={rememberInfo}>Add to server</button>

      <br/>
      {nameInfo}
      <br/>
      {surnameInfo}
      <br/>
      {userInfo.name}
      <br/>
      {userInfo.surname}
      <br/>
      __________________
    </div>
  );
};