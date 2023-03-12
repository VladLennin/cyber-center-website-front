import {Roles} from "./Roles";
import {MilitaryRank} from "./enum/MilitaryRank";
import {ShipRanks} from "./enum/ShipRanks";

export interface IUser {
    id: string;
    ipAddress: string;
    email: string;
    password: string;
    rank: MilitaryRank | ShipRanks;
    surname: string;
    name: string;
    fatherhood: string;
    contactNumber: string;
    unit: string;
    roles: Roles;

}