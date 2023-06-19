import $api from "../http";
import {ILicense} from "../models/ILicense";

export class LicenseService {

    static async createRequest(licenseDto: any) {
        return await $api.post("/license", licenseDto)
    }

    static async getAllRequests() {
        return await $api.get<ILicense[]>("/license")
    }

    static async getUserFromRequest(userId: number) {
        return await $api.post("/license/user", {userId})
    }

    static async rejectLicense(licenseId: number, userAllowedId: number) {
        return await $api.post("/license/reject", {licenseId, userAllowedId})
    }

    static async acceptLicense(licenseId: number, userAllowedId: number, key:string) {
        return await $api.post("/license/accept", {licenseId, userAllowedId, key})
    }

    static async getLicensePaginated(page: number, limit: number) {
        return await $api.post("/license/paginated", {page, limit})
    }

    static async getCountLicense() {
        return await $api.get('/license/count')
    }
}