import $api from "../http";
import axios, {AxiosResponse} from "axios"
import {AuthResponse} from "../models/responce/Authresponce";
import {IUser} from "../models/IUser";

export default class AuthService {
    static async registration(user: IUser): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/registration', {user})
    }

    static async logout(): Promise<any> {
        return $api.post('/auth/logout')
    }

    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return await $api.post<AuthResponse>('/auth/login', {email, password})
    }

    async refresh() {
        const {data} = await axios.get<AuthResponse>('/auth/refresh',  {withCredentials: true});
        return data
    }
    
}
