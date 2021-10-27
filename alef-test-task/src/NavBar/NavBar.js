import "./NavBar.css";
import { useHistory } from "react-router";

export const NavBar = () => {
  const history = useHistory();
  const formClick = () => {
    history.push("/");
  };
  const previewClick = () => {
    history.push("/preview");
  };
  return (
    <div
      className={"navbar"}
    >
      <div
        className={"nav-buttons"}
      >
        <div
          className={"nav-button"}
          onClick={() => formClick()}
        >
          Форма
        </div>
        <div
          className={"nav-button"}
          onClick={() => previewClick()}
        >
          Превью
        </div>
      </div>
    </div>
  );
};