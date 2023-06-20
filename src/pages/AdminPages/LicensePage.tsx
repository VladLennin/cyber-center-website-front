import React, {useEffect, useState} from 'react';
import {LicenseService} from "../../service/LicenseService";
import {ILicense} from "../../models/ILicense";
import LicenseRow from "../../components/LicenseRow";
import PaginationControl from "../../components/PaginationControl";

const LicensePage = () => {


    const [licenses, setLicenses] = useState<ILicense[]>([])
    const [page, setPage] = useState<number>(1)
    const [limit, setLimit] = useState<number>(8)
    const [countPages, setCountPages] = useState<number>(0)


    useEffect(() => {
        LicenseService.getLicensePaginated(page, limit).then(res => {
            setLicenses(res.data)
        })
        LicenseService.getCountLicense().then(res => {
            setCountPages(Math.ceil(res.data / limit))
            setPage(1)
        })
    }, [])

    useEffect(() => {
        LicenseService.getLicensePaginated(page, limit).then(res => {
            setLicenses(res.data)
        })
    }, [page])

    useEffect(() => {
        LicenseService.getLicensePaginated(page, limit).then(res => {
            setLicenses(res.data)
        })
        LicenseService.getCountLicense().then(res => {
            setCountPages(Math.ceil(res.data / limit))
            setPage(1)
        })
    }, [limit])

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
                <LicenseRow setLicenses={setLicenses} counter={counter} color={colorFlag} key={licenses[i].id}
                            license={licenses[i]}/>
            )
        }
        return table
    }

    return (
        <>
            <div className={"flex flex-col items-center justify-center"}>
                <p className={"proba-pro-bold text-[6vh]"}>
                    Ліцензіювання
                    <i className="bi bi-key ml-4"></i>
                </p>


                <div className={"border rounded shadow p-10 w-3/4 mb-8 min-h-[60vh]"}>
                    {
                        licenses.length !== 0 ?
                            <div className={" grid grid-cols-9  mb-10"}>
                                <div
                                    className={" grid grid-cols-9 col-span-9 bg-gray-100 mb-4 rounded mx-5 py-2 proba-pro-medium text-xl"}>
                                    {licenses[0] !== undefined &&
                                        Object.keys(licenses[0]).map(key => (
                                                key === 'key' ?
                                                    <div key={key} className={"col-span-3 text-center"}>
                                                        {key}
                                                    </div>
                                                    :
                                                    <div key={key} className={"text-center"}>
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
            <div className={"mb-8"}>
                <PaginationControl countPages={countPages} page={page} setPage={setPage} limit={limit}
                                   setLimit={setLimit}/>
            </div>
        </>
    );
};

export default LicensePage;