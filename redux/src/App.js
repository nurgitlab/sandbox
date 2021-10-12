import React from "react";
import { NormalCounter } from "./NormalCounter";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage } from "./MainPage";
import { ReduxCounter } from "./ReduxCounter";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Mock } from "./Mock";

export const App = () => {
  const [counter, setCounter] = React.useState(0);


  const defaultState = {
    counter: 4
  };

  const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case "PLUS":
        return {...state, counter: state.counter + action.payload};
      case "MINUS":
        return {...state, counter: state.counter - action.payload};
      case "RESET":
        return {...state, counter: action.payload};
      case "MOSCOW":
        return {...state};
      default:
        return state;
    }
  };

  const store = createStore(reducer);


  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route
              path={"/"}
              exact={true}
            >

              <MainPage counter={counter}/>

            </Route>

            <Route
              path={"/normalcounter"}
            >
              <NormalCounter counter={counter} setCounter={setCounter}/>
            </Route>

            <Route
              path={"/reduxcounter"}
            >
              <ReduxCounter
                mock={"STROKA ILI CHISLO"}
              />
              <Mock/>
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
};