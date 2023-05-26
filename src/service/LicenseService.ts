import $api from "../http";
import {ILicense} from "../models/ILicense";

export class LicenseService {

    static async createRequest(licenseDto: any) {
        return await $api.post("/license", licenseDto)
    }

    static async getAllRequests(){
        return await $api.get<ILicense[]>("/license")
    }

}