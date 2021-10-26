import React from "react";


export const MainPage = () => {
  const [usersInfo, setUsersInfo] = React.useState({
    name: "",
    surname: "",
    patronymic: "",
    age: "",
  });

  const inputName = (e) => {
    setUsersInfo({
      ...usersInfo,
      name: e.target.value
    });
  };

  const inputSurname = (e) => {
    setUsersInfo({
      ...usersInfo,
      surname: e.target.value
    });
  };

  const inputPatronymic = (e) => {
    setUsersInfo({
      ...usersInfo,
      patronymic: e.target.value
    });
  };

  const inputAge = (e) => {
    setUsersInfo({
      ...usersInfo,
      age: e.target.value
    });
    console.log(e.target.value)
  };

  return (
    <div>
      This is mane Page
      <br/>
      <input
        onChange={e => inputName(e)}
      />
      <br/>
      <input
        onChange={e => inputSurname(e)}
      />
      <br/>
      <input
        onChange={e => inputPatronymic(e)}
      />
      <br/>
      <input
        onChange={e => inputAge(e)}
      />
      <br/>
    </div>
  );
};