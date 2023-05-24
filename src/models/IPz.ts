import {Networks} from "./enum/Networks";
import {OS} from "./enum/OS";

export interface IPz {
    id: number;
    os: OS;
    network: Networks;
    src: string;
    unitId: number;
    name: string;
}