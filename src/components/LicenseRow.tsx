import React, {FC, useContext, useState} from 'react';
import {IUser} from "../models/IUser";
import {LicenseService} from "../service/LicenseService";
import {Context} from "../index";
import {IToast} from "../models/IToast";
import {ToastTypes} from "../models/enum/ToastTypes";
import LicenseModalAdmin from "./modals/LicenseModalAdmin";
import LicenseModalData from "./modals/LicenseModalData";
import {ILicense} from "../models/ILicense";

interface LicenseProps {
    license: any;
    counter: number;
    color: boolean;
    setLicenses: (any: any) => any;
}

const LicenseRow: FC<LicenseProps> = ({license, counter, color, setLicenses}) => {


    const [user, setUser] = useState<IUser>({} as IUser)
    const [modalForAnswer, setModalForAnswer] = useState(false)
    const [modalData, setModalData] = useState(false)

    const {store} = useContext(Context)
    const getUserLicense = () => {
        if (license.status == "Відправлено") {
            LicenseService.getUserFromRequest(license.userId).then(res => {
                setUser(res.data)
            }).catch(err => {
                store.addToast({content: err.res.data.message, type: ToastTypes.Error} as IToast)
            })
            setModalForAnswer(true)
        } else {
            setModalData(true)
        }
    }

    const closeModalForAnswer = () => {
        setModalForAnswer(false)
    }

    const closeModalData = () => {
        setModalData(false)
    }



    return (
        <>
            <LicenseModalAdmin setLicenses={setLicenses} user={user} license={license}
                               modal={modalForAnswer}
                               closeModal={closeModalForAnswer}></LicenseModalAdmin>
            <LicenseModalData license={license} modal={modalData} closeModal={closeModalData}></LicenseModalData>
            <div onClick={getUserLicense} className={(!color ? " bg-gray-100 " : " bg-white ")
                + (counter === 0 && " rounded-t-xl ")
                + (counter === 2 && " rounded-b-xl ")
                + " col-span-9 grid grid-cols-9 mx-5 proba-pro-light py-2"
                + " hover:scale-[1.02] duration-200 hover:shadow-xl hover:cursor-pointer flex items-center"
            }>
                {Object.keys(license).map(key => (
                        (
                            <div key={license.id + key} className={(key === 'key' ? " col-span-3 " : " ") +
                                ((key === 'status' && license[key] === "Відхилено") && ' text-red-500 ') +
                                ((key === 'status' && license[key] === "Підтверджено") && ' text-green-500 ') +
                                ((key === 'status' && license[key] === "Відправлено") && ' text-yellow-500 ') +
                                " text-center "}>{license[key]}</div>
                        )
                    )
                )}
            </div>
        </>
    );
};

export default LicenseRow;