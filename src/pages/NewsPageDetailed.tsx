import React, {FC, useEffect, useState, ReactNode} from 'react';
import {useParams} from "react-router-dom";
import {INews} from "../models/INews";
import NewsService from "../service/NewsService";
import {FTP_URL_DOWNLOAD} from "../http";
import ReactHtmlParser from 'html-react-parser';
// @ts-ignore
import tsnLogo from "../assets/tsnLogo.png";
// @ts-ignore
import cyberLogo from "../assets/headerLogo.svg";
import "../style/news-page.css"


const NewsPageDetailed: FC = () => {
    const {id} = useParams()
    const [news, setNews] = useState<INews>({} as INews)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        NewsService.getNewsById(Number(id)).then(res => {
            setNews(res.data)
        }).then(() => {
            setIsLoading(false)
        }).catch(err => {
            console.log(err)
        })
    }, [])


    return (
        isLoading ? <div>Loading...</div> :
            <div className={"w-screen flex flex-col items-center justify-center mb-10 mt-10 detailed-news"}>
                <p className={"proba-pro-bold text-[4vh] w-1/2 text-center"}>
                    {ReactHtmlParser(news.title)}
                </p>
                <div className={"border rounded shadow justify-center flex flex-col items-center p-10 w-3/5"}>
                    <div className={" w-full  flex flex-col justify-center"}>
                        <div className={"flex justify-center"}>
                            {
                                news.img_href?.includes("https")
                                    ?
                                    <img className={"rounded-2xl border-[6px]  "} src={news.img_href} alt=""/>
                                    :
                                    <img className={"rounded-2xl border-[6px] "} src={FTP_URL_DOWNLOAD + news.img_href}
                                         alt=""/>
                            }
                        </div>
                        <div className={"flex w-full justify-center mt-6"}>
                            <div className={"flex justify-between mb-4 items-center w-1/2"}>
                                {news.date_pub &&
                                    <div className={"proba-pro-light text-[#909090]"}>
                                        {news?.date_pub.split("T")[1].split(":")[0]}:{news?.date_pub.split("T")[1].split(":")[1]} {news?.date_pub.split("T")[0]}
                                    </div>
                                }
                                {
                                    news.img_href?.includes("https") ?
                                        <img className={"h-5"} src={tsnLogo} alt=""/>
                                        :
                                        <div className={"bg-[#232323] px-2 py-1 rounded"}>
                                            <img className={"h-8"} src={cyberLogo} alt=""/>

                                        </div>
                                }
                            </div>
                        </div>

                        <div className={"proba-pro-light p-10"}>
                            {ReactHtmlParser(news.content)}
                        </div>
                    </div>

                </div>
            </div>
    );
};

export default NewsPageDetailed;