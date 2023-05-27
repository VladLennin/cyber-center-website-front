import React, {useEffect, useState} from 'react';
import {LicenseService} from "../../service/LicenseService";
import {ILicense} from "../../models/ILicense";
import LicenseRow from "../../components/LicenseRow";

const LicensePage = () => {


    const [licenses, setLicenses] = useState<ILicense[]>([])
    useEffect(() => {
        LicenseService.getAllRequests().then(res => {
            setLicenses(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])


    const genTable = () => {
        let table = []
        let counter = -1
        let colorFlag = false
        for (let i = 0; i < licenses.length; i++) {
            if (counter !== 2) {
                counter++
            } else {
                colorFlag = !colorFlag
                counter = 0
            }
            table.push(
                <LicenseRow counter={counter} color={colorFlag} key={licenses[i].id} license={licenses[i]}/>
            )
        }
        return table
    }

    return (
        <div className={"flex flex-col items-center justify-center"}>
            <p className={"proba-pro-bold text-[6vh]"}>
                Ліцензіювання
                <i className="bi bi-key ml-4"></i>
            </p>


            <div className={"border rounded shadow p-10 w-3/4 mb-8"}>
                {
                    licenses.length !== 0 ?
                        <div className={" grid grid-cols-9  mb-10"}>
                            <div
                                className={" grid grid-cols-9 col-span-9 bg-gray-100 mb-4 rounded mx-5 py-2 proba-pro-medium text-xl"}>
                                {licenses[0] !== undefined &&
                                    Object.keys(licenses[0]).map(key => (
                                            key === 'key' ?
                                                <div className={"col-span-3 text-center"}>
                                                    {key}
                                                </div>
                                                :
                                                <div className={"text-center"}>
                                                    {key}
                                                </div>
                                        )
                                    )
                                }
                            </div>
                            {genTable()}
                        </div>
                        :
                        <div className={"flex justify-center proba-pro-medium text-3xl h-[20vh] items-center"}>
                            На даний момент немає запитів на ліцензіювання
                        </div>
                }
            </div>


        </div>
    );
};

export default LicensePage;