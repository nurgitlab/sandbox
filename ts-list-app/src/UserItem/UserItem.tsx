import React from "react";
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser
    onClick: (user: IUser) => void
}

export const UserItem: React.FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div
            onClick={()=>onClick(user)}
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