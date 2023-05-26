import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {INews} from "../models/INews";
import NewsService from "../service/NewsService";
import NewsRow from "../components/news/NewsRow";
import PaginationControl from "../components/PaginationControl";

const NewsPage = () => {

    const {store} = useContext(Context)
    const [news, setNews] = useState<INews[]>([])
    const [page, setPage] = useState<number>(1)
    const [limit, setLimit] = useState<number>(8)
    let [countPages, setCountPages] = useState<number>(0)
    let countInRow = 4

    useEffect(() => {
        NewsService.getNewsPaginated(page, limit).then(res => {
            setNews(res.data)
        })
        NewsService.getCountNews().then(res => {
            setCountPages(Math.ceil(res.data / limit))
            setPage(1)
        })
    }, [])

    useEffect(() => {
        NewsService.getNewsPaginated(page, limit).then(res => {
            setNews(res.data)
        })
    }, [page])

    useEffect(() => {
        NewsService.getNewsPaginated(page, limit).then(res => {
            setNews(res.data)
        })
        NewsService.getCountNews().then(res => {
            setCountPages(Math.ceil(res.data / limit))
            setPage(1)
        })

    }, [limit])


    const genTable = () => {
        let table = []
        let flag = false;
        let tempNews: INews[] = []
        let counter = 0;

        for (let i = 0; i < news.length; i++) {
            if (counter <= countInRow - 2) {
                tempNews.push(news[i])
                counter++
            } else {
                tempNews.push(news[i])
                table.push(<NewsRow color={flag} news={tempNews}/>)
                tempNews = []
                counter = 0
                flag = !flag
            }
        }

        if (news.length % countInRow !== 0) {
            let lefts = news.length % countInRow
            let temp = []
            for (let i = 0; i < lefts; i++) {
                temp.push(news[news.length - i - 1])
            }
            table.push(<NewsRow news={temp} color={flag}/>)
        }
        return table
    }

    return (
        <>
            <p className={" text-center proba-pro-bold text-[6vh] mb-10"}>Новини</p>
            <PaginationControl countPages={countPages} page={page} setPage={setPage} limit={limit} setLimit={setLimit}/>
            <div className={"grid grid-cols-1 gap-8  justify-items-center "}>
                {<>{genTable()}</>}
            </div>
            <PaginationControl countPages={countPages} page={page} setPage={setPage} limit={limit} setLimit={setLimit}/>
        </>


    );
};

export default NewsPage;