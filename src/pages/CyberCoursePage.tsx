import React from 'react';
import {TestModel} from "../models/TestModel";
import {TestQuestion} from "../models/TestQuestion";
import TestComponent from "../components/TestComponent";
import BackToMainBtn from "../components/BackToMainBtn";

const CyberCoursePage = () => {


    const test: TestModel = new TestModel("Cyber Course", [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU",
            question: "Що таке кібернетична безпека в ІТС МОУ та ЗС України?",
            answers: [
                "Стан захищеності технологічних процесів, процесів військового управління та службових інтересів посадових осіб від наявних загроз в кіберпросторі",
                "Діяльність, спрямована на запобігання несанкціонованим діям з використанням комп’ютерних вірусів, їх копій, модифікацій щодо інформації в системі",
            ],
            correctAnswer: 0
        } as TestQuestion,
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU",
            question: "Як часто необхідно проводити повне сканування АРМ на наявність шкідливого програмного забезпечення?",
            answers: [
                "Щотижня",
                "1 раз на місяць",
                "Кожен раз після включення АРМ",
                "За вказівкою офіцера захисту інформації та кібернетичної безпеки"
            ],
            correctAnswer: 2
        } as TestQuestion,
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU",
            question: "Що таке кібернетична безпека в ІТС МОУ та ЗС України?",
            answers: [
                "Стан захищеності технологічних процесів, процесів військового управління та службових інтересів посадових осіб від наявних загроз в кіберпросторі",
                "Діяльність, спрямована на запобігання несанкціонованим діям з використанням комп’ютерних вірусів, їх копій, модифікацій щодо інформації в системі",
            ],
            correctAnswer: 0
        } as TestQuestion,
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU",
            question: "Що таке кібернетична безпека в ІТС МОУ та ЗС України?",
            answers: [
                "Стан захищеності технологічних процесів, процесів військового управління та службових інтересів посадових осіб від наявних загроз в кіберпросторі",
                "Діяльність, спрямована на запобігання несанкціонованим діям з використанням комп’ютерних вірусів, їх копій, модифікацій щодо інформації в системі",
            ],
            correctAnswer: 0
        } as TestQuestion,
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU",
            question: "Що таке кібернетична безпека в ІТС МОУ та ЗС України?",
            answers: [
                "Стан захищеності технологічних процесів, процесів військового управління та службових інтересів посадових осіб від наявних загроз в кіберпросторі",
                "Діяльність, спрямована на запобігання несанкціонованим діям з використанням комп’ютерних вірусів, їх копій, модифікацій щодо інформації в системі",
            ],
            correctAnswer: 0
        } as TestQuestion,
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU",
            question: "Що таке кібернетична безпека в ІТС МОУ та ЗС України?",
            answers: [
                "Стан захищеності технологічних процесів, процесів військового управління та службових інтересів посадових осіб від наявних загроз в кіберпросторі",
                "Діяльність, спрямована на запобігання несанкціонованим діям з використанням комп’ютерних вірусів, їх копій, модифікацій щодо інформації в системі",
            ],
            correctAnswer: 0
        } as TestQuestion,
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU",
            question: "Що таке кібернетична безпека в ІТС МОУ та ЗС України?",
            answers: [
                "Стан захищеності технологічних процесів, процесів військового управління та службових інтересів посадових осіб від наявних загроз в кіберпросторі",
                "Діяльність, спрямована на запобігання несанкціонованим діям з використанням комп’ютерних вірусів, їх копій, модифікацій щодо інформації в системі",
            ],
            correctAnswer: 0
        } as TestQuestion,
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU",
            question: "Що таке кібернетична безпека в ІТС МОУ та ЗС України?",
            answers: [
                "Стан захищеності технологічних процесів, процесів військового управління та службових інтересів посадових осіб від наявних загроз в кіберпросторі",
                "Діяльність, спрямована на запобігання несанкціонованим діям з використанням комп’ютерних вірусів, їх копій, модифікацій щодо інформації в системі",
            ],
            correctAnswer: 0
        } as TestQuestion,
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU",
            question: "Що таке кібернетична безпека в ІТС МОУ та ЗС України?",
            answers: [
                "Стан захищеності технологічних процесів, процесів військового управління та службових інтересів посадових осіб від наявних загроз в кіберпросторі",
                "Діяльність, спрямована на запобігання несанкціонованим діям з використанням комп’ютерних вірусів, їх копій, модифікацій щодо інформації в системі",
            ],
            correctAnswer: 0
        } as TestQuestion,
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU",
            question: "Що таке кібернетична безпека в ІТС МОУ та ЗС України?",
            answers: [
                "Стан захищеності технологічних процесів, процесів військового управління та службових інтересів посадових осіб від наявних загроз в кіберпросторі",
                "Діяльність, спрямована на запобігання несанкціонованим діям з використанням комп’ютерних вірусів, їх копій, модифікацій щодо інформації в системі",
            ],
            correctAnswer: 0
        } as TestQuestion,

    ])

    return (
        <>
            <div className={"flex justify-start items-center min-h-[77vh] flex-col proba-pro-medium mb-10 mt-5"}>
                <p className={"proba-pro-bold text-[6vh]"}>Курс тренінг з питань кібернетичної безпеки</p>
                <div className={"border rounded shadow p-10  max-w-[75vw]"}>
                    <TestComponent test={test}/>
                </div>
            </div>
        </>
    );
};

export default CyberCoursePage;