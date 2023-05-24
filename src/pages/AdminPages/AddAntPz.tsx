import axios from 'axios';
import React, {useEffect, useState} from 'react';
import FtpService from "../../service/FTPservice";
import {IPz} from "../../models/IPz";
import {OS} from "../../models/enum/OS";
import {Networks} from "../../models/enum/Networks";
import UnitService from "../../service/UnitService";
import {IUnit} from "../../models/IUnit";

const AddAntPz = () => {

    const [selectedFile, setSelectedFile] = useState({} as File);
    const [addUnit, setAddUnit] = useState<boolean>(false)
    const [unitName, setUnitName] = useState<string>("")
    const [pz, setPz] = useState<IPz>({} as IPz)
    const [units, setUnits] = useState<IUnit[]>([])

    const handleFileChange = (event: any) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleFileUpload = () => {
        FtpService.uploadFile(selectedFile, "someName").then(res => {
            console.log(res)
        })
    };

    const handleFileDownload = (fileName: string) => {
        FtpService.downloadFile(fileName).then()
    }

    useEffect(() => {
        UnitService.getUnits().then(res => {
            setUnits(res.data)
            console.log(res.data)
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
                <div className={"grid grid-cols-2 gap-10 items-center border p-8 shadow-md mb-14 "}>

                    <div className={"flex items-center"}>
                        <label className={"text-xl"} htmlFor="os">Підрозділ</label>
                        <button onClick={() => setAddUnit(!addUnit)} className={"hover:text-yellow-200 duration-100"}>
                            <i className="bi bi-plus text-2xl"></i>
                        </button>
                    </div>
                    <select defaultValue={0} onChange={(e) => {
                        setPz({...pz, os: Number(e.target.value)})
                    }} className={"border rounded-md"} name="" id="os">
                        <option disabled value="0">Виберіть підрозділ</option>
                        {units.map(unit => (
                            <option value={unit.id}>{unit.name}</option>
                        ))}
                    </select>

                    <div className={(addUnit && "hidden ") + " col-span-2 grid grid-cols-2 gap-10"}>
                        <label className={"text-xl"} htmlFor="">Назва підрозділу</label>
                        <input onChange={(e) => {
                            setUnitName(e.target.value)
                        }} className={"rounded-md"} type="text"/>
                        <div onClick={() => {
                            UnitService.addUnit({name: unitName} as IUnit).then(res => {
                                console.log(res)
                            }).catch(e => {
                                console.log(e)
                            })
                        }} className={"col-span-2 text-right "}>
                            <button
                                className={"text-sm border w-1/6 p-4 rounded-md  text-center hover:scale-105  hover:bg-yellow-200 duration-200"}>Додати
                            </button>
                        </div>
                    </div>

                    <label className={"text-xl"} htmlFor="os">ОС</label>
                    <select defaultValue={0} onChange={(e) => {
                        setPz({...pz, os: Number(e.target.value)})
                    }} className={"border rounded-md"} name="" id="os">
                        <option disabled value="0">Виберіть ОС</option>
                        <option value={OS.XP}>Windows XP</option>
                        <option value={OS.Windows_7}>Windows 7</option>
                        <option value={OS.Windows_8_10}>Windows 8-10</option>
                        <option value={OS.Other_App}>Загальне ПЗ</option>
                    </select>


                    <label className={"text-xl"} htmlFor="os">Тип мережі</label>
                    <select defaultValue={0} onChange={(e) => {
                        setPz({...pz, network: Number(e.target.value)})
                    }} className={"border rounded-md"} name="" id="os">
                        <option disabled value="0">Виберіть мережу</option>
                        <option value={Networks.ASU_Dnipro}>АСУ-Дніпро</option>
                        <option value={Networks.Without_Network}>Без підключення до мережі</option>
                        <option value={Networks.Internet}>Інтернет</option>
                    </select>

                    <label className={"text-xl"} htmlFor="name">Назва</label>
                    <input onChange={(e) => {
                        setPz({...pz, name: e.target.value})
                    }} className={"rounded-md"} type="text" id="name"/>

                    <label className={"text-xl"} htmlFor="name">Файл</label>
                    <input onChange={(e) => {
                        setPz({...pz, name: e.target.value})
                    }} className={"rounded-md"} type="file" id="name"/>

                    <button onClick={() => {
                        console.log(pz)
                    }}>asdasdasd
                    </button>
                </div>
            </div>
        </>
    )
        ;
};

export default AddAntPz;