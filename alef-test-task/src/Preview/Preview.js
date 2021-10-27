import { useSelector } from "react-redux";
import "./Preview.css"


export const Preview = () => {
  let user = useSelector(state => state.user);
  let kids = useSelector(state => state.kids);

  return (
    <div>
      <div className={"title"}>
        Персональные данные
      </div>

      {(user.name !== "" && user.age !== null) ? (
        <div className={"show-users-info"}>
          {`${user.name}, ${user.age} лет`}
        </div>
      ) : (
        <div className={"error"}>
          Вы не полностью ввели данные о себе!
        </div>
      )}

      <div className={"kid-title"}>
        Дети
      </div>

      <div>
        {kids.map(kid => {
          return (
            <div
              key={kid.id}
              className={"kid-block"}
            >
              <div className={"show-kid-info"}>
                {(kid.name !== "" && kid.age !== "") ? (
                  <div>
                    {`${kid.name}, ${kid.age} лет`}
                  </div>
                ) : (
                  <div>
                    Введите информацию о ребёнке!
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}