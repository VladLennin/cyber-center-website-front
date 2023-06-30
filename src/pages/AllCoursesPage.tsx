import React, {useContext, useEffect, useState} from 'react';
import {ICourse} from "../models/ICourse";
import {Context} from "../index";
import {CourseService} from "../service/CourseService";
import {Link} from 'react-router-dom';
import {RoutesName} from "../router/RoutesName";
import {FTP_URL_DOWNLOAD, FTP_URL_UPLOAD} from "../http";

const AllCoursesPage = () => {

    const [courses, setCourses] = useState<ICourse[]>([])

    const {store} = useContext(Context)

    useEffect(() => {
        CourseService.getCoursesPartly().then(res => {
            setCourses(res.data)
            store.setLoading(true)
        }).then(() => {
            store.setLoading(false)
        }).catch(e => {
            console.log(e)
        })
        console.log(courses)
    }, [])

    return (
        <>
            <div className={"flex justify-start items-center min-h-[77vh] flex-col proba-pro-medium mb-10 mt-5"}>
                <p className={"proba-pro-bold text-[6vh]"}>Навчальні курси для тренінгу</p>
                <div className={"border rounded shadow p-10 min-h-[65vh]  grid grid-cols-3 gap-10 w-[75vw] place-content-start"}>
                    {courses.map(course => (
                        <Link to={RoutesName.COURSES_PAGE + `/${course.id}`}>
                            <div className={"flex gap-x-8 items-center border rounded shadow px-5 py-3 hover:bg-gray-300 hover:scale-105 duration-300 text-center"}>
                                <img className={"h-24 rounded-lg"} src={FTP_URL_DOWNLOAD+course.img_href} alt=""/>
                                <p className={"text-center w-full"}>{course.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AllCoursesPage;