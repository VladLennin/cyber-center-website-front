import {IQuestion} from "./IQuestion";

export interface ICourse {
    id: number;
    name: string;
    questions: IQuestion[];
    img_href: string;
    userId: number;
    createdAt: string;
}