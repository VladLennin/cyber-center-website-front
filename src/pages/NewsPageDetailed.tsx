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
        <div className={"w-screen flex flex-col items-center justify-center mb-10"}>
            <p className={"proba-pro-bold text-[6vh] "}>
                {news.name}
            </p>
            <div className={"border rounded shadow justify-center flex flex-col items-center p-10 w-3/4"}>
                <div className={"flex w-1/2"}>
                    <img className={"rounded-2xl border-[6px]"} src={FTP_URL_DOWNLOAD + news.imgHref} alt=""/>
                </div>

                <div className={"proba-pro-light p-10"}>
                    {news.content}
                </div>
            </div>
        </div>
    );
};

export default NewsPageDetailed;