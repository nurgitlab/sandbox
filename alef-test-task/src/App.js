import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Preview } from "./Preview/Preview";
import { MainPage } from "./MainPage/MainPage";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { NavBar } from "./NavBar/NavBar";


export const App = () => {
  const defaultState = {
    user: {
      name: "",
      surname: "",
      patronymic: "",
      age: null,
    },
    kids: [],
  };
  const reducer = (state = defaultState, action) => {
    if (action.type === "ADD_TO_REDUX") {
      return {
        ...state,
        user: action.usersInfo,
        kids: action.kidsInfo,
      };
    } else {
      return state;
    }
  };

  const store = createStore(reducer);
  return (
    <div>
      <Provider
        store={store}
      >
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route
              path={"/"}
              exact={true}
            >
              <MainPage/>
            </Route>

            <Route
              path={"/preview"}
              exact={true}
            >
              <Preview/>
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
};
