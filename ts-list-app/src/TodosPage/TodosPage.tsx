import React, {useState} from "react";
import {ITodo, IUser} from "../types/types";
import {TodoItem} from "../TodoItem/TodoItem";
import List from "../List/List";
import axios from "axios";

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10")
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    React.useEffect(() => {
        fetchTodos()
    }, [])

    return (
        <div>
            <List
                items={todos}
                renderItem={
                    (todo: ITodo) =>
                        <TodoItem
                            todo={todo}
                            key={todo.id}
                        />
                }
            />
        </div>
    )
}