import React, {useState} from "react";
import {IUser} from "../types/types";
import axios from "axios";
import {useParams, useHistory} from "react-router-dom";


interface UserItemPageParams {
    id: string;
}

export const UserItemPage: React.FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()

    const history = useHistory()

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    React.useEffect(() => {
        fetchUser()
    }, [])

    const goToUserList = () => {
        history.push("/users")
    }

    return (
        <div>
            <button
                onClick={() => goToUserList()}
            >
                BACK
            </button>
            <h1>{user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city}
            </div>
            <div>
                That's all
            </div>
        </div>
    )
}