import FtpService from "./FTPservice";
import $api from "../http";
import {IUpdPz} from "../models/IUpdPz";
import {AxiosResponse} from "axios";

export class PzService {

    static async addUpdPz(updPz: IUpdPz, file: File) {
        const response = await $api.post('/admin/upd-pz', {
            updPz: {
                ...updPz,
                src: await FtpService.getFileExtension(file.name)
            },
        })

        const createdUpdPz = response.data
        FtpService.uploadFile(file, "upd_pz_" + createdUpdPz.id).then(res => {
            return createdUpdPz
        }).catch(err => {
            throw err;
        })
    }

    static async getAllPrograms() {
        try {
            return await $api.get("admin/programs")
        } catch (e) {
            throw e
        }
    }


}