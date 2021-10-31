import React from "react";


export const EventsExample: React.FC = () => {
    const [value, setValue] = React.useState<string>("")
    const [isDrag, setIsDrag] = React.useState<boolean>(false)
    const inputRef = React.useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        // console.log(value)
        console.log(inputRef.current?.value)
    }

    const dragHandle = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("DRAG")
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log("DROP")
    }

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={changeHandler}
                placeholder="control"
            />
            <input
                ref={inputRef}
                type="text"
                onChange={changeHandler}
                placeholder="without control"
            />
            <button
                onClick={clickHandler}
            >
                CLICK
            </button>
            <div
                onDrag={dragHandle}
                draggable
                style={{
                    width: 200,
                    height: 200,
                    background: isDrag ? "green" : "orange"
                }}
            >
            </div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{
                    width: 200,
                    height: 200,
                    background: isDrag ? "blue" : "red",
                    marginTop: 15
                }}
            >
            </div>
        </div>
    )
}