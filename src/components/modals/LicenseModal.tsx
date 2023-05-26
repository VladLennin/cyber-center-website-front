import React, {FC, useContext} from 'react';
import Modal from "./Modal";
import {IUser} from "../../models/IUser";
import {LicenseService} from "../../service/LicenseService";
import {Context} from "../../index";
import {IToast} from "../../models/IToast";
import {ToastTypes} from "../../models/enum/ToastTypes";


interface LicenseModalProps {
    modal: boolean;
    closeModal: () => any;
    user: IUser;
}

const LicenseModal: FC<LicenseModalProps> = ({modal, closeModal, user}) => {

    const {store} = useContext(Context)
    return (
        <Modal show={modal} close={closeModal} title={"Запит на ліцензію"}>
            <div className={"text-center proba-pro-bold text-2xl mb-5"}>
                Запит на ліцензію буде створено на ці дані:
            </div>
            <div className={"grid grid-cols-2 proba-pro-medium text-lg"}>
                <p>Імя:</p> <p>{user.name}</p>
                <p> Фамілія:</p><p>{user.surname}</p>
                <p> По-батькові:</p><p>{user.fatherhood}</p>
                <p> Підрозділ:</p><p> {user.unit}</p>
                <p> Контактний номер:</p><p> {user.contactNumber}</p>
                <p> Пошта на яку прийде ключ:</p><p> {user.email}</p>
            </div>
            <div className={"grid grid-cols-2 gap-10 mt-4"}>
                <button className={"p-2 bg-[#444c37] text-white hover:text-[#af8742] duration-200"}
                        onClick={() => {
                            LicenseService.createRequest(user).then(res => {
                                closeModal()
                                store.addToast({content:"Запрос відправлений, очікуйте відповідь на зазначеній пошті", type:ToastTypes.Successful} as IToast)
                            }).catch(err => {
                                store.addToast({content:err.response.data.message, type:ToastTypes.Error} as IToast)
                            })
                        }}>
                    Підтвердити
                </button>

                <button className={"p-2 bg-[#444c37] text-white hover:text-[#af8742] duration-200"}
                        onClick={closeModal}>
                    Відмінити
                </button>
            </div>


        </Modal>
    )
        ;
};

export default LicenseModal;