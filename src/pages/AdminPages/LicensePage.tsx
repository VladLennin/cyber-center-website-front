import React, {useEffect, useState} from 'react';
import {LicenseService} from "../../service/LicenseService";
import {ILicense} from "../../models/ILicense";

const LicensePage = () => {


    const [requests, setRequests] = useState<ILicense[]>([])
    useEffect(() => {
        LicenseService.getAllRequests().then(res => {
            setRequests(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className={"flex flex-col items-center justify-center"}>
            <p className={"proba-pro-bold text-[6vh]"}>
                Ліцензіювання
                <i className="bi bi-key ml-4"></i>
            </p>

            <div className={"border rounded shadow p-10 w-3/4"}>
                {requests.map(req => (
                    <>
                        <p> user: {req.userId}</p>
                        <p> id:{req.id}</p>
                        <p> key:{req.key}</p>
                        <p> allowedBy:{req.allowedBy}</p>
                        <p> status:{req.status}</p>
                    </>
                ))}
            </div>
        </div>
    );
};

export default LicensePage;