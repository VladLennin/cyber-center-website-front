import React, {useContext, useEffect, useRef, useState} from 'react';
import NewsCard from "../../components/news/NewsCard";
import {Link} from "react-router-dom";
import {RoutesName} from "../../router/RoutesName";
import {INews} from "../../models/INews";
import NewsService from "../../service/NewsService"
import {Context} from "../../index";
import {IToast} from "../../models/IToast";
import {ToastTypes} from "../../models/enum/ToastTypes";
import {observer} from "mobx-react-lite";

const AddNewsPage = () => {

    const [news, setNews] = useState<INews[]>([]);
    const [newNews, setNewNews] = useState<INews>({
        date: new Date(),
        name: "",
        content: "",
        img: new File([], "empty", {})
    } as INews)

    const validExtensions = ['jpg', 'jpeg', 'png', 'gif'];

    const {store} = useContext(Context)

    useEffect(() => {
        NewsService.getNews(5).then(res => {
            setNews(res.data)
        })
    }, [])


    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const fileName = file.name;
            const fileExtension = fileName.split('.').pop().toLowerCase();

            if (validExtensions.includes(fileExtension)) {
                setNewNews({...newNews, img: event.target.files[0]});
            } else {
                store.addToggle({content: "Некоректне розширення файлу", type: ToastTypes.Warning} as IToast)
            }
        }
    };

    function useForceUpdate() {
        const [value, setValue] = useState(0);
        return () => setValue(value => value + 1);
    }

    const forceUpdate = useForceUpdate()

    const fileInputRef = useRef(null);

    const handleClearFile = () => {
        if (fileInputRef.current) {
            // @ts-ignore
            fileInputRef.current.value = null;
        }
    };

    const addNews = () => {
        if (newNews.content !== "" && newNews.name !== "" && newNews.img.name !== "empty") {
            NewsService.createNews(newNews).then(res => {
                store.addToggle({content: "Новина додана", type: ToastTypes.Successful} as IToast)
                news.push(res.data as INews)
                news.sort((item1, item2) => item2.id - item1.id)
                setNews(news)

                setNewNews({
                    date: new Date(),
                    name: "",
                    content: "",
                    img: new File([], "empty", {})
                } as INews)
                handleClearFile()

                forceUpdate()
            }).catch(err => {
                store.addToggle({content: "Відбулася помилка", type: ToastTypes.Error} as IToast)
            })
        } else {
            store.addToggle({content: "Поля некоректні", type: ToastTypes.Warning} as IToast)
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
                        <p>Назва</p>
                        <input value={newNews.name} onChange={(e) => {
                            setNewNews({...newNews, name: e.target.value})
                        }
                        } className={"rounded p-2 mb-3"} type="text"/>

                        <p>Зміст</p>
                        <textarea value={newNews.content} onChange={(e) => {
                            setNewNews({...newNews, content: e.target.value})
                        }
                        } className={"mb-3"}/>

                        <p>Фото</p>
                        <input ref={fileInputRef} required onChange={e => handleFileChange(e)} className={"mb-4"} type="file"/>

                        <div className={"col-span-2  flex justify-center mb-5 "}>
                            <img className={(newNews.img.name !== "empty" ? "  border-2  " : "  ") + "w-1/6"}
                                 src={URL.createObjectURL(newNews.img)} alt=""/>
                        </div>

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

export default observer(AddNewsPage);