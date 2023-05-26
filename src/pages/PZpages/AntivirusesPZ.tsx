import React, {useContext, useEffect, useState} from 'react';
import BackBtn from "../../components/BackBtn";
import {IUnit} from "../../models/IUnit";
import UnitService from "../../service/UnitService";
import UnitAntPz from "../../components/pz/UnitAntPz";
import LicenseModal from "../../components/modals/LicenseModal";
import {Context} from "../../index";

const AntivirusesPZ = () => {
    const [units, setUnits] = useState<IUnit[]>([]);
    const [modal, setModal] = useState(false)

    const {store} = useContext(Context)
    const closerModal = () => {
        setModal(false)
    }

    useEffect(() => {
        UnitService.getUnits().then(res => {
            setUnits(res.data)
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <>
            <LicenseModal modal={modal} closeModal={closerModal} user={store.user}/>
            <div className={"flex justify-start items-center min-h-[77vh] flex-col proba-pro-medium mb-10 mt-5 "}>
                <p className={"proba-pro-bold text-[6vh]"}> Комплексне антивірусне забезепечення</p>
                <div className={"border rounded shadow p-10 "}>
                    <div className={"flex justify-end mb-10 mr-10"}>
                        <button onClick={() => {
                            setModal(true)
                        }} className={"p-2 bg-[#444c37] text-white hover:text-[#af8742] duration-200"}>
                            Запит на ліцензію ESET
                        </button>
                    </div>
                    {units.map(unit => (
                        <UnitAntPz unit={unit}/>
                    ))}
                </div>
            </div>
        </>
    )
        ;
};

export default AntivirusesPZ;