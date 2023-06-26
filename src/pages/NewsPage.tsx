import React, {useEffect, useState} from 'react';
import {INews} from "../models/INews";
import NewsService from "../service/NewsService";
import NewsRow from "../components/news/NewsRow";
import PaginationControl from "../components/PaginationControl";
import {Link} from "react-router-dom";
import {RoutesName} from "../router/RoutesName";
import ReactHtmlParser from "html-react-parser";
import {FTP_URL_DOWNLOAD} from "../http";

const NewsPage = () => {

    const [news, setNews] = useState<INews[]>([])
    const [page, setPage] = useState<number>(1)
    const [limit, setLimit] = useState<number>(8)
    let [countPages, setCountPages] = useState<number>(0)
    const [searchString, setSearchString] = useState("")
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
        setSearchString("")

    }, [page])

    useEffect(() => {
        NewsService.getNewsPaginated(page, limit).then(res => {
            setNews(res.data)
        })
        NewsService.getCountNews().then(res => {
            setCountPages(Math.ceil(res.data / limit))
            setPage(1)
        })
        setSearchString("")

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
                table.push(<NewsRow key={news[i].id} color={flag} news={tempNews}/>)
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
            table.push(<NewsRow key={temp[0].id} news={temp} color={flag}/>)
        }
        return table
    }

    const [searchedNews, setSearchedNews] = useState<INews[]>([])

    const searchNews = (e: any) => {
        setSearchString(e.target.value)
        if (searchString.length > 3) {
            NewsService.searchNews(e.target.value, false).then(res => {
                setSearchedNews(res.data)
            }).catch(e => {
                console.log(e)
            })
        } else {
            setSearchedNews([])
        }

    }

    const searchNewsAll = () => {
        NewsService.searchNews(searchString, false).then(res => {
            setNews(res.data)
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <div onClick={() => {
            setSearchedNews([])
        }} className={"flex flex-col items-center justify-center mb-10"}>
            <p className={" text-center proba-pro-bold text-[6vh] mb-10"}>Новини
                <i className="bi bi-newspaper ml-4"></i>
            </p>
            <div className={"border rounded shadow py-10 w-3/4"}>

                <div className={"flex justify-between "}>
                    <PaginationControl countPages={countPages} page={page} setPage={setPage} limit={limit}
                                       setLimit={setLimit}/>
                    <div className={"w-full px-16  h-[45px] relative"}>
                        <div className={"flex "}>
                            <input onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.keyCode === 13) {
                                    searchNewsAll()
                                    setSearchString("")
                                    setSearchedNews([])
                                    e.currentTarget.blur()
                                }
                            }} onFocus={searchNews} value={searchString} onChange={searchNews}
                                   placeholder={"Пошук..."}
                                   className={" w-full border-2 border-gray-300 rounded-l-full"}
                                   type="text"/>
                            <button onClick={() => {
                                setSearchedNews([])
                                setSearchString("")
                            }}
                                    className={"rounded-r-full border-2 border-l-transparent border-gray-300 w-10 text-center flex items-center justify-center pr-1"}>
                                <i className="bi bi-x-lg"></i>
                            </button>
                            <button onClick={searchNewsAll}
                                    className={"flex gap-2 items-center ml-8 hover:text-[#AF8742] duration-200"}>
                                <i className="bi bi-search"></i>
                                Пошук
                            </button>
                        </div>

                        <div
                            className={(searchedNews.length === 0 ? " h-[0px] opacity-0 " : " h-auto px-8 py-2 bg-gray-300 background-opacity ") + "  duration-[600ms]  w-3/4 mt-3  absolute  rounded-lg"}>
                            {searchedNews.map(news => (
                                <Link to={RoutesName.NEWS_PAGE + `/${news.id}`}>
                                    <div
                                        className={"opacity-100 border-b-2 border-b-gray-500 mt-4 flex p-2 items-center"}>
                                        {
                                            news.img_href.includes("https")
                                                ?
                                                <img className={"h-[75px] mr-4 rounded"}
                                                     src={news.img_href}
                                                     alt="qwe"/>
                                                :
                                                <img className={"h-[75px] mr-4 rounded"}
                                                     src={FTP_URL_DOWNLOAD + news.img_href}
                                                     alt="qwe"/>
                                        }
                                        <div>
                                            <p>{ReactHtmlParser(news.title)}</p>
                                            <div className={"proba-pro-light text-sm text-right"}>
                                                {news?.date_pub.split("T")[1].split(":")[0]}:{news?.date_pub.split("T")[1].split(":")[1]} {news?.date_pub.split("T")[0]}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>
                <hr className={"mt-5 mx-10"}/>
                <div className={"grid grid-cols-1 gap-8  justify-items-center "}>
                    {<>{genTable()}</>}
                </div>
                <PaginationControl countPages={countPages} page={page} setPage={setPage} limit={limit}
                                   setLimit={setLimit}/>
            </div>
        </div>


    );
};

export default NewsPage;