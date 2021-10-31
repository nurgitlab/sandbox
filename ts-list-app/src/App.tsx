import React, {useState} from 'react';
import {Card, CardVariant} from "./Card/Card";
import {UserList} from "./UserList/UserList";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./List/List";
import {UserItem} from "./UserItem/UserItem";
import {TodoItem} from "./TodoItem/TodoItem";
import {EventsExample} from "./EventsExample/EventsExample";


export const App = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [todos, setTodos] = useState<ITodo[]>([])

    React.useEffect(() => {
        fetchUsers()
        fetchTodos()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }


    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10")
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <Card
                width={"200px"}
                height={"400px"}
                variant={CardVariant.outlined}
                onClick={(num) => console.log("PUSHED", num)}
            >
                <button>
                    Push me
                </button>
            </Card>
            <List
                items={users}
                renderItem={
                    (user: IUser) =>
                        <UserItem
                            user={user}
                            key={user.id}
                        />
                }
            />
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
            <EventsExample />
        </div>
    );
}