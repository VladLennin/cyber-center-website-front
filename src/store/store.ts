import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../service/AuthService";
import axios from "axios";
import {AuthResponse} from "../models/responce/Authresponce";
import {API_URL} from "../http";
import UserService from "../service/UserService";


export default class Store {
    user = {} as IUser

    userRoles: string[] = []
    isAuth = false;
    isLoading = false;
    modalLogin = false;
    // toggles:

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setUserRole(roles: string[]) {
        this.userRoles = roles
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    setModalLogin(bool: boolean) {
        this.modalLogin = bool;
    }

    closeModalLogin() {
        this.modalLogin = false;
    }

    openModalLogin() {
        this.modalLogin = true;
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)

            let roles: string[] = []
            response.data.user.roles.map(role => {
                roles.push(role.value)
            })
            this.setUserRole(roles)

            return response
        } catch (e) {
            throw e
        }
    }


    async registration(user: IUser) {
        try {
            const response = await AuthService.registration(user)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)

            let roles: string[] = []
            response.data.user.roles.map(role => {
                roles.push(role.value)
            })
            this.setUserRole(roles)

            return response
        } catch (e) {
            throw e
        }
    }


    async logout() {
        try {
            const response = await AuthService.logout()
            console.log(response)
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({} as IUser)
            this.setUserRole([])
            return response
        } catch (e) {
            console.log(e)
        }
    }


    async checkAuth(location: any) {
        this.setLoading(true)
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh `, {withCredentials: true})
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)

            let roles: string[] = []
            response.data.user.roles.map(role => {
                roles.push(role.value)
            })
            this.setUserRole(roles)

            return location
        } catch (e) {
            console.log(e)
        } finally {
            this.setLoading(false)
        }
    }

    async editUser(field: string, value: any) {
        try {
            const response = await UserService.editUser(field, value, this.user.id)
            return response
        } catch (e) {
            throw e
        }
    }


}