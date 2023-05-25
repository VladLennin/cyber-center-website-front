import React, {FC} from 'react';

import {ToastTypes} from "../models/enum/ToastTypes";
import {IToast} from "../models/IToast";
import {Toast} from "flowbite-react";
import "./../style/toast.css"
import {observer} from "mobx-react-lite";


interface ToastProps {
    toast: IToast;
}

const ToastCustom: FC<ToastProps> = ({toast}) => {


        if (toast.type == ToastTypes.Successful) {
            return (
                <Toast  className={" bg-green-400 flex items-center justify-between mb-2 z-50"}>
                    <div className={"flex"}>
                        <i className={"bi bi-check2-all text-green-500 mr-4"}></i>
                        <div className={"proba-pro-medium "}>
                            {toast.content}
                        </div>
                    </div>
                    <Toast.Toggle className={"bg-green-400 hover:bg-gray-300 duration-200 p-1 ml-1"}/>
                </Toast>
            );
        } else if (toast.type == ToastTypes.Warning) {
            return (
                <Toast className={"bg-yellow-200 flex items-center mb-2 justify-between "}>
                    <div className={"flex"}>

                        <i className={"bi bi-exclamation-triangle text-yellow-400 mr-4"}></i>
                        <div className={"proba-pro-medium "}>
                            {toast.content}
                        </div>
                    </div>
                    <Toast.Toggle className={"bg-yellow-200 hover:bg-gray-300 duration-200 p-1 ml-1"}/>
                </Toast>
            )
        }
        return (
            <Toast className={"bg-red-300 flex items-center justify-between mb-2 z-50"}>
                <div className={"flex"}>
                    <i className={"bi bi-x-lg text-red-500 mr-4"}></i>
                    <div className={"proba-pro-medium "}>
                        {toast.content}
                    </div>
                </div>
                <Toast.Toggle className={"bg-red-300 hover:bg-gray-300 duration-200 p-1 ml-1"}/>
            </Toast>
        );
    }
;

export default observer(ToastCustom);