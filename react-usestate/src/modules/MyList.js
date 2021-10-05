import React from "react"

const MyList = () => {
  const [words,changeWords] = React.useState(["Lion","Puma"])

  const [inputWord,change] = React.useState("")

  const addWord = () =>{
    changeWords([...words,inputWord])
    change("")
  }

  const inputChange = (e) => {
    change(e)
  }

  const deleteWord = () => {
    words.splice(-1,1)
    changeWords([...words])
  }

  return(
    <div>
      <input
        value={inputWord}
        onChange={e => {inputChange(e.target.value)}}
      />
      <button onClick={addWord}>PUSH ELEMENT IN ARRAY</button>
      <button onClick={deleteWord}>DELETE LAST</button>
      <ul>
        {words.map((word,index)=>{
          return(
              <li key={index}>
                {word}
              </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MyList