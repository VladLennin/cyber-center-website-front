import React, {useContext, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import UserService from "../../service/UserService";
import {log} from "util";
import {Context} from "../../index";
import UserDataRow from "../../components/UserDataRow";
import {IRole} from "../../models/IRole";
import NewsService from "../../service/NewsService";
import PaginationControl from "../../components/PaginationControl";

const UsersPage = () => {

    const [users, setUsers] = useState<any>([])
    const [page, setPage] = useState<number>(1)
    const [limit, setLimit] = useState<number>(8)
    const [countPages, setCountPages] = useState<number>(0)

    const {store} = useContext(Context)


    useEffect(() => {
        UserService.getUsersPaginated(page, limit).then(res => {
            setUsers(res.data)
        })
        UserService.getCountUsers().then(res => {
            setCountPages(Math.ceil(res.data / limit))
            setPage(1)
        })
    }, [])

    useEffect(() => {
        UserService.getUsersPaginated(page, limit).then(res => {
            setUsers(res.data)
        })
    }, [page])

    useEffect(() => {
        UserService.getUsersPaginated(page, limit).then(res => {
            setUsers(res.data)
        })
        UserService.getCountUsers().then(res => {
            setCountPages(Math.ceil(res.data / limit))
            setPage(1)
        })

    }, [limit])


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
            // @ts-ignore
            table.push(
                <div key={users[i].id} className={(colorFlag ? " bg-gray-100 " : " bg-white ")
                    + (counter === 0 && " rounded-t-xl ")
                    + (counter === 2 && " rounded-b-xl ")
                    + " col-span-11 grid grid-cols-custom mx-5 proba-pro-light py-2"
                    + " hover:scale-[1.02] duration-200 hover:shadow-xl hover:cursor-pointer flex items-center"
                }>
                    <UserDataRow counter={counter} user={users[i]}/>

                </div>
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
                            (key !== "password" && key !== "token") && (
                                key === "id" ?
                                    <div key={key} className={"text-center"}>
                                        {key}
                                    </div>
                                    :
                                    <div key={key} className={"text-center col-span-2"}>{key}</div>
                            )
                        ))
                    }
                </div>
                {genTable()}
            </div>
            <PaginationControl countPages={countPages} page={page} setPage={setPage} limit={limit} setLimit={setLimit}/>
        </>


    );
};

export default UsersPage;