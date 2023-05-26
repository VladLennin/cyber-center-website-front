import React, {FC, useState} from 'react';
import {OS} from "../models/enum/OS";
import {IUnit} from "../models/IUnit";
import {findAllByDisplayValue} from "@testing-library/react";
import {Networks} from "../models/enum/Networks";
import {FTP_URL_DOWNLOAD} from "../http";
import * as net from "net";


interface AccordionProps {
    os: OS
    unit: IUnit;
}

const AccordionCustom: FC<AccordionProps> = ({os, unit}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={"m-5 text-center proba-pro-light w-3/4"}>
            <div className={"bg-gray-300 hover:cursor-pointer duration-200 rounded-md py-2"} onClick={toggleAccordion}>
                <h3>{OS[os]}</h3>
            </div>

            {isOpen &&
                <div className={" grid  grid-cols-8 gap-5 "}>
                    {Object.values(Networks).map(network => (
                        <>
                            {(unit.pz.filter(p => p.network == network && p.os == os).length !== 0) &&
                                <>
                                    <div className={"flex col-span-2 px-2"}>
                                        <p>{Networks[Number(network)]}</p>
                                    </div>
                                    <div className={"col-span-6 flex flex-col items-end"}>
                                        {unit.pz.map(p => (
                                            <>
                                                {(p.os == os && p.network == network) &&
                                                    <div className={"flex text-blue-500 hover:text-blue-700 duration-200"}>
                                                        <a href={FTP_URL_DOWNLOAD + p.src} download>{p.name}</a>
                                                        <br/>
                                                    </div>
                                                }
                                            </>
                                        ))
                                        }
                                    </div>
                                </>
                            }
                        </>
                    ))}


                </div>
            }

        </div>
    );
};

export default AccordionCustom;