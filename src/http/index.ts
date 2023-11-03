import axios from 'axios'
import {AuthResponse} from "../models/responce/Authresponce";

// export const API_URL = "https://10.5.113.112:3001/api"
export const API_URL = process.env.REACT_APP_HOST +":"+ process.env.REACT_HOST_PORT + "/api/"

export const FTP_URL = process.env.REACT_APP_FTP+":"+ process.env.REACT_FTP_PORT

export const FTP_URL_DOWNLOAD = FTP_URL + "/download/"
export const FTP_URL_UPLOAD = FTP_URL + "/upload/"


const $api = axios.create({
    baseURL: API_URL,
})


$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh `, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)
            return $api.request(originalRequest)
        } catch (e) {
            console.log(e)
        }
    }
    throw error;
})


export default $api;

