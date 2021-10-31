import React from "react";
import {IUser} from "../types/types";
import {UserItem} from "../UserItem/UserItem";


interface UserListProps {
    users: IUser[]
}

export const UserList: React.FC<UserListProps> = ({users}) => {
    return (
        <div>
            {users.map(user => {
                return (
                    <UserItem
                        key={user.id}
                        user={user}
                    />
                )
            })}
        </div>
    )
}