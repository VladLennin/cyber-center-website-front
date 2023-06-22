import React, {FC, useEffect, useState, ReactNode} from 'react';
import {useParams} from "react-router-dom";
import {INews} from "../models/INews";
import NewsService from "../service/NewsService";
import {FTP_URL_DOWNLOAD} from "../http";
import ReactHtmlParser from 'html-react-parser';


const NewsPageDetailed: FC = () => {
    const {id} = useParams()
    const [news, setNews] = useState<INews>({} as INews)
    const [content, setContent] = useState<ReactNode>()
    const [title, setTitle] = useState<ReactNode>()
    useEffect(() => {
        NewsService.getNewsById(Number(id)).then(res => {
            setNews(res.data)
            setContent(ReactHtmlParser(news?.content))
            setTitle(ReactHtmlParser(news?.title))
        }).catch(err => {
            console.log(err)
        })
    })


    return (
        <div className={"w-screen flex flex-col items-center justify-center mb-10 mt-10"}>
            <p className={"proba-pro-bold text-[4vh] w-1/2 text-center"}>
                {title}
            </p>
            <div className={"border rounded shadow justify-center flex flex-col items-center p-10 w-3/5"}>
                <div className={" w-full  flex flex-col justify-center"}>
                    <div className={"flex justify-center"}>
                    {
                        news.img_href?.includes("https")
                            ?
                            <img className={"rounded-2xl border-[6px]  "} src={news.img_href} alt=""/>
                            :
                            <img className={"rounded-2xl border-[6px] "} src={FTP_URL_DOWNLOAD + news.img_href} alt=""/>
                    }
                    </div>

                    <div className={"proba-pro-light p-10"}>
                        {content}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewsPageDetailed;