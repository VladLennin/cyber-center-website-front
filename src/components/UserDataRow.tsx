import React, {FC} from 'react';
import {log} from "util";
import {IRole} from "../models/IRole";

interface UserProps {
    user: any;
    color: boolean;
    counter: number;
}

const UserDataRow: FC<UserProps> = ({user, color, counter}) => {
    return (
        <div className={(color ? " bg-gray-100 " : " bg-white ")
            + (counter === 0 && " rounded-t-xl ")
            + (counter === 2 && " rounded-b-xl ")
            + " col-span-11 grid grid-cols-custom mx-5 proba-pro-light py-2"
            + " hover:scale-[1.02] duration-200 hover:shadow-xl hover:cursor-pointer flex items-center"
        }>
            {Object.keys(user).map(key => (
                (key !== "password" && key!=="token")
                && (
                    key === "roles"
                        ?
                        <div className={"text-center flex justify-center col-span-2"}>
                            {user['roles'].map((item: IRole) => (
                                <>
                                    {item.value},
                                </>
                            ))}
                        </div>
                        :
                        (
                            key === "id"
                                ?
                                <div className={"text-center"}>
                                    {user[key]}
                                </div>
                                :
                                <div className={"col-span-2 text-center"}>{user[key]}</div>
                        )
                )
            ))}
        </div>
    );
};

export default UserDataRow;