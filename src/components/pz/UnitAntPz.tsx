import React, {FC} from 'react';
import {IUnit} from "../../models/IUnit";
import {OS} from "../../models/enum/OS";
import AccordionCustom from "../AccordionCustom";

interface UnitProps {
    unit: IUnit
}

const UnitAntPz: FC<UnitProps> = ({unit}) => {
    return (
        <>
            <p className={"proba-pro-medium text-2xl "}>{unit.name}</p>
            <div className={"grid grid-cols-2 w-full"}>
                <div className={"flex justify-center"}>
                    <AccordionCustom unit={unit} os={OS["Windows XP"]}/>
                </div>
                <div className={"flex justify-center"}>
                    <AccordionCustom unit={unit} os={OS["Windows 7"]}/>
                </div>
                <div className={"flex justify-center"}>
                    <AccordionCustom unit={unit} os={OS["Windows 8-10"]}/>
                </div>
                <div className={"flex justify-center"}>
                    <AccordionCustom unit={unit} os={OS["Додаткове ПЗ"]}/>
                </div>
                <div>

                </div>
            </div>

        </>
    );
};

export default UnitAntPz;