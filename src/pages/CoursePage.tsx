import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ICourse} from "../models/ICourse";
import TestComponent from "../components/TestComponent";
import {CourseService} from "../service/CourseService";
import UserService from "../service/UserService";
import {IUser} from "../models/IUser";

const CoursePage = () => {

    const {id} = useParams()

    const [course, setCourse] = useState<ICourse>()
    const [user, setUser] = useState<IUser>({} as IUser)

    useEffect(() => {
        CourseService.getCourseById(Number(id)).then(res => {
            setCourse(res.data)
            console.log(course)
            UserService.getUserByPk(res.data.userId).then(res => {
                setUser(res.data)
            }).catch(e => {
                console.log(e)
            })
        }).catch(e => {
            console.log(e)
        })


    }, [])

    return (
        <>
            <div className={"flex justify-start items-center min-h-[77vh] flex-col proba-pro-medium mb-10 mt-5 w-full"}>
                <p className={"proba-pro-bold text-[6vh]"}>{course?.name}</p>
                <div className={"border rounded shadow px-10 pt-10 py-3  max-w-[75vw] w-[75vw]"}>
                    {course &&
                        <TestComponent test={course}/>
                    }

                    <div className={"flex w-full flex-col items-end justify-end proba-pro-light mt-4"}>
                        <div>
                            <div className={"flex gap-x-2"}>
                                <p className={"proba-pro-bold"}>Автор:</p>
                                <p> {user.rank} {user.name} {user.surname}</p>
                            </div>
                            <p>
                                {
                                    course &&
                                    <div className={"flex gap-x-2"}>
                                        <p className={"proba-pro-bold"}>Дата створення:</p>
                                        {course?.createdAt.split("T")[1].split(":")[0]}:{course?.createdAt.split("T")[1].split(":")[1]} {course?.createdAt.split("T")[0]}
                                    </div>
                                }
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CoursePage;