import React, {FC, useEffect, useState} from 'react';
import Modal from "./Modal";
import {ILicense} from "../../models/ILicense";
import {IUser} from "../../models/IUser";
import UserService from "../../service/UserService";


interface ModalProps {
    modal: boolean;
    closeModal: () => any;
    license: ILicense;
}

const LicenseModalData: FC<ModalProps> = ({modal, closeModal, license}) => {

    const [userAllowed, setUserAllowed] = useState<IUser>({} as IUser)

    useEffect(() => {
        UserService.getUserByPk(license.allowedById).then(res => {
            setUserAllowed(res.data)
        })
    }, [])

    return (
        <Modal title={"Подробиці запиту"} show={modal} close={closeModal}>
            <div className={"grid grid-cols-2 proba-pro-medium text-xl"}>
                <div className={"flex gap-2 col-span-2"}>
                    <p className={(license.status === 'Відхилено' ? " text-red-500 " : " text-green-500 ") + " text-2xl  text-center"}>{license.status}</p>
                    <p className={"mb-3 text-2xl text-center"}>Адміністратором:</p>
                </div>
                <div className={"grid grid-cols-2 col-span-2 proba-pro-medium text-lg w-full "}>
                    <p>Імя:</p> <p>{userAllowed.name}</p>
                    <p> Фамілія:</p><p>{userAllowed.surname}</p>
                    <p> По-батькові:</p><p>{userAllowed.fatherhood}</p>
                    <p> Підрозділ:</p><p> {userAllowed.unit}</p>
                    <p> Контактний номер:</p><p> {userAllowed.contactNumber}</p>
                    <p> Пошта:</p><p> {userAllowed.email}</p>
                </div>
            </div>
        </Modal>
    );
};

export default LicenseModalData;