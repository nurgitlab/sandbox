import React, {useState} from "react";


export const EventsExample: React.FC = () => {
    const [value, setValue] = useState<string>("")

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={changeHandler}
            />
            <button
                onClick={clickHandler}
            >
                CLICK
            </button>
        </div>
    )
}