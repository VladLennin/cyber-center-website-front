import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {RoutesName} from "../router/RoutesName";

interface AnswersProps {
    incorrectAnswered: number,
    correctAnswered: number,

}

const TestResultPage = () => {


    const [answers, setAnswers] = useState<AnswersProps>({
        correctAnswered: 0,
        incorrectAnswered: 0,
    })

    useEffect(() => {
        readResult()
    }, [])

    const readResult = () => {
        if (localStorage.getItem("incorrectAnswered") && localStorage.getItem("correctAnswered")) {
            let correctAnswered: number = Number(localStorage.getItem("correctAnswered"))
            let incorrectAnswered: number = Number(localStorage.getItem("incorrectAnswered"))
            let answersTemp = {
                correctAnswered: correctAnswered,
                incorrectAnswered: incorrectAnswered,
            }
            setAnswers(answersTemp)
        }
    }

    const calculatePercent = () => {
        return Math.round((100 / (answers.correctAnswered + answers.incorrectAnswered)) * answers.correctAnswered);
    }

    return (
        <div className={"flex justify-center items-center min-h-[77vh] flex-col proba-pro-medium mb-10 mt-5"}>
            <p className={"proba-pro-bold text-[6vh]"}>Результат тесту</p>
            <div className={"border rounded shadow p-10  max-w-[75vw]"}>
                <div className={"flex items-center justify-between w-[25vw] text-xl"}>
                    <p>Правильних відповідей</p>
                    <p>{answers.correctAnswered} <i className="bi bi-check-circle-fill text-green-600"></i></p>
                </div>

                <div className={"flex items-center justify-between w-[25vw] text-xl"}>
                    <p>Неравильних відповідей</p>
                    <p>{answers.incorrectAnswered} <i className="bi bi-x-circle-fill text-red-600"></i></p>
                </div>

                <div className={"flex items-center justify-between w-[25vw] text-xl"}>
                    <p>Відсоток вірності</p>
                    <p>{calculatePercent()}% </p>
                </div>
                <div className={"flex justify-end pt-4 text-xl"}>
                    <Link to={RoutesName.MAIN_PAGE} className={"flex hover:text-[#AF8742] duration-200"}>
                        <p>На головну</p>
                        <i className="bi bi-arrow-up-right"></i>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default TestResultPage;