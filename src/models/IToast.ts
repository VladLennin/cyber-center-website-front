import {ToastTypes} from "./enum/ToastTypes";

export interface IToast {
    content: string;
    type: ToastTypes;
}