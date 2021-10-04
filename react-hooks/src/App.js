import React, { useState } from "react";
import List from "./List";

export const mambaContext = React.createContext();

function App() {
  const seshen = (val) => {
    console.log(val+" mambet")
  }
  
  const [showList, setShowList] = useState(true)
  const [shymkentMode, setShymkentMode] = useState("Nurbek")
  // const dismountComponent = () => setShowList(!showList)
  const dismountComponent = () => {
    return setShowList(!showList)
  }
  const changeState = () => {
    setShymkentMode("ABC")
  }

  const [answer, setNumbers] = useState(228);
  const minusOne = () => {
    setNumbers(answer-1)
  }

  return (
    <mambaContext.Provider value={{
      value: shymkentMode,
      setter: setShymkentMode,
    }}>
      <div className="App">
        <button onClick={dismountComponent}>Dismount</button>
        <button onClick={changeState}>Setter</button>
        {/*<button onClick={plusOne}>PLUS</button>*/}
        <button onClick={minusOne}>MINUS</button>
        {showList && <List />}
        <div>
          {answer}
        </div>
      </div>
    </mambaContext.Provider>
  );
}

export default App;
