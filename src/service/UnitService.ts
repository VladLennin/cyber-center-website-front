import $api from "../http";
import {IUnit} from "../models/IUnit";

export default class UnitService {
    static async getUnits() {
        return $api.get("/unit");
    }

    static async addUnit(unit: IUnit) {
        console.log(unit)
        return $api.post("/unit", {unit});
    }

}