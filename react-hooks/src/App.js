import React, { useState } from "react";


function App() {
  const [numbers, setNumbers] = React.useState([5, 5]);

  let addNumber = () => {
    const randomNumber = Math.round(Math.random()*100)
    setNumbers([...numbers, randomNumber])
    console.log(numbers)
  };

  return (
    <div className="App">
      <ul>
        {
          numbers.map((number, index) => {
            return (
              <li key={index}>{number}</li>
            );
          })
        }
      </ul>
      <button onClick={addNumber}>New number</button>
    </div>
  );
}

export default App;
