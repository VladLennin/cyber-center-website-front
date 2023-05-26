import React, {useContext, useEffect, useState} from 'react';
import {IPz} from "../../models/IPz";
import {OS} from "../../models/enum/OS";
import {Networks} from "../../models/enum/Networks";
import UnitService from "../../service/UnitService";
import {IUnit} from "../../models/IUnit";
import {PzService} from "../../service/PzService";
import {Context} from "../../index";
import {IToast} from "../../models/IToast";
import {ToastTypes} from "../../models/enum/ToastTypes";

const AddAntPzPage = () => {

    const [selectedFile, setSelectedFile] = useState();
    const [addUnit, setAddUnit] = useState<boolean>(true)
    const [unitName, setUnitName] = useState<string>("")
    const [pz, setPz] = useState<IPz>({os: 0, network: 0, name: "", unitId: 0} as IPz)
    const [units, setUnits] = useState<IUnit[]>([])
    const {store} = useContext(Context)
    const handleFileChange = (event: any) => {
        setSelectedFile(event.target.files[0]);
    };

    function useForceUpdate() {
        const [value, setValue] = useState(0);
        return () => setValue(value => value + 1);
    }

    const forceUpdate = useForceUpdate()

    const addNewUnit = () => {
        UnitService.addUnit({name: unitName} as IUnit).then(res => {
            setUnits([...units, res.data])
            store.addToast({type: ToastTypes.Successful, content: "Підрозділ доданий успішно"} as IToast)
            setAddUnit(true)
            setUnitName("")
            forceUpdate()
        }).catch(e => {
            store.addToast({type: ToastTypes.Successful, content: e.data.message} as IToast)
        })
    }

    const addNewAntPz = () => {
        if (pz.name !== "" &&
            pz.unitId !== 0 && pz.network !== 0 &&
            pz.os !== 0 && selectedFile
        ) {
            UnitService.addAntPz(pz, pz.unitId, selectedFile).then(res => {
                store.addToast({type: ToastTypes.Successful, content: "ПЗ додано успішно"} as IToast)
                setPz({os: 0, network: 0, name: "", unitId: 0} as IPz)
                forceUpdate()
            }).catch(err => {
                store.addToast({type: ToastTypes.Error, content: err} as IToast)
            })
        } else {
            store.addToast({type: ToastTypes.Warning, content: "Якесь поле введено некоректно"} as IToast)
        }
    }


    useEffect(() => {
        UnitService.getUnits().then(res => {
            console.log(res)
            setUnits(res.data)
        }).catch(e => {
            console.log(e)
        })
    }, [])


    return (
        <>
            <div className={"flex flex-col items-center proba-pro-medium  "}>
                <p className={"proba-pro-bold text-3xl mb-3"}>
                    Додати нове антивірусне ПЗ
                </p>
                <div className={"grid grid-cols-2 gap-10 items-center border p-8 shadow-md mb-14 max-w-[30%] w-[30%]"}>

                    <div className={"flex items-center"}>
                        <label className={"text-xl"} htmlFor="os">Підрозділ</label>
                        <button onClick={() => setAddUnit(!addUnit)} className={"hover:text-yellow-200 duration-100"}>
                            <i className="bi bi-plus text-2xl"></i>
                        </button>
                    </div>
                    <select value={pz.unitId} onChange={(e) => {
                        setPz({...pz, unitId: Number(e.target.value)})
                    }} className={"border rounded-md"} name="" id="os">
                        <option disabled value="0">Виберіть підрозділ</option>
                        {units.map((unit, index) => (
                            <option key={index} value={unit.id}>{unit.name}</option>
                        ))}
                    </select>

                    <div className={(addUnit && "hidden ") + " col-span-2 grid grid-cols-2 gap-10"}>
                        <label className={"text-xl"} htmlFor="">Назва підрозділу</label>
                        <input onChange={(e) => {
                            setUnitName(e.target.value)
                        }} className={"rounded-md"} type="text"/>
                        <div onClick={addNewUnit} className={"col-span-2 text-right "}>
                            <button
                                className={"text-sm border w-1/6 p-4 rounded-md  text-center hover:scale-105  hover:bg-yellow-200 duration-200"}>Додати
                            </button>
                        </div>
                    </div>

                    <label className={"text-xl"} htmlFor="os">ОС</label>
                    <select value={pz.os} onChange={(e) => {
                        setPz({...pz, os: Number(e.target.value)})
                    }} className={"border rounded-md"} name="" id="os">
                        <option disabled value={0}>Виберіть ОС</option>
                        <option value={OS["Windows XP"].valueOf()}>Windows XP</option>
                        <option value={OS["Windows 7"].valueOf()}>Windows 7</option>
                        <option value={OS["Windows 8-10"].valueOf()}>Windows 8-10</option>
                        <option value={OS["Додаткове ПЗ"].valueOf()}>Загальне ПЗ</option>
                    </select>


                    <label className={"text-xl"} htmlFor="os">Тип мережі</label>
                    <select value={pz.network} onChange={(e) => {
                        setPz({...pz, network: Number(e.target.value)})
                    }} className={"border rounded-md"} name="" id="os">
                        <option disabled value="0">Виберіть мережу</option>
                        <option value={Networks["АСУ Дніпро"]}>АСУ Дніпро</option>
                        <option value={Networks["Без підключення до мережі"]}>Без підключення до мережі</option>
                        <option value={Networks["ІСД-інтернет"]}>ІСД - Інтернет</option>
                    </select>

                    <label className={"text-xl"} htmlFor="name">Назва</label>
                    <input value={pz.name} onChange={(e) => {
                        setPz({...pz, name: e.target.value})
                    }} className={"rounded-md"} type="text" id="name"/>

                    <label className={"text-xl"} htmlFor="name">Файл</label>
                    <input onChange={(e) => {
                        handleFileChange(e)
                    }} className={"rounded-md"} type="file" id="name"/>

                    <div className={"flex justify-center col-span-2 mb-1"}>
                        <button onClick={addNewAntPz}
                                className={"border-2  col-span-2 hover:scale-110 duration-200 border-[#ffd423] px-8 py-2 rounded-[150px]"}>
                            Додати
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
        ;
};

export default AddAntPzPage;