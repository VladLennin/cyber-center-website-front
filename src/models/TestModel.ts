import {TestQuestion} from "./TestQuestion";

export class TestModel {
    name: string;
    questions: TestQuestion[];


    constructor(name: string, questions: TestQuestion[]) {
        this.name = name;
        this.questions = questions;
    }
}