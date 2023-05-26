import {Roles} from "./enum/Roles";
import {MilitaryRanks} from "./enum/MilitaryRanks";
import {ShipRanks} from "./enum/ShipRanks";
import {IRole} from "./IRole";

export interface IUser {
    id: number;
    email: string;
    password: string;
    rank: MilitaryRanks | ShipRanks;
    surname: string;
    name: string;
    fatherhood: string;
    contactNumber: string;
    unit: string;
    roles: IRole[];
    createdAt: string;
    updatedAt: string;

}