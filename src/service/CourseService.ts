import $api from "../http";
import {ICourse} from "../models/ICourse";
import FtpService from "./FTPservice";
import {ICourseImg} from "../models/ICourseImg";

export class CourseService {


    static async addCourse(newCourse: any, images: ICourseImg[]) {
        for (let i = 0; i < newCourse.questions.length; i++) {
            newCourse.questions[i].img_href = await FtpService.getFileExtension(images[i + 1].file.name)
        }
        newCourse.img_href = await FtpService.getFileExtension(images[0].file.name)

        const res = await $api.post<ICourse>("admin/course", {course: newCourse})
        const course = res.data

        console.log(course)
        for (let i = 0; i < course.questions.length; i++) {
            FtpService.uploadFile(images[i + 1].file, `course_${course.id}_${course.questions[i].id}`).then(res => {
            }).catch(e => {
                throw e
            })
        }

        FtpService.uploadFile(images[0].file, `course_${course.id}`).then(res => {
            return course
        }).catch(e => {
            throw e
        })

    }

    static async getCourseById(courseId: number) {
        return await $api.get<ICourse>(`/course/${courseId}`)
    }

    static async getCoursesPartly() {
        return await $api.get<ICourse[]>("/course")
    }
}