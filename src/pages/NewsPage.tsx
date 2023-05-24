import React, {ReactNode, useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {Link} from "react-router-dom";
import {RoutesName} from "../router/RoutesName";
import {INews} from "../models/INews";
import NewsService from "../service/NewsService";
import NewsCard from "../components/cards/NewsCard";

const NewsPage = () => {

    //test

    const {store} = useContext(Context)
    const [news, setNews] = useState<INews[]>([])

    useEffect(() => {
        NewsService.getNews(100).then(res => {
            setNews(res.data)
        })
    }, [])

    return (
        <>

            <p className={" text-center proba-pro-bold text-[6vh] mb-10"}>Новини</p>
            <div className={"grid grid-cols-3 gap-8  justify-items-center mx-10"}>
                {news.map(item => (
                    <NewsCard news={item}/>
                ))}
            </div>
        </>


    );
};

export default NewsPage;