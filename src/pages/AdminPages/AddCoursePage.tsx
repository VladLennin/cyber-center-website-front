import React, {useContext, useState} from 'react';
import {IQuestion} from "../../models/IQuestion";
import {ICourse} from "../../models/ICourse";
import {IAnswer} from "../../models/IAnswer";
import {CourseService} from "../../service/CourseService";
import {Context} from "../../index";
import {ToastTypes} from "../../models/enum/ToastTypes";
import {ICourseImg} from "../../models/ICourseImg";
import {IToast} from "../../models/IToast";
import {useNavigate} from "react-router-dom";
import {RoutesName} from "../../router/RoutesName";

const AddCoursePage = () => {

    const [course, setCourse] = useState<ICourse>({} as ICourse)
    const [questions, setQuestions] = useState<IQuestion[]>([])
    const [answers, setAnswers] = useState<IAnswer[]>([])
    const [images, setImages] = useState<ICourseImg[]>([])

    const {store} = useContext(Context)
    const navigate = useNavigate()
    const changeStateQuestion = (questionId: number, answerNumber: number, e: any) => {
        for (let i = 0; i < answers.length; i++) {
            if (answers[i].questionId === questionId && answers[i].number === answerNumber) {
                answers[i].text = e.target.value
                answers[i].number = answerNumber
            }
        }
        addAnswersToQuestions()
    }

    const addAnswersToQuestions = () => {
        for (let i = 0; i < questions.length; i++) {
            questions[i].answers = []
        }

        for (let i = 0; i < questions.length; i++) {
            for (let j = 0; j < answers.length; j++) {
                if (questions[i].id === answers[j].questionId) {
                    if (!questions[i].answers) {
                        questions[i].answers = []
                    }
                    questions[i].answers.push(answers[j])
                }
            }
        }

        course.questions = questions
    }

    const setCorrectAnswer = (questionId: number, number: number) => {
        questions[questionId].correctAnswer = number
        addAnswersToQuestions()
    }

    const createNewCourse = () => {
        CourseService.addCourse(course, images).then(res => {
            store.addToast({type: ToastTypes.Successful, content: "Курс успішно створений!"} as IToast)
            console.log(images)
            navigate(RoutesName.COURSES_PAGE)
        }).catch(e => {
            store.addToast({type: ToastTypes.Error, content: "Виникла помилка!"} as IToast)
        })
    }

    const handleSelectFile = (e: any, questionId: number) => {
        if (images.filter(img => img.id === questionId).length !== 0) {
            for (let i = 0; i < images.length; i++) {
                if (images[i].id === questionId) {
                    images[i].file = e.target.files[0]
                    setImages(images)
                }
            }

        } else {
            setImages([...images, {file: e.target.files[0], id: questionId} as ICourseImg])
        }
    }

    const removeQuestion = (questionId: number) => {
        setQuestions(questions.filter(que => que.id != questionId)) 
        setImages(images.filter(img => img.id != questionId + 1))
    }

    return (
        <div className={"flex flex-col items-center proba-pro-medium text-xl "}>
            <p className={"proba-pro-bold text-5xl mb-3 flex items-center gap-5"}>
                Створити новий курс
                <i className="text-5xl bi bi-journal-bookmark"></i>
            </p>
            <div className={"grid grid-cols-2 gap-5 items-center border p-8 shadow-md mb-14 max-w-[65%] w-[65%]"}>
                <p>Назва курсу</p>
                <input onChange={(e) => {
                    setCourse({...course, name: e.target.value})
                }} className={"rounded-lg"} type="text"/>

                <p>Зображення курсу</p>
                <input onChange={e => handleSelectFile(e, 0)} className={"rounded-lg"} type="file"/>

                <hr className={"col-span-2"}/>

                <p className={"col-span-2 text-3xl text-center proba-pro-bold"}>
                    Питання
                </p>

                <div className={"col-span-2"}>
                    <div className={"grid grid-cols-1 gap-10"}>
                        {questions.map((que, index) => (
                            <div
                                className={"w-full border rounded-lg px-2 py-3 grid grid-cols-8 shadow mb-5"}>
                                <div className={"px-4 py-2"}>{index + 1}.</div>
                                <div className={"col-span-7 "}>
                                    <div className={"grid grid-cols-11 gap-x-10 mb-2"}>
                                        <textarea onChange={e => {
                                            questions[index].question = e.target.value
                                            questions[index].correctAnswer = 0
                                            setQuestions(questions)
                                            console.log(questions)
                                        }} className={"rounded-lg col-span-5"} placeholder={"Питання"}/>
                                        <input className={"col-span-5"} onChange={e => handleSelectFile(e, que.id + 1)}
                                               placeholder={"Зображення"}
                                               type="file"/>
                                        <div
                                            className={"flex flex-col items-end justify-start col-span-1 px-3 text-2xl"}>
                                            <button onClick={() => {
                                                removeQuestion(que.id)
                                            }} className={"hover:text-red-500 duration-200 hover:scale-105"}>
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <hr className={"mt-8"}/>

                                    <p className={"text-2xl proba-pro-bold my-3"}> Відповіді:</p>

                                    <div className={"grid grid-cols-2 gap-3"}>
                                        {answers.filter(ans => ans.questionId === que.id).map((ans, index) => (
                                            <div className={"flex items-center gap-3"}>
                                                <p>{index + 1}.</p>
                                                <textarea onChange={e => {
                                                    changeStateQuestion(ans.questionId, index, e)
                                                }} className={"w-3/4 rounded-lg"} placeholder={"Відповідь"}/>
                                                <input defaultChecked={index == 0} onChange={e => {
                                                    setCorrectAnswer(que.id, index)
                                                }} name={`${que.id}`} type="radio"/>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={"col-span-8 flex justify-end mt-3 mr-2"}>
                                    <button
                                        className={"border-2 rounded-full border-yellow-200 py-2 px-3 max-h-[50px]"}
                                        onClick={() => {
                                            setAnswers([...answers, {
                                                text: "",
                                                questionId: que.id,
                                                number: answers.filter(ans => ans.questionId === que.id).length
                                            } as IAnswer])
                                        }}>
                                        Додати відповідь
                                    </button>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className={"col-span-2 text-center"}>
                        <button onClick={createNewCourse}
                                className={"px-3 py-2 border-2 border-yellow-200 rounded-full mr-5"}>Створити
                        </button>
                        <button onClick={() => {
                            if (images.length !== questions.length) {
                                answers.push({
                                    text: "",
                                    questionId: questions.length,
                                    number: 0
                                })
                                answers.push({
                                    text: "",
                                    questionId: questions.length,
                                    number: 1
                                })
                                setAnswers(answers)
                                setQuestions([...questions, {id: questions.length} as IQuestion])
                            } else {
                                store.addToast({type: ToastTypes.Warning, content: "Не всі зображення додані"})
                            }
                        }} className={"rounded-full border-2 p-2 text-lg border-yellow-200"}>
                            Додати питання
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddCoursePage;