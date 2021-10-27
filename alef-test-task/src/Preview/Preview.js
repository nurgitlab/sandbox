import { useSelector } from "react-redux";


export const Preview = () => {
  let user = useSelector(state => state.user);
  let kids = useSelector(state => state.kids);
  return (
    <div>
      This is preview page
      <br/>
      Персональные данные
      <br/>
      <div>
        <span>{`${user.name}, ${user.age} лет`}</span>
      </div>
      <br/>
      Дети
      <br/>
      <ul>
        {kids.map(kid => {
          return (
            <li
              key={kid.id}
            >
              {`${kid.name}, ${kid.age} лет`}
            </li>
          );
        })}
      </ul>

    </div>
  )
}