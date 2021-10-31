import React from "react";
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser
}

export const UserItem: React.FC<UserItemProps> = ({user}) => {
    return (
        <div
            style={{
                padding: 15,
                border: "1px solid red"
            }}
        >
            <div>{user.id}</div>
            <div>Город {user.address.city}</div>
            <div>Имя {user.name}</div>
        </div>
    )
}