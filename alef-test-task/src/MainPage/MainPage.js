import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./MainPage.css";

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

      <div
        className={"title"}
      >
        Персональные данные
      </div>


      <div
        className={"container"}
      >
        <div
          className={"label"}
        >
          Фамилия
        </div>
        <input
          className={"input-style"}
          name={"surname"}
          onChange={e => inputUsersInfo(e)}
          defaultValue={userStorage.surname}
        />
      </div>

      <div
        className={"container"}
      >
        <div
          className={"label"}
        >
          Имя
        </div>
        <input
          className={"input-style"}
          name={"name"}
          onChange={e => inputUsersInfo(e)}
          defaultValue={userStorage.name}
        />
      </div>

      <div
        className={"container"}
      >
        <div
          className={"label"}
        >
          Отчество
        </div>
        <input
          className={"input-style"}
          name={"patronymic"}
          onChange={e => inputUsersInfo(e)}
          defaultValue={userStorage.patronymic}
        />
      </div>

      <div
        className={"container"}
      >
        <div
          className={"label"}
        >
          Возраст
        </div>
        <input
          className={"input-style"}
          name={"age"}
          type={"number"}
          onChange={e => inputUsersInfo(e)}
          defaultValue={userStorage.age}
        />
      </div>

      <br/>
      <button
        onClick={saveToRedux}
      >
        SAVE
      </button>

      <div
        className={"title-down"}
      >
        <div
          className={"title"}
        >
          Дети (макс. 5)
        </div>

        <div
          className={"title-button"}
        >
          {kids.length < 5 ? (
            <div
              className={"king-button"}
              onClick={addKid}
            >
              <div
                className={"plus"}
              >
                +
              </div>
              <div
                className={"add-kid"}
              >
                Добавить ребёнка
              </div>
            </div>
          ) : (
            <div>
            </div>
          )
          }
        </div>
      </div>
      <br/>

      <div>
        {kids.map((kid) => {
          return (
            <div
              key={kid.id}
            >
              <div
                className={"container"}
              >
                <div
                  className={"label"}
                >
                  Имя
                </div>
                <input
                  className={"input-style"}
                  name={"name"}
                  onChange={e => inputKidsInfo(e, kid.id)}
                  defaultValue={kid.name}
                />
              </div>

              <div
                className={"container"}
              >
                <div
                  className={"label"}
                >
                  Возраст
                </div>
                <input
                  className={"input-style"}
                  name={"age"}
                  type={"number"}
                  onChange={e => inputKidsInfo(e, kid.id)}
                  defaultValue={kid.age}
                />
              </div>

              <button
                onClick={() => removeKid(kid.id)}
              >
                DELETE
              </button>
            </div>
          );
        })}
      </div>

    </div>
  );
};