import React, {useEffect, useState} from 'react';
import BackBtn from "../../components/BackBtn";
import {IUnit} from "../../models/IUnit";
import UnitService from "../../service/UnitService";
import UnitAntPz from "../../components/UnitAntPz";

const AntivirusesPZ = () => {
    const [units, setUnits] = useState<IUnit[]>([]);

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
            <div className={"flex justify-start items-center min-h-[77vh] flex-col proba-pro-medium mb-10 mt-5"}>
                <p className={"proba-pro-bold text-[6vh]"}>Комплексне антивірусне забезепечення</p>
                {units.map(unit => (
                    <UnitAntPz unit={unit}/>
                ))}
            </div>
        </>
    );
};

export default AntivirusesPZ;