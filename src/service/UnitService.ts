import $api from "../http";
import {IUnit} from "../models/IUnit";
import {IPz} from "../models/IPz";
import FtpService from "./FTPservice";

export default class UnitService {
    static async getUnits() {
        return await $api.get("/unit");
    }

    static async addUnit(unit: IUnit) {
        console.log(unit)
        return await $api.post("/unit", {unit});
    }


    static async addAntPz(pz: IPz, unitId: number, file: File) {
        const response = await $api.post('/admin/ant-pz', {
            pz: {
                ...pz,
                src:  await FtpService.getFileExtension(file.name)
            },
            unitId: unitId
        })

        const createdPz = response.data
        FtpService.uploadFile(file, "ant_pz_" + createdPz.id).then(res => {
            return createdPz
        }).catch(err => {
            throw err;
        })


    }

}