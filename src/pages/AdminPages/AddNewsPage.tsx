import React, {useEffect, useState} from 'react';
import NewsCard from "../../components/cards/NewsCard";
import {Link} from "react-router-dom";
import {RoutesName} from "../../router/RoutesName";
import {INews} from "../../models/INews";
import NewsService from "../../service/NewsService"
import ErrorsBlock from "../../components/ErrorsBlock";

const AddNewsPage = () => {

    const [news, setNews] = useState<INews[]>([]);

    const [newNews, setNewNews] = useState<INews>({
        date: new Date()
    } as INews)
    const [errors, setErrors] = useState<string[]>([])

    useEffect(() => {
        NewsService.getNews(5).then(res => {
            setNews(res.data)
        })
    }, [])

    const handleFileChange = (event: any) => {
        setNewNews({...newNews, img: event.target.files[0]});
    };

    const addNews = () => {
        if (newNews.content !== undefined && newNews.name !== undefined) {
            NewsService.createNews(newNews).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        } else {
            setErrors([...errors, "Якесь поле введено некоректно"])
        }
    }


    return (
        <div className={"flex flex-col  justify-between "}>
            <div className={"bg-[#FFFF] grid grid-cols-1 px-[12vw] mb-8"}>

                <div className={"flex justify-between flex-col items-center mt-3 mb-3"}>
                    <p className={"proba-pro-bold text-3xl mb-3"}>
                        Додати нову новину
                    </p>
                    <div className={"grid grid-cols-2 proba-pro-medium border rounded p-4 mb-3 shadow-xl"}>
                        <div className={"col-span-2"}>
                            <ErrorsBlock errors={errors}/>
                        </div>
                        <p>Назва</p>
                        <input onChange={(e) => {
                            setNewNews({...newNews, name: e.target.value})
                            setErrors([])
                        }
                        } className={"rounded p-2 mb-3"} type="text"/>

                        <p>Зміст</p>
                        <textarea onChange={(e) => {
                            setNewNews({...newNews, content: e.target.value})
                            setErrors([])
                        }
                        } className={"mb-3"}/>

                        <p>Фото</p>
                        <input onChange={e => handleFileChange(e)} className={"mb-4"} type="file"/>

                        <div className={"flex justify-center col-span-2 mb-1"}>
                            <button onClick={() => addNews()}
                                    className={"border-2  col-span-2 hover:scale-110 duration-200 border-[#ffd423] px-8 py-2 rounded-[150px]"}>
                                Створити
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div className={"bg-[#F9F9F9] grid grid-cols-1 px-[12vw] "}>
                <div className={"flex text-3xl proba-pro-medium my-5"}>
                    <p>Новини</p>
                </div>
                <div className={"grid grid-cols-4"}>
                    {news.slice(0, 4).map((n, index) => (<NewsCard key={index} news={n}/>))}
                </div>
                <div className={"flex justify-end proba-pro-medium mr-5 mb-10"}>
                    <Link to={RoutesName.NEWS_PAGE} className={"hover:text-[#AF8742] duration-200"}>
                        Переглянути всі
                        <i className=" ml-1 bi bi-arrow-right"></i>
                    </Link>
                </div>
            </div>

        </div>

    );
};

export default AddNewsPage;