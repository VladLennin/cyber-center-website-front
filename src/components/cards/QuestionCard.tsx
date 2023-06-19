import React, {FC, useState} from 'react';
import {TestQuestion} from "../../models/TestQuestion";

interface QuestionProps {
    question: TestQuestion;
    questionNumber: number;
    setAnswers: (any: any) => any;
    setActiveQuestion: (any: any) => any;
    answers: {
        correctAnswered: number[],
        incorrectAnswered: number[],
    };
    countQuestions: number;
}

const QuestionCard: FC<QuestionProps> = ({
                                             countQuestions,
                                             question,
                                             answers,
                                             questionNumber,
                                             setAnswers,
                                             setActiveQuestion
                                         }) => {

    const [answered, setAnswered] = useState<boolean>(false)
    const [chosenAnswer, setChosenAnswer] = useState<number>(-1)


    return (
        <div className={"grid grid-cols-12"}>
            <div className={"col-span-4"}>
                <img className={"rounded-xl border"} src={question.img} alt=""/>
            </div>
            <div className={"col-span-8 flex justify-center items-center"}>
                <p className={"proba-pro-light"}>
                    {question.question}
                </p>
            </div>
            <div className={"col-span-12 grid grid-cols-2 gap-5 mt-5 border-t-[2px] mx-2 border-t-[#444C37] pt-4 "}>
                {
                    question.answers.map((answer, index) => (
                        <div key={index}>
                            {index === question.correctAnswer ?
                                <button  onClick={() => {
                                    setAnswered(true)
                                    setChosenAnswer(index)
                                    setTimeout(() => questionNumber !== countQuestions-1 && setActiveQuestion(questionNumber + 1), 750)
                                    setAnswers({
                                        ...answers,
                                        correctAnswered: [...answers.correctAnswered, questionNumber]
                                    })
                                }
                                }
                                        disabled={answered}
                                        className={(answered && " bg-green-600 ") + " px-1 border rounded hover:shadow-xl shadow duration-200 py-3"}>
                                    {answer}
                                </button>
                                :
                                <button onClick={() => {
                                    setAnswered(true)
                                    setChosenAnswer(index)
                                    setTimeout(() => questionNumber !== countQuestions-1 && setActiveQuestion(questionNumber + 1), 750)
                                    setAnswers({
                                        ...answers,
                                        incorrectAnswered: [...answers.incorrectAnswered, questionNumber]
                                    })
                                }}
                                        disabled={answered}
                                        className={(chosenAnswer === index && " bg-red-600 ") + " px-1 border rounded hover:shadow-xl shadow duration-200 py-3"}>
                                    {answer}
                                </button>
                            }


                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default QuestionCard;