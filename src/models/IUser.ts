import {Roles} from "./Roles";
import {MilitaryRank} from "./enum/MilitaryRank";
import {ShipRanks} from "./enum/ShipRanks";
import {IRole} from "./IRole";

export interface IUser {
    id: number;
    ipAddress: string;
    email: string;
    password: string;
    rank: MilitaryRank | ShipRanks;
    surname: string;
    name: string;
    fatherhood: string;
    contactNumber: string;
    unit: string;
    roles: IRole[];



}