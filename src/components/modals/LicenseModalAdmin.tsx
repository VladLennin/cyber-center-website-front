import React, {FC, useContext, useRef, useState} from 'react';
import Modal from "./Modal";
import {IUser} from "../../models/IUser";
import {ILicense} from "../../models/ILicense";
import {LicenseService} from "../../service/LicenseService";
import {Context} from "../../index";
import {IToast} from "../../models/IToast";
import {ToastTypes} from "../../models/enum/ToastTypes";

interface LicenseModalProps {
    modal: boolean;
    closeModal: () => any;
    user: IUser;
    license: ILicense;
    setLicenses: (any: any) => any;
}

const LicenseModalAdmin: FC<LicenseModalProps> = ({modal, closeModal, user, license, setLicenses}) => {
    const [keyInput, setKeyInput] = useState(false)

    const [inputValues, setInputValues] = useState(['', '', '', '', '']);
    const inputRefs = useRef<any>([]);
    const {store} = useContext(Context)
    const handleChange = (index: number, event: any) => {
        const {value} = event.target;
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);

        if (value.length === 4 && index < inputRefs.current.length - 1) {
            // @ts-ignore
            inputRefs.current[index + 1].focus();
        }
    };

    const updateLicenses = () => {
        LicenseService.getAllRequests().then(res => {
            setLicenses(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <Modal title={"Підтвердження ліцензії"} show={modal} close={closeModal}>
            <div className={"grid grid-cols-2 proba-pro-medium text-lg"}>
                <p>Імя:</p> <p>{user.name}</p>
                <p> Фамілія:</p><p>{user.surname}</p>
                <p> По-батькові:</p><p>{user.fatherhood}</p>
                <p> Підрозділ:</p><p> {user.unit}</p>
                <p> Контактний номер:</p><p> {user.contactNumber}</p>
                <p> Пошта на яку прийде ключ:</p><p> {user.email}</p>
            </div>
            <div className={"grid grid-cols-2 gap-10 mt-4"}>
                {keyInput &&
                    <div className={"col-span-2 grid grid-cols-5 "}>
                        {inputValues.map((value, index) => (
                            <input
                                key={index}
                                ref={el => (inputRefs.current[index] = el)}
                                type="text"
                                value={value}
                                maxLength={4}
                                placeholder={"XXXX"}
                                className={(index === 0 && " rounded-l-lg ") + (index === 4 ? " rounded-r-lg " : "") + " text-center proba-pro-light"}
                                onChange={event => handleChange(index, event)}
                            />
                        ))}
                        <div className={"col-span-5 flex justify-center gap-4"}>
                            <button onClick={() => {
                                let key = ""
                                inputValues.map((value, index) => {
                                    if (index !== 4)
                                        key = key + value + '-'
                                    else
                                        key += value
                                })
                                if (key.length === 24) {
                                    LicenseService.acceptLicense(license.id, store.user.id, key).then(res => {
                                        console.log(res)
                                        updateLicenses()
                                    }).catch(err => {
                                        console.log(err)
                                    })
                                    closeModal()
                                } else {
                                    store.addToast({content: "Ключ не валідний", type: ToastTypes.Warning} as IToast)
                                }
                            }}
                                    className={"p-2 px-10 mt-4 bg-[#444c37] text-white hover:text-[#af8742] duration-200"}>Надіслати
                            </button>
                            <button onClick={() => {
                                setKeyInput(false)
                                setInputValues(['', '', '', '', ''])
                            }}
                                    className={"p-2 px-10 mt-4 bg-[#444c37] text-white hover:text-[#af8742] duration-200"}>Назад
                            </button>

                        </div>
                    </div>
                }
                {!keyInput &&
                    <>
                        <button className={"p-2 bg-[#444c37] text-white hover:text-[#af8742] duration-200"}
                                onClick={() => {
                                    setKeyInput(true)
                                }}>
                            Видача ліцензію
                        </button>

                        <button className={"p-2 bg-[#444c37] text-white hover:text-[#af8742] duration-200"}
                                onClick={() => {
                                    closeModal()
                                    LicenseService.rejectLicense(license.id, store.user.id).then(res => {
                                        console.log(res)
                                        updateLicenses()
                                    }).catch(err => {
                                        console.log(err)
                                    })
                                }}>
                            Відмовити
                        </button>
                    </>
                }
            </div>
        </Modal>
    );
};

export default LicenseModalAdmin;