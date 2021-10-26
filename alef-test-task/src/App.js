import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Preview } from "./Preview/Preview";
import { MainPage } from "./MainPage/MainPage";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
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
    </div>
  );
};
