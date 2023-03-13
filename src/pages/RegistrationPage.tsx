import React, {FC, useContext, useEffect, useState} from 'react';
import {MilitaryRank} from "../models/enum/MilitaryRank";
import {IUser} from "../models/IUser";
import {ShipRanks} from "../models/enum/ShipRanks";
import {Context} from "../index";

const RegistrationPage:FC = () => {


    const [newUser, setNewUser] = useState<IUser>({} as IUser)
    const [controlPassword, setControlPassword] = useState<string>("")
    const [isShipsRank, setIsShipsRank] = useState<boolean>(false)
    const [errors, setErrors] = useState<string[]>([])
    const {store} = useContext(Context)

    const registration = () => {
        if (newUser.email &&
            newUser.name &&
            newUser.rank &&
            newUser.surname &&
            newUser.fatherhood &&
            newUser.contactNumber &&
            newUser.ipAddress &&
            newUser.unit &&
            newUser.password
        ) {
            if (controlPassword === newUser.password) {
                console.log(newUser)
                store.registration(newUser).then((res: any) => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                    setErrors([...errors, err.response.data.message])
                })
            } else {
                setErrors([...errors, "Паролі не співпадають"])
            }
        } else {
            setErrors([...errors, "Якесь поле залишилось пустим"])
        }
    }

    useEffect(() => {
        setNewUser({...newUser, ipAddress: "127.0.0.1"})

    }, [])
    useEffect(() => {
        setErrors([])
    }, [newUser])
    return (
        <div className={"flex justify-center items-center flex-col mt-4 mb-10"}>
            <div className={"proba-pro-bold text-[6vh]"}>
                Реєстрація
            </div>
            <div className={"border p-10 rounded proba-pro-medium shadow-2xl"}>
                {errors.length > 0 &&
                    <div className={"mb-5 text-red-800 flex justify-center"}>
                        {errors.map(err => (
                                <div className={"flex items-center border px-3 py-1 border-red-800 rounded"}>
                                    <p>{err}</p>
                                    <i className="bi bi-exclamation-triangle-fill ml-2"></i>
                                </div>

                            )
                        )}
                    </div>
                }


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
                        <div className={"flex"}>
                            <input onChange={() => setIsShipsRank(false)} checked={!isShipsRank} className={"mr-1"}
                                   id={"ranks"} name={"ranks"} type="radio"/><p>Армійські звання</p>
                        </div>

                        <div className={"flex"}>
                            <input onChange={() => setIsShipsRank(true)} checked={isShipsRank} className={"mr-1"}
                                   id={"ranks"} name={"ranks"} type="radio"/><p>Корабельні звання</p>

                        </div>
                    </div>
                    <div className={"flex"}>
                    </div>
                    {isShipsRank
                        ?
                        <select onChange={(e) => {
                            setNewUser({...newUser, rank: Object.values(ShipRanks)[Number(e.target.value)]})
                        }}
                                className={"mb-4 px-2 py-1 rounded text-lg w-[100%]"} defaultValue={-1}>
                            <option disabled={true} value={-1}>Виберіть військове звання</option>
                            {Object.values(ShipRanks).map((rank, index) => (
                                <option value={index}>{rank}</option>
                            ))}

                        </select>
                        :
                        <select onChange={(e) => {
                            setNewUser({...newUser, rank: Object.values(MilitaryRank)[Number(e.target.value)]})
                        }}
                                className={"mb-4 px-2 py-1 rounded text-lg w-[100%]"} defaultValue={-1}>
                            <option disabled={true} value={-1}>Виберіть військове звання</option>
                            {Object.values(MilitaryRank).map((rank, index) => (
                                <option value={index}>{rank}</option>
                            ))}

                        </select>}

                </div>

                <div className={"h-[1.5px] bg-gray-600 px-10 mb-5"}></div>

                <div className={"flex justify-between mb-2"}>
                    <p>Прізвище</p>
                    <input onChange={(e) => {
                        setNewUser({...newUser, surname: e.target.value})
                    }
                    } className={"border px-2 py-1 "} placeholder={"Прізвище"} type="text"/>
                </div>

                <div className={"flex justify-between mb-2"}>
                    <p>Імʼя</p>
                    <input onChange={(e) => {
                        setNewUser({...newUser, name: e.target.value})
                    }
                    } className={"border px-2 py-1 "} placeholder={"Імʼя"} type="text"/>
                </div>

                <div className={"flex justify-between mb-2"}>
                    <p>Побатькові</p>
                    <input onChange={(e) => {
                        setNewUser({...newUser, fatherhood: e.target.value})
                    }
                    } className={"border px-2 py-1 "} placeholder={"Побатькові"} type="text"/>
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

                <div className={"flex justify-center mt-2"}>
                    <button onClick={registration}
                            className={"bg-[#444C37] text-white px-3 py-2 rounded-[150px] hover:text-[#AF8742] duration-200"}>
                        Зареєструватись
                    </button>
                </div>

            </div>

        </div>
    );
};

export default RegistrationPage;