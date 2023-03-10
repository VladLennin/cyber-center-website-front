import {Roles} from "./Roles";

export interface IUser {
    email: string;
    login: string;
    isActivated: boolean;
    id: string;
    role: Roles;

}