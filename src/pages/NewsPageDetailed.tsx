import React, {FC, useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {INews} from "../models/INews";
import NewsService from "../service/NewsService";
import {Context} from "../index";
import {FTP_URL_DOWNLOAD} from "../http";


const NewsPageDetailed: FC = () => {
    const {id} = useParams()
    const [news, setNews] = useState<INews>({} as INews)
    const {store} = useContext(Context)

    useEffect(() => {
        NewsService.getNewsById(Number(id)).then(res => {
            setNews(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className={"w-screen flex items-center justify-center"}>
            <div className={"border rounded p-10 "}>
                {news.name}
                {news.content}
                <img className={"w-1/2"} src={FTP_URL_DOWNLOAD+news.imgHref} alt=""/>
            </div>
        </div>
    );
};

export default NewsPageDetailed;