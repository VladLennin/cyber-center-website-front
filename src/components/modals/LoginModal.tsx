import React, {FC, useContext, useState} from 'react';
import Modal from "./Modal";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";
import {RoutesName} from "../../router/RoutesName";
import {observer} from "mobx-react-lite";
import {IToast} from "../../models/IToast";
import {ToastTypes} from "../../models/enum/ToastTypes";

interface LoginProps {
    modal: boolean;
}

const LoginModal: FC<LoginProps> = ({modal}) => {

    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const {store} = useContext(Context)
    const navigate = useNavigate()

    const closeModal = () => {
        store.setModalLogin(false)
    }
    const login = () => {
        if (password.length > 0 && email.length > 0) {
            try {
                store.login(email, password).then(res => {
                    if (res.status === 201) {
                        store.closeModalLogin()
                        store.addToast({type: ToastTypes.Successful, content: "Авторизація успішна"} as IToast)
                        navigate(RoutesName.MAIN_PAGE)
                    }
                }).catch(e => {
                    store.addToast({type: ToastTypes.Error, content: e.response.data.message} as IToast)
                })
            }catch(e){
                console.log(e)
            }
        }
    }

    return (
        <Modal show={modal} close={closeModal} title={"Авторизація"}>

            <div className={"proba-pro-medium "}>
                <div className={"flex justify-between mb-3"}>
                    <p className={"text-xl"}>Email</p>
                    <input onChange={(e) => {
                        setEmail(e.target.value)
                    }
                    } className={"rounded border"} type="email"/>
                </div>

                <div className={"flex justify-between mb-5"}>
                    <p className={"text-xl"}>Пароль</p>
                    <input onChange={(e) => {
                        setPassword(e.target.value)
                    }
                    } className={"rounded border"} type="password"/>
                </div>
                <div className={"flex justify-end"}>
                    <button onClick={login}
                            className={"hover:scale-105 duration-200 border px-8 py-2 border-black rounded-[150px]"}>
                        Увійти
                    </button>
                </div>

            </div>

        </Modal>
    );
};

export default observer(LoginModal);