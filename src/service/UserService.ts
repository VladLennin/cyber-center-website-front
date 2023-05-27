import $api from "../http";
import {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";

export default class UserService {
    static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return await $api.get("/users")
    }

    static async editUser(field: string, value: any, userId: number): Promise<IUser> {
        return await $api.post('/users/edit', {field, value, userId})
    }

    static async editLogin(email: string, login: string): Promise<void> {
        return await $api.post('/user/edit-login', {email, login})
    }

    static async getUserByPk(userId:number){
        return await $api.post("users/pk", {userId})
    }
}