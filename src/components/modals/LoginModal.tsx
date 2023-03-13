import React, {FC, useContext, useState} from 'react';
import Modal from "./Modal";
import {Context} from "../../index";

interface LoginProps {
    modal: boolean;
    closeModal: () => void;
}

const LoginModal: FC<LoginProps> = ({modal, closeModal}) => {

    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const {store} = useContext(Context)
    const login = () => {
        if (password.length > 0 && email.length > 0) {
            store.login(email, password).then(res => {
                console.log(res)
            }).catch(e => {
                console.log(e)
            })
        }
    }

    return (
        <Modal show={modal} close={closeModal} title={"Авторизація"}>

            <div className={"proba-pro-medium "}>
                <div className={"flex justify-between mb-3"}>
                    <p>Email</p>
                    <input onChange={(e) => {
                        setEmail(e.target.value)
                    }
                    } className={"rounded border"} type="email"/>
                </div>

                <div className={"flex justify-between mb-5"}>
                    <p>Пароль</p>
                    <input onChange={(e) => {
                        setPassword(e.target.value)
                    }
                    } className={"rounded border"} type="password"/>
                </div>
                <div className={"flex justify-end"}>
                    <button onClick={login} className={"hover:scale-105 duration-200 border px-8 py-2 border-black rounded-[150px]"}>
                        Увійти
                    </button>
                </div>

            </div>

        </Modal>
    );
};

export default LoginModal;