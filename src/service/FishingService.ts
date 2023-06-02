import {IFishing} from "../models/IFishing";
import $api from "../http";
import FtpService from "./FTPservice";

export class FishingService {

    static async addFishing(newFishing: IFishing, file: File) {
        newFishing.img = await FtpService.getFileExtension(file.name)
        console.log(newFishing)
        const res = await $api.post<IFishing>("/fishing", {fishing: newFishing})
        const fishing = res.data
        FtpService.uploadFile(file, "fishing_" + fishing.id).then(res => {
            return fishing
        }).catch(e => {
            throw e
        })
    }

}