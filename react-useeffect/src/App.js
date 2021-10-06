import React from "react";

function App() {
  const [name, changeName] = React.useState("");
  const giveName = (e) => {
    changeName(e);
  };
  const [counter, changeCounter] = React.useState(0);

  const plusOne = () => {
    changeCounter(counter + 1);
  };

  React.useEffect(()=>{
    console.log("Changed in: ", new Date().toISOString())
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }, [])

  return (
    <div>
      <div>
        <label>Name</label>
        <input onChange={e => giveName(e.target.value)}/>
        {name}
      </div>
      <div>
        <button onClick={plusOne}>PLUS ONE</button>
        {counter}
      </div>
    </div>
  );
}

export default App;
