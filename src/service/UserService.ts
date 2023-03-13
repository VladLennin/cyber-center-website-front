import $api from "../http";
import {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";
import {AuthResponse} from "../models/responce/Authresponce";

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get("/users")
    }

    static async editUser(field: string, value: any, userId: number): Promise<IUser> {
        return $api.post('/users/edit', {field, value, userId})
    }

    static async editLogin(email: string, login: string): Promise<void> {
        return $api.post('/user/edit-login', {email, login})
    }
}