import $api from "../http";
import {INews} from "../models/INews";
import FtpService from "./FTPservice";
import {AxiosResponse} from "axios";

export default class NewsService {
    static async createNews(news: INews): Promise<AxiosResponse<INews>> {
        FtpService.uploadFile(news.img, "news_" + news.date_pub.toISOString()).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
        return await $api.post('/admin/news', {
            ...news,
            img: undefined,
            imgHref: "news_" + news.date_pub.toISOString() + "." + await FtpService.getFileExtension(news.img.name)
        })
    }

    static async getNewsPaginated(page: number, limit: number) {
        return await $api.post('/news/paginated', {page, limit})
    }

    static async getCountNews() {
        return await $api.get('/news/count')
    }

    static async getNews(count: number) {
        return await $api.post('/news', {count})
    }

    static async getNewsById(id:number){
        return await $api.get(`/news?id=${id}`)
    }
}