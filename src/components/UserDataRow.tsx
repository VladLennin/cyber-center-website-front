import React, {FC} from 'react';
import {IRole} from "../models/IRole";

interface UserProps {
    user: any;
    counter: number;
}

const UserDataRow: FC<UserProps> = ({user, counter}) => {
    return (
        <>
            {Object.keys(user).map(key => (
                (key !== "password" && key !== "token")
                &&
                (
                    key === "roles"
                        ?

                        <div key={user.id} className={"text-center flex justify-center col-span-2"}>
                            {user['roles'].map((item: IRole) => (
                                <p key={item.value}>
                                    {item.value},
                                </p>
                            ))}
                        </div>
                        :
                        (
                            key === "id"
                                ?
                                <div key={key} className={"text-center"}>
                                    {user[key]}
                                </div>
                                :
                                <div key={key} className={"col-span-2 text-center"}>{user[key]}</div>
                        )
                )
            ))}
        </>
    );
};

export default UserDataRow;