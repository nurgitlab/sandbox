import { useSelector } from "react-redux";
import "./Preview.css"

export const Preview = () => {
  let user = useSelector(state => state.user);
  let kids = useSelector(state => state.kids);
  return (
    <div>
      <div
        className={"title"}
      >
        Персональные данные
      </div>
      <div
        className={"show-users-info"}
      >
        {`${user.name}, ${user.age} лет`}
      </div>
      <div>
        Дети
      </div>
      <br/>
      <div>
        {kids.map(kid => {
          return (
            <div
              key={kid.id}
              className={"kid-block"}
            >
              <div
                className={"show-kid-info"}
              >
                {`${kid.name}, ${kid.age} лет`}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  )
}