import React, {useContext, useEffect, useState} from 'react';
import {UpdPzTypes} from "../../models/enum/UpdPzTypes";
import {IUpdPz} from "../../models/IUpdPz";
import {Context} from "../../index";
import {IToast} from "../../models/IToast";
import {ToastTypes} from "../../models/enum/ToastTypes";
import {PzService} from "../../service/PzService";

const AddUpdatePage = () => {

    const [programExist, setProgramExist] = useState(false)
    const [programs, setPrograms] = useState([])
    const [selectedFile, setSelectedFile] = useState();
    const [newUpdPz, setNewUpdPz] = useState<IUpdPz>(
        {
            name: "",
            src: "",
            type: UpdPzTypes[0],
            for: ""
        } as IUpdPz
    )

    const {store} = useContext(Context)


    useEffect(() => {
        PzService.getAllPrograms().then(res => {
            setPrograms(res.data)
            console.log(res.data)
        }).catch(e => {
            store.addToast({type: ToastTypes.Error, content: e.data.message} as IToast)
        })
    }, [])
    const handleFileChange = (event: any) => {
        setSelectedFile(event.target.files[0]);
    };

    const createUpdPz = () => {
        if (newUpdPz.for !== "" &&
            newUpdPz.type !== "" &&
            newUpdPz.name !== "" &&
            selectedFile) {
            PzService.addUpdPz(newUpdPz, selectedFile).then(res => {
                store.addToast({type: ToastTypes.Successful, content: "Прошивка додана успішно"} as IToast)
                setNewUpdPz({
                    name: "",
                    src: "",
                    type: UpdPzTypes[0],
                    for: ""
                } as IUpdPz)

            }).catch(e => {
                store.addToast({type: ToastTypes.Error, content: e.data.message} as IToast)
            })
        } else {
            store.addToast({type: ToastTypes.Warning, content: "Поля введені некоректно"} as IToast)
        }
    }

    return (
        <div className={"flex flex-col items-center proba-pro-medium text-xl "}>
            <p className={"proba-pro-bold text-3xl mb-3"}>
                Додати нову прошивку або оновлення
            </p>
            <div className={"grid grid-cols-2 gap-10 items-center border p-8 shadow-md mb-14 max-w-[45%] w-[40%]"}>
                <label htmlFor=""> Тип</label>
                <select value={newUpdPz.type} onChange={(e) => {
                    setNewUpdPz({...newUpdPz, type: e.target.value})
                }} className={"rounded border"} name="" id="">
                    <option value={UpdPzTypes[0].valueOf()}>{UpdPzTypes[0].valueOf()}</option>
                    <option value={UpdPzTypes[1].valueOf()}>{UpdPzTypes[1].valueOf()}</option>
                    <option value={UpdPzTypes[2].valueOf()}>{UpdPzTypes[2].valueOf()}</option>
                </select>

                <label htmlFor=""> Назва програми призначення</label>
                <div className={""}>
                    <div className={"flex items-center justify-around gap-2 text-[16px] mb-1"}>
                        <div className={'flex gap-2 items-center'}>
                            <p>Вибрати існуючу</p>
                            <input onChange={() => {
                                setProgramExist(true)
                                setNewUpdPz({...newUpdPz, for:""})
                            }} name={"programExist"} className={"mr-5"} type="radio"/>
                        </div>
                        <div className={"flex gap-2 items-center"}>
                            <p>Створити</p>
                            <input checked={!programExist} onChange={() => {
                                setProgramExist(false)
                                setNewUpdPz({...newUpdPz, for:""})
                            }} name={"programExist"} type="radio"/>
                        </div>

                    </div>
                    {
                        programExist
                            ?
                            <select value={newUpdPz.for.uniqueValues} onChange={e => {
                                setNewUpdPz({...newUpdPz, for: e.target.value})
                            }} className={"rounded border w-full"} name="" id="">
                                {programs.map((program: any, index) => (
                                    <option key={index} value={program.uniqueValues}>
                                        {program.uniqueValues}
                                    </option>
                                ))}
                            </select>
                            :
                            <input value={newUpdPz.for} onChange={e => {
                                setNewUpdPz({...newUpdPz, for: e.target.value})
                            }} type="text" className={"rounded-md border w-full"}/>
                    }
                </div>


                <label htmlFor="">Назва</label>
                <input value={newUpdPz.name} onChange={e => {
                    setNewUpdPz({...newUpdPz, name: e.target.value})
                }} className={"rounded border"} type={"text"}/>

                <label htmlFor="">Файл</label>
                <input onChange={e => {
                    handleFileChange(e)
                }} className={"rounded-md border"} type="file"/>

                <div className={"flex justify-center col-span-2 mb-1"}>
                    <button onClick={createUpdPz}
                            className={"border-2  col-span-2 hover:scale-110 duration-200 border-[#ffd423] px-8 py-2 rounded-[150px]"}>
                        Додати
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddUpdatePage;