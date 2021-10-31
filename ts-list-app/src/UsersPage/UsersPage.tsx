import React, {useState} from "react";
import {ITodo, IUser} from "../types/types";
import List from "../List/List";
import {UserItem} from "../UserItem/UserItem";
import axios from "axios";
import {useHistory} from "react-router-dom";

export const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const history = useHistory()

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    React.useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            <List
                items={users}
                renderItem={
                    (user: IUser) =>
                        <UserItem
                            onClick={(user) => history.push(`/user/${user.id}`)}
                            user={user}
                            key={user.id}
                        />
                }
            />
        </div>
    )
}