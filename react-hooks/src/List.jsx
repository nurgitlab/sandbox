import React, {useState, useContext} from "react"
import { mambaContext } from "./App";

const List = () => {
  const [numbers, setNumbers] = useState([5, 5]);
  const mambaKeldi = useContext(mambaContext)

  let deleteLastNumber = () => {
    numbers.splice(numbers.length - 1, 1);
    setNumbers([...numbers]);
    console.log(numbers);
  };

  let addNumber = () => {
    const randomNumber = Math.round(Math.random() * 100);
    setNumbers([...numbers, randomNumber]);
    console.log([...numbers, randomNumber]);
  };

  const rageMode = () => {
    mambaKeldi.setter("Temirlan")
  }

  React.useEffect(()=>{
    console.log("Компонент был отображён")
    return()=>console.log("DISMOUNT")
  },[numbers[1]])

  console.log(mambaKeldi.value)

  return (
    <div>
      <button onClick={addNumber}>New number</button>
      <button onClick={rageMode}>Rage Mode</button>
      <button onClick={deleteLastNumber}>Delete last number</button>
      <ul>
        {
          numbers.map((number, index) => {
            return (
              <li key={index}>{number}</li>
            );
          })
        }
      </ul>
    </div>
  )
}

export default List