import React, {useContext, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import UserService from "../../service/UserService";
import {log} from "util";
import {Context} from "../../index";
import UserDataRow from "../../components/UserDataRow";

const UsersPage = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const {store} = useContext(Context)
    useEffect(() => {
        UserService.fetchUsers().then(res => {
            setUsers(res.data)
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const someFunc = () => {
        console.log(Object.keys(users[0]))
    }

    const genTable = () => {
        let table = []
        let counter = -1
        let colorFlag = false
        for (let i = 0; i < users.length; i++) {
            if (counter !== 2) {
                counter++
            } else {
                colorFlag = !colorFlag
                counter = 0
            }

            table.push(
                <UserDataRow counter={counter} color={colorFlag} key={users[i].id} user={users[i]}/>
            )
        }
        return table
    }

    return (
        <>
            <p className={" text-center proba-pro-bold text-[6vh] mb-10"}>База користувачів
                <i className="bi bi-database ml-4"></i>
            </p>
            <div className={" grid grid-cols-11  mb-10"}>
                <div
                    className={"col-span-11 grid grid-cols-custom bg-gray-100 mb-4 rounded mx-5 py-2 proba-pro-medium text-xl"}>
                    {users[0] !== undefined &&
                        Object.keys(users[0]).map(key => (
                            key !== "password" && (
                                key === "id" ?
                                    <div className={"text-center"}>
                                        {key}
                                    </div>
                                    :
                                    <div className={"text-center col-span-2"}>{key}</div>
                            )
                        ))
                    }
                </div>
                {genTable()}
            </div>
        </>

    );
};

export default UsersPage;