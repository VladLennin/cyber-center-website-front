import $api from "../http";
import {AxiosResponse} from "axios"
import {AuthResponse} from "../models/responce/Authresponce";
import {IUser} from "../models/IUser";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/login', {email, password})
    }

    static async registration(user:IUser): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/registration', {user})
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')

    }
}
