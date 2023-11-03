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
            img_href: "news_" + news.date_pub.toISOString() + "." + await FtpService.getFileExtension(news.img.name),
            created_at: new Date()
        })
    }

    static async getNewsPaginated(page: number, limit: number) {
        return $api.post('/news/paginated', {page, limit})
    }

    static async getCountNews() {
        return $api.get('/news/count')
    }

    static async getNews() {
        return console.log($api.get<INews[]>('/news'))
    }

    static async getNewsById(id: number) {
        return $api.get(`/news?id=${id}`)
    }

    static async searchNews(searchString: string, all: boolean) {
        return $api.post('/news/search', {searchString: searchString, all: all})
    }
}