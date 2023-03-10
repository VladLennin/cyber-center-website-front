import $api from "../http";
import {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";
import {AuthResponse} from "../models/responce/Authresponce";

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get("/users")
    }

    static async editAvatar(email: string, avatar: number): Promise<void> {
        return $api.post('/user/edit-avatar', {email, avatar})
    }

    static async editLogin(email: string, login: string): Promise<void>{
        return $api.post('/user/edit-login', {email, login})
    }
}