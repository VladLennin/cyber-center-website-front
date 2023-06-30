import {IAnswer} from "./IAnswer";

export interface IQuestion {
    id:number;
    img_href: string;
    question: string;
    answers: IAnswer[];
    correctAnswer: number;
}