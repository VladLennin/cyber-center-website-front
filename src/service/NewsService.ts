import $api from "../http";
import {INews} from "../models/INews";
import FtpService from "./FTPservice";
import {log} from "util";

export default class NewsService {
    static async createNews(news: INews): Promise<INews> {
        FtpService.uploadFile(news.img, "news_" + news.date.toISOString()).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
        return $api.post('/admin/news', {
            ...news,
            img: undefined,
            imgHref: "news_" + news.date.toISOString() + "." + await FtpService.getFileExtension(news.img.name)
        })
    }

    static async getNews(count:number){
        return $api.post('/news',{count})
    }
}