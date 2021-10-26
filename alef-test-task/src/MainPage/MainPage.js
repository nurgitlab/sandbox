import React from "react";
import { v4 as uuidv4 } from 'uuid';


export const MainPage = () => {
  const [usersInfo, setUsersInfo] = React.useState({
    name: "",
    surname: "",
    patronymic: "",
    age: "",
  });

  const inputUsersInfo = (e) => {
    setUsersInfo({
      ...usersInfo,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(usersInfo);

  const [kids, setKids] = React.useState([]);

  const addKid = () => {
    let kid = {
      id: uuidv4(),
      name: "",
      age: "",
    };
    setKids([...kids, kid]);
  };

  const inputKidsInfo = (e, index) => {
    let itemsId = kids.indexOf(kids.find(kid => kid.id === index));
    let getKids = kids;

    getKids[itemsId] = {
      ...getKids[itemsId],
      [e.target.name]: e.target.value,
    };
    setKids(getKids);
  };

  const removeKid = (index) => {
    let getChilds = [];
    kids.map(kid => {
      if (kid.id !== index) {
        getChilds.push(kid);
        console.log(getChilds);
      }
    });
    setKids(getChilds);
  };

  // console.log(kids);

  return (
    <div>
      This is mane Page
      <br/>
      <input
        name={"name"}
        onChange={e => inputUsersInfo(e)}
      />
      <br/>
      <input
        name={"surname"}
        onChange={e => inputUsersInfo(e)}
      />
      <br/>
      <input
        name={"patronymic"}
        onChange={e => inputUsersInfo(e)}
      />
      <br/>
      <input
        name={"age"}
        type={"number"}
        onChange={e => inputUsersInfo(e)}
      />
      <br/>
      Дети (макс 5)
      <br/>

      {kids.length < 5 ? (
        <div>
          <button
            onClick={addKid}
          >
            ADD KID
          </button>
        </div>
      ) : (
        <div>
          OOPS)
        </div>
      )
      }
      <br/>

      <ul>
        {kids.map((kid) => {
          return (
            <li
              key={kid.id}
            >
              <input
                name={"name"}
                onChange={e => inputKidsInfo(e, kid.id)}
              />
              <input
                name={"age"}
                type={"number"}
                onChange={e => inputKidsInfo(e, kid.id)}
              />
              <button
                onClick={() => removeKid(kid.id)}
              >
                DELETE
              </button>
            </li>
          );
        })}
      </ul>

    </div>
  );
};