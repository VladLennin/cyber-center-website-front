import React, {FC, useContext, useState} from 'react';
import {MilitaryRanks} from "../models/enum/MilitaryRanks";
import {IUser} from "../models/IUser";
import {ShipRanks} from "../models/enum/ShipRanks";
import {Context} from "../index";
import {IToast} from "../models/IToast";
import {ToastTypes} from "../models/enum/ToastTypes";
import {Roles} from "../models/enum/Roles";
import {IRole} from "../models/IRole";
import {useNavigate} from "react-router-dom";
import {RoutesName} from "../router/RoutesName";

const RegistrationPage: FC = () => {


    const [newUser, setNewUser] = useState<IUser>({roles: [{value: Roles.USER} as IRole]} as IUser)
    const [controlPassword, setControlPassword] = useState<string>("")
    const [isShipsRank, setIsShipsRank] = useState<boolean>(false)
    const {store} = useContext(Context)
    const navigate = useNavigate()


    const registration = () => {
        if (newUser.email &&
            newUser.name &&
            newUser.rank &&
            newUser.surname &&
            newUser.fatherhood &&
            newUser.contactNumber &&
            newUser.unit &&
            newUser.password
        ) {
            if (controlPassword === newUser.password) {
                store.registration(newUser).then((res) => {
                    store.addToast({content: "Рєестрація успішна", type: ToastTypes.Successful} as IToast)
                    navigate(RoutesName.MAIN_PAGE)
                }).catch(err => {
                    store.addToast({content: err.response.data.message, type: ToastTypes.Error} as IToast)
                })
            } else {
                store.addToast({content: "Паролі не співпадають", type: ToastTypes.Warning} as IToast)
            }
        } else {
            store.addToast({content: "Якесь поле залишилось пустим", type: ToastTypes.Warning} as IToast)
        }
    }

    return (
        <div className={"flex justify-center items-center flex-col mt-4 mb-10"}>
            <div className={"proba-pro-bold text-[6vh]"}>
                Реєстрація
            </div>
            <div className={"border p-10 rounded proba-pro-medium shadow-2xl"}>
                <div className={"flex mb-4 justify-between"}>
                    <p className={"text-lg"}>Email</p>
                    <input onChange={(e) => {
                        setNewUser({...newUser, email: e.target.value})
                    }
                    } className={"border px-2 py-1 rounded"} placeholder={"Email"} type="email"/>
                </div>

                <div className={"flex justify-between mb-4"}>
                    <div>
                        <input onChange={(e) => {
                            setNewUser({...newUser, password: e.target.value})
                        }} className={"border px-2 py-1 rounded mr-2"} placeholder={"Пароль"} type="password"/>
                    </div>

                    <div>
                        <input onChange={(e) => {
                            setControlPassword(e.target.value)
                        }} className={"border px-2 py-1 rounded ml-2"} placeholder={"Повторіть"} type="password"/>
                    </div>
                </div>

                <div className={"h-[1.5px] bg-gray-600 px-10 mb-5"}></div>

                <div>
                    <div className={"flex proba-pro-light text-gray-600 justify-around mb-3"}>
                        <div className={"flex items-center"}>
                            <input onChange={() => setIsShipsRank(false)} checked={!isShipsRank} className={"mr-1"}
                                   id={"ranks"} name={"ranks"} type="radio"/><p>Армійські звання</p>
                        </div>

                        <div className={"flex items-center"}>
                            <input onChange={() => setIsShipsRank(true)} checked={isShipsRank} className={"mr-1"}
                                   id={"ranks"} name={"ranks"} type="radio"/><p>Корабельні звання</p>

                        </div>
                    </div>
                    {isShipsRank
                        ?
                        <select onChange={(e) => {
                            setNewUser({...newUser, rank: Object.values(ShipRanks)[Number(e.target.value)]})
                        }}
                                className={"mb-4 px-2 py-1 rounded text-lg w-[100%]"} defaultValue={-1}>
                            <option disabled={true} value={-1}>Виберіть військове звання</option>
                            {Object.values(ShipRanks).map((rank, index) => (
                                <option key={index} value={index}>{rank}</option>
                            ))}

                        </select>
                        :
                        <select onChange={(e) => {
                            setNewUser({...newUser, rank: Object.values(MilitaryRanks)[Number(e.target.value)]})
                        }}
                                className={"mb-4 px-2 py-1 rounded text-lg w-[100%]"} defaultValue={-1}>
                            <option disabled={true} value={-1}>Виберіть військове звання</option>
                            {Object.values(MilitaryRanks).map((rank, index) => (
                                <option key={index} value={index}>{rank}</option>
                            ))}

                        </select>}

                </div>

                <div className={"h-[1.5px] bg-gray-600 px-10 mb-5"}></div>

                <div className={"flex justify-between mb-2 items-center"}>
                    <p>Прізвище</p>
                    <input onChange={(e) => {
                        setNewUser({...newUser, surname: e.target.value})
                    }
                    } className={"border px-2 py-1 rounded"} placeholder={"Прізвище"} type="text"/>
                </div>

                <div className={"flex justify-between mb-2 items-center"}>
                    <p>Імʼя</p>
                    <input onChange={(e) => {
                        setNewUser({...newUser, name: e.target.value})
                    }
                    } className={"border px-2 py-1 rounded"} placeholder={"Імʼя"} type="text"/>
                </div>

                <div className={"flex justify-between mb-2 items-center"}>
                    <p>Побатькові</p>
                    <input onChange={(e) => {
                        setNewUser({...newUser, fatherhood: e.target.value})
                    }
                    } className={"border px-2 py-1 rounded"} placeholder={"Побатькові"} type="text"/>
                </div>

                <div className={"h-[1.5px] bg-gray-600 px-10 mb-5"}></div>


                <div className={"flex mb-4 justify-between items-center"}>
                    <p className={"mr-3"}>Контактний номер</p>
                    <input onChange={(e) => {
                        setNewUser({...newUser, contactNumber: e.target.value})
                    }
                    } placeholder={"00000000"} className={"border ml-1 rounded px-2 py-1"} type="text"/>
                </div>

                <div className={"mb-4 flex justify-between items-center"}>
                    <p>Найменування підрозділу</p>
                    <input onChange={(e) => {
                        setNewUser({...newUser, unit: e.target.value})
                    }
                    } className={"border rounded px-2 py-1 ml-2"} placeholder={"A0000"} type="text"/>
                </div>

                <div className={"flex flex-col justify-center mt-2 items-center"}>
                    <button onClick={registration}
                            className={"bg-[#444C37] text-white px-3 py-2 rounded-[150px] hover:text-[#AF8742] duration-200"}>
                        Зареєструватись
                    </button>
                    <button onClick={() => store.openModalLogin()} className={"mt-1 text-sm"}>Маєте профіль?</button>
                </div>

            </div>

        </div>
    );
};

export default RegistrationPage;