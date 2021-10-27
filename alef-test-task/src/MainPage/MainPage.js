import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";


export const MainPage = () => {
  const history = useHistory();

  const userStorage = useSelector(state => state.user);
  const kidsStorage = useSelector(state => state.kids);

  const [usersInfo, setUsersInfo] = React.useState({
    name: userStorage.name,
    surname: userStorage.surname,
    patronymic: userStorage.patronymic,
    age: userStorage.age,
  });

  const inputUsersInfo = (e) => {
    setUsersInfo({
      ...usersInfo,
      [e.target.name]: e.target.value,
    });
  };

  const [kids, setKids] = React.useState(kidsStorage);

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
      }
    });
    setKids(getChilds);
  };

  const dispatch = useDispatch();

  const saveToRedux = () => {
    dispatch({
        type: "ADD_TO_REDUX",
        usersInfo: usersInfo,
        kidsInfo: kids,
      }
    );
    history.push("/preview");
  };


  return (
    <div>
      This is mane Page
      <br/>
      <input
        name={"name"}
        onChange={e => inputUsersInfo(e)}
        defaultValue={userStorage.name}
      />
      <br/>
      <input
        name={"surname"}
        onChange={e => inputUsersInfo(e)}
        defaultValue={userStorage.surname}
      />
      <br/>
      <input
        name={"patronymic"}
        onChange={e => inputUsersInfo(e)}
        defaultValue={userStorage.patronymic}
      />
      <br/>
      <input
        name={"age"}
        type={"number"}
        onChange={e => inputUsersInfo(e)}
        defaultValue={userStorage.age}
      />
      <br/>
      <button
        onClick={saveToRedux}
      >
        SAVE
      </button>
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
                defaultValue={kid.name}
              />
              <input
                name={"age"}
                type={"number"}
                onChange={e => inputKidsInfo(e, kid.id)}
                defaultValue={kid.age}
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