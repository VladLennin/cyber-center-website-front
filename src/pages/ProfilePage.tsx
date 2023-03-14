import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {IUser} from "../models/IUser";
import {ShipRanks} from "../models/enum/ShipRanks";
import {MilitaryRanks} from "../models/enum/MilitaryRanks";
import {observer} from "mobx-react-lite";
import {observe} from "mobx";
import BackToMainBtn from "../components/BackToMainBtn";

const ProfilePage = () => {


    const {store} = useContext(Context)
    const [newUser, setNewUser] = useState<IUser>(store.user)
    const [isShipsRank, setIsShipsRank] = useState<boolean>(false)
    const [errors, setErrors] = useState<string[]>([])
    const [flags, setFlags] = useState({
        email: false,
        rank: false,
        surname: false,
        name: false,
        fatherhood: false,
        contactNumber: false,
        unit: false
    })


    return (
        <>
            <div className={"flex justify-start items-center min-h-[77vh] flex-col proba-pro-medium"}>
                <p className={"proba-pro-bold text-[6vh]"}>Профіль</p>
                <div className={"border rounded shadow p-10 "}>
                    {errors.length > 0 &&
                        <div className={"mb-5 text-red-800 flex flex-col justify-center"}>
                            {errors.map((err, index) => (
                                    <div key={index}
                                         className={"flex items-center border px-3 py-1 border-red-800 rounded mb-2"}>
                                        <button onClick={() => {
                                            setErrors([])
                                        }} className={"flex"}>
                                            <p>{err}</p>
                                            <i className="bi bi-exclamation-triangle-fill ml-2"></i>
                                        </button>
                                    </div>

                                )
                            )}
                        </div>
                    }
                    <div className={"grid mb-4 grid-cols-2  "}>
                        <p className={"text-lg"}>Email</p>

                        {flags.email
                            ?
                            <div className={"flex"}>
                                <input onChange={(e) => {
                                    setNewUser({...newUser, email: e.target.value})
                                }
                                } value={newUser.email} className={"border px-2 py-1 rounded"} placeholder={"Email"}
                                       type="email"/>
                                <button onClick={() => {
                                    if (newUser.email !== store.user.email) {
                                        store.editUser("email", newUser.email).then(res => {
                                        }).catch(e => {
                                            if (e) {
                                                setErrors([...errors, e.response.data.message])
                                                setNewUser(store.user)
                                            }
                                        })
                                    }

                                    setFlags({...flags, email: false})
                                }}>
                                    <i className="bi bi-check2 ml-2"></i>
                                </button>
                            </div>

                            :
                            <div className={"flex"}>
                                <p>
                                    {newUser.email}
                                </p>
                                <button onClick={() => {
                                    setFlags({...flags, email: true})
                                }}>
                                    <i className="bi bi-pencil-square ml-2"></i>
                                </button>
                            </div>
                        }
                    </div>

                    <div>

                        {flags.rank
                            ?
                            <>
                                <div className={"flex proba-pro-light text-gray-600 justify-around mb-3"}>
                                    <div className={"flex items-center"}>
                                        <input onChange={() => setIsShipsRank(false)} checked={!isShipsRank}
                                               className={"mr-1"}
                                               id={"ranks"} name={"ranks"} type="radio"/><p>Армійські звання</p>
                                    </div>

                                    <div className={"flex items-center"}>
                                        <input onChange={() => setIsShipsRank(true)} checked={isShipsRank}
                                               className={"mr-1"}
                                               id={"ranks"} name={"ranks"} type="radio"/><p>Корабельні звання</p>

                                    </div>
                                </div>
                                {
                                    isShipsRank
                                        ?
                                        <div className={"flex "}>
                                            <select onChange={(e) => {
                                                setNewUser({
                                                    ...newUser,
                                                    rank: Object.values(ShipRanks)[Number(e.target.value)]
                                                })
                                            }}
                                                    className={"mb-4 px-2 py-1 rounded text-lg w-[100%]"}
                                                    defaultValue={-1}>
                                                <option disabled={true} value={-1}>Виберіть військове звання</option>
                                                {Object.values(ShipRanks).map((rank, index) => (
                                                    <option key={index} value={index}>{rank}</option>
                                                ))}

                                            </select>
                                            <button className={"flex items-center mb-3"} onClick={() => {
                                                store.editUser("rank", newUser.rank).then(res => {
                                                    console.log(res)
                                                }).catch(e => {
                                                    console.log(e)
                                                })
                                                setFlags({...flags, rank: false})
                                            }}>
                                                <i className="bi bi-check2 ml-2"></i>
                                            </button>
                                        </div>
                                        :
                                        <div className={"flex items-center "}>
                                            <select onChange={(e) => {
                                                setNewUser({
                                                    ...newUser,
                                                    rank: Object.values(MilitaryRanks)[Number(e.target.value)]
                                                })
                                            }}
                                                    className={"mb-4 px-2 py-1 rounded text-lg w-[100%]"}
                                                    defaultValue={-1}>
                                                <option disabled={true} value={-1}>Виберіть військове звання</option>
                                                {Object.values(MilitaryRanks).map((rank, index) => (
                                                    <option key={index} value={index}>{rank}</option>
                                                ))}

                                            </select>
                                            <button className={"flex items-center mb-3"} onClick={() => {
                                                store.editUser("rank", newUser.rank).then(res => {
                                                    console.log(res)
                                                }).catch(e => {
                                                    console.log(e)
                                                })
                                                setFlags({...flags, rank: false})
                                            }}>
                                                <i className="bi bi-check2 ml-2"></i>
                                            </button>
                                        </div>
                                }

                            </>
                            :
                            <div className={"grid grid-cols-2 mb-4"}>
                                <p className={"text-lg"}>Звання</p>
                                <div className={"flex"}>
                                    <p>
                                        {newUser.rank}
                                    </p>
                                    <button onClick={() => {
                                        setFlags({...flags, rank: true})
                                    }}>
                                        <i className="bi bi-pencil-square ml-2"></i>
                                    </button>
                                </div>
                            </div>
                        }


                    </div>

                    <div className={"h-[1.5px] bg-gray-600 px-10 mb-5"}></div>

                    <div className={"grid mb-4 grid-cols-2  "}>
                        <p className={"text-lg"}>Прізвище</p>
                        {flags.surname
                            ?
                            <div className={"flex"}>
                                <input onChange={(e) => {
                                    setNewUser({...newUser, surname: e.target.value})
                                }
                                } value={newUser.surname} className={"border px-2 py-1 rounded"}
                                       placeholder={"Прізвище"}
                                       type="text"/>
                                <button onClick={() => {
                                    store.editUser("surname", newUser.surname).then(res => {
                                        console.log(res)
                                    }).catch(e => {
                                        console.log(e)
                                    })
                                    setFlags({...flags, surname: false})
                                }}>
                                    <i className="bi bi-check2 ml-2"></i>
                                </button>
                            </div>
                            :
                            <div className={"flex"}>
                                <p>
                                    {newUser.surname}
                                </p>
                                <button onClick={() => {
                                    setFlags({...flags, surname: true})
                                }}>
                                    <i className="bi bi-pencil-square ml-2"></i>
                                </button>
                            </div>
                        }
                    </div>

                    <div className={"grid mb-4 grid-cols-2  "}>
                        <p className={"text-lg"}>Імʼя</p>
                        {flags.name
                            ?
                            <div className={"flex"}>
                                <input onChange={(e) => {
                                    setNewUser({...newUser, name: e.target.value})
                                }
                                } value={newUser.name} className={"border px-2 py-1 rounded"} placeholder={"Імʼя"}
                                       type="text"/>
                                <button onClick={() => {
                                    store.editUser("name", newUser.name).then(res => {
                                        console.log(res)
                                    }).catch(e => {
                                        console.log(e)
                                    })
                                    setFlags({...flags, name: false})
                                }}>
                                    <i className="bi bi-check2 ml-2"></i>
                                </button>
                            </div>
                            :
                            <div className={"flex"}>
                                <p>
                                    {newUser.name}
                                </p>
                                <button onClick={() => {
                                    setFlags({...flags, name: true})
                                }}>
                                    <i className="bi bi-pencil-square ml-2"></i>
                                </button>
                            </div>
                        }
                    </div>

                    <div className={"grid mb-4 grid-cols-2  "}>
                        <p className={"text-lg"}>Побатькові</p>
                        {flags.fatherhood
                            ?
                            <div className={"flex"}>
                                <input onChange={(e) => {
                                    setNewUser({...newUser, fatherhood: e.target.value})
                                }
                                } value={newUser.fatherhood} className={"border px-2 py-1 rounded"}
                                       placeholder={"Побатькові"}
                                       type="text"/>
                                <button onClick={() => {
                                    store.editUser("fatherhood", newUser.fatherhood).then(res => {
                                        console.log(res)
                                    }).catch(e => {
                                        console.log(e)
                                    })
                                    setFlags({...flags, fatherhood: false})
                                }}>
                                    <i className="bi bi-check2 ml-2"></i>
                                </button>
                            </div>
                            :
                            <div className={"flex"}>
                                <p>
                                    {newUser.fatherhood}
                                </p>
                                <button onClick={() => {
                                    setFlags({...flags, fatherhood: true})
                                }}>
                                    <i className="bi bi-pencil-square ml-2"></i>
                                </button>
                            </div>
                        }
                    </div>

                    <div className={"h-[1.5px] bg-gray-600 px-10 mb-5"}></div>

                    <div className={"grid mb-4 grid-cols-2 justify-between"}>
                        <p className={"text-lg"}>Контактний номер</p>
                        {flags.contactNumber
                            ?
                            <div className={"flex"}>
                                <input onChange={(e) => {
                                    setNewUser({...newUser, contactNumber: e.target.value})
                                }
                                } value={newUser.contactNumber} className={"border px-2 py-1 rounded"}
                                       placeholder={"Контактний номер"}
                                       type="text"/>
                                <button onClick={() => {
                                    store.editUser("contactNumber", newUser.contactNumber).then(res => {
                                        console.log(res)
                                    }).catch(e => {
                                        console.log(e)
                                    })
                                    setFlags({...flags, contactNumber: false})
                                }}>
                                    <i className="bi bi-check2 ml-2"></i>
                                </button>
                            </div>
                            :
                            <div className={"flex items-center"}>
                                <p>
                                    {newUser.contactNumber}
                                </p>
                                <button onClick={() => {
                                    setFlags({...flags, contactNumber: true})
                                }}>
                                    <i className="bi bi-pencil-square ml-2"></i>
                                </button>
                            </div>
                        }
                    </div>

                    <div className={"grid mb-4 grid-cols-2  "}>
                        <p className={"text-lg"}>Підрозділ</p>
                        {flags.unit
                            ?
                            <div className={"flex items-center"}>
                                <input onChange={(e) => {
                                    setNewUser({...newUser, unit: e.target.value})
                                }
                                } value={newUser.unit} className={"border px-2 py-1 rounded"} placeholder={"Підрозділ"}
                                       type="text"/>
                                <button onClick={() => {
                                    store.editUser("unit", newUser.unit).then(res => {
                                        console.log(res)
                                    }).catch(e => {
                                        console.log(e)
                                    })
                                    setFlags({...flags, unit: false})
                                }}>
                                    <i className="bi bi-check2 ml-2"></i>
                                </button>
                            </div>
                            :
                            <div className={"flex items-center"}>
                                <p>
                                    {newUser.unit}
                                </p>
                                <button onClick={() => {
                                    setFlags({...flags, unit: true})
                                }}>
                                    <i className="bi bi-pencil-square ml-2"></i>
                                </button>
                            </div>
                        }
                    </div>

                </div>
            </div>
        </>

    );
};

export default observer(ProfilePage);