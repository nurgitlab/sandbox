import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Preview } from "./Preview/Preview";
import { MainPage } from "./MainPage/MainPage";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { NavBar } from "./NavBar/NavBar";
import "./App.css"
import { DownBar } from "./DownBar/DownBar";
import { reducer } from "./reducer/reducer";


export const App = () => {
  const store = createStore(reducer);

  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar/>
          <div className={"main-block"}>
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
          </div>
          <DownBar />
        </BrowserRouter>
      </Provider>
    </div>
  );
};
