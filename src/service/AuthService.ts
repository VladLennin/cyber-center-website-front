import $api from "../http";
import {AxiosResponse} from "axios"
import {AuthResponse} from "../models/responce/Authresponce";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {email, password})
    }

    static async registration(email: string, login:string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/registration', {email,login, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')

    }
}
