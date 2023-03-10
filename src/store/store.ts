import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../service/AuthService";
import axios from "axios";
import {AuthResponse} from "../models/responce/Authresponce";
import {API_URL} from "../http";
import UserService from "../service/UserService";

export default class Store {
    user = {} as IUser
    isAuth = false;
    isLoading = false


    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
            return response
        } catch (e) {
            throw e
        }
    }


    async registration(email: string, login: string, password: string) {
        try {
            const response = await AuthService.registration(email, login, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
            return response
        } catch (e) {
            throw e
        }
    }


    async logout() {
        try {
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({} as IUser)
        } catch (e) {
            console.log(e)
        }
    }


    async checkAuth(location: any) {
        this.setLoading(true)
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh `, {withCredentials: true})
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
            return location
        } catch (e) {
            console.log(e)
        } finally {
            this.setLoading(false)
        }
    }


}