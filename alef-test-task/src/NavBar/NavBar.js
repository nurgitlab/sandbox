import { useHistory } from "react-router";

import Logo from "./logo.png"
import "./NavBar.css";


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
        className={"logo"}
      >
        <img
          height={"40px"}
          src={Logo}
        />
      </div>
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
        <div>

        </div>
      </div>

    </div>
  );
};