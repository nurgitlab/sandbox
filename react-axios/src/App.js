import { PersonList } from "./PersonList";
import { CreatePerson } from "./CreatePerson";
import { ClearAllPersons } from "./ClearAllPersons";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Person } from "./Person";


export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={"/"}
          exact={true}
        >
          <div>

            <PersonList/>
          </div>
        </Route>

        <Route
          path={"/user/:userId"}
          render={({
            match: {
              params:{
                userId
              }
            }
                   })=>(
            <Person userId={userId}/>
          )}
        >
        </Route>

        <Route
        path={"/new"}
        >
          <CreatePerson />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

