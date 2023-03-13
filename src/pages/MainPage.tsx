import React, {FC} from 'react';

// @ts-ignore
import esetShieldlogo from "./../assets/Lock shield.svg"
// @ts-ignore
import eyeScan from "./../assets/eye-scan 1.svg"
// @ts-ignore
import laptop from "./../assets/laptop 1.svg"
// @ts-ignore
import padlock1 from "./../assets/padlock1.svg"
// @ts-ignore
import frame37 from "./../assets/Frame 37.svg"
// @ts-ignore
import rectangle from "./../assets/Rectangle.svg"
// @ts-ignore
import laptopMainPage from "./../assets/laptopMainPage.svg"
import {INews} from "../models/INews";
import NewsCard from "../components/cards/NewsCard";


const MainPage: FC = () => {

    const news: INews[] = [{
        img: "/Users/vladlenmarchenko/WebstormProjects/cyber-center-website-front/src/assets/laptopMainPage.svg",
        link: "/news/1",
        title: "Some news",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis cumque facilis mollitia nisi, possimus? Commodi esse neque repellat sit? Assumenda deleniti ea impedit magni necessitatibus nulla perferendis repellat voluptate?",
        date: "01/01/01"
    },
        {
            img: "/Users/vladlenmarchenko/WebstormProjects/cyber-center-website-front/src/assets/laptopMainPage.svg",
            link: "/news/1",
            title: "Some news",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis cumque facilis mollitia nisi, possimus? Commodi esse neque repellat sit? Assumenda deleniti ea impedit magni necessitatibus nulla perferendis repellat voluptate?",
            date: "02/01/01"
        },
        {
            img: "/Users/vladlenmarchenko/WebstormProjects/cyber-center-website-front/src/assets/laptopMainPage.svg",
            link: "/news/1",
            title: "Some news",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis cumque facilis mollitia nisi, possimus? Commodi esse neque repellat sit? Assumenda deleniti ea impedit magni necessitatibus nulla perferendis repellat voluptate?",
            date: "03/01/01"
        },
        {
            img: "/Users/vladlenmarchenko/WebstormProjects/cyber-center-website-front/src/assets/laptopMainPage.svg",
            link: "/news/1",
            title: "Some news",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis cumque facilis mollitia nisi, possimus? Commodi esse neque repellat sit? Assumenda deleniti ea impedit magni necessitatibus nulla perferendis repellat voluptate?",
            date: "04/01/01"
        },
        {
            img: "/Users/vladlenmarchenko/WebstormProjects/cyber-center-website-front/src/assets/laptopMainPage.svg",
            link: "/news/1",
            title: "Some news",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis cumque facilis mollitia nisi, possimus? Commodi esse neque repellat sit? Assumenda deleniti ea impedit magni necessitatibus nulla perferendis repellat voluptate?",
            date: "05/01/01"
        },
        {
            img: "/Users/vladlenmarchenko/WebstormProjects/cyber-center-website-front/src/assets/laptopMainPage.svg",
            link: "/news/1",
            title: "Some news",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis cumque facilis mollitia nisi, possimus? Commodi esse neque repellat sit? Assumenda deleniti ea impedit magni necessitatibus nulla perferendis repellat voluptate?",
            date: "06/01/01"
        },
        {
            img: "/Users/vladlenmarchenko/WebstormProjects/cyber-center-website-front/src/assets/laptopMainPage.svg",
            link: "/news/1",
            title: "Some news",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis cumque facilis mollitia nisi, possimus? Commodi esse neque repellat sit? Assumenda deleniti ea impedit magni necessitatibus nulla perferendis repellat voluptate?",
            date: "07/01/01"
        }]

    return (
        <div className={"flex flex-col justify-center items-center w-[100%] mt-5"}>
            <div className={"bg-white px-[10vw]"}>
                <div className={"proba-pro-light text-[40px] flex flex-col items-center mb-5"}>
                    <div className={"flex flex-col items-start"}>
                        <p>Вітаємо на порталі</p>
                        <span className={"proba-pro-bold"}>Центра кібернетичної безпеки ІТС 🇺🇦</span>
                    </div>
                </div>
                <div className={"bg-[#F9F9F9] rounded-xl grid grid-cols-4 gap-10 p-8 mb-10"}>
                    <div
                        className={"rounded-xl bg-[#F9F9F9] hover:bg-white hover:scale-105 duration-200 hover:shadow p-5"}>
                        <img src={esetShieldlogo} alt=""/>
                        <div className={"mt-3"}>
                            <p className={"proba-pro-bold"}>ESET Endpoint Security</p>
                            <p>
                                антивірусне рішення для забезпечення захисту від різних видів загроз і крадіжки
                                конфіденційної інформації.
                            </p>
                        </div>
                    </div>

                    <div
                        className={"rounded-xl bg-[#F9F9F9] hover:bg-white hover:scale-105 duration-200 hover:shadow p-5"}>
                        <img src={eyeScan} alt=""/>
                        <div className={"mt-3"}>
                            <p className={"proba-pro-bold"}>HX agent (FireEye)</p>
                            <p>
                                інструмент для виявлення, аналізу інцидентів і оперативного підтвердження впливів на АРМ
                            </p>
                        </div>
                    </div>

                    <div
                        className={"rounded-xl bg-[#F9F9F9] hover:bg-white hover:scale-105 duration-200 hover:shadow p-5"}>
                        <img src={padlock1} alt=""/>
                        <div className={"mt-3"}>
                            <p className={"proba-pro-bold"}>Бази даних</p>
                            <p>
                                офлайн архів сигнатур для оновлення антивірусних продуктів, які не підключенні до мережі
                            </p>
                        </div>
                    </div>

                    <div
                        className={"rounded-xl bg-[#F9F9F9] hover:bg-white hover:scale-105 duration-200 hover:shadow p-5"}>
                        <img src={laptop} alt=""/>
                        <div className={"mt-3"}>
                            <p className={"proba-pro-bold"}>Ключі активації</p>
                            <p>
                                заявка на отримання файлу автономної ліцензії для активації ESET на АРМ без доступу до
                                мереж
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"bg-[#F9F9F9] grid grid-cols-2 px-[12vw]"}>
                <div className={"proba-pro-light flex flex-col items-start justify-center "}>
                    <div className={"mb-5"}>
                        <p className={"proba-pro-bold text-4xl"}>Фішинг база</p>
                        <div className={"bg-[#AF8742] px-2 py-1 text-white inline"}>Новий розділ</div>
                        <p className={"my-3"}>
                            Загальна база електронних листів, які містять шкідливі файли або посилання
                        </p>
                        <p className={"flex mb-1"}>
                            <img src={rectangle} alt=""/>
                            перевірте лист на злочинні наміри
                        </p>
                        <p className={"flex mb-1"}>
                            <img src={rectangle} alt=""/>
                            отримайте рекомендації про недопущення інфікування
                        </p>
                        <p className={"flex mb-1"}>
                            <img src={rectangle} alt=""/>
                            вдоскональте систему поповнивши базу
                        </p>
                    </div>
                    <button
                        className={"bg-black rounded-[150px]  text-white px-10  py-2 flex justify-between items-center proba-pro-medium"}>
                        <div>Скористатися</div>
                        <i className="bi bi-arrow-right ml-3 text-lg text-[#AF8742]"></i>
                    </button>

                </div>

                <img src={frame37} alt=""/>
            </div>

            <div className={"bg-white px-[10vw] grid grid-cols-2 pt-[5vh] gap-12"}>
                <img src={laptopMainPage} alt=""/>
                <div className={"proba-pro-light flex flex-col items-start justify-center "}>
                    <div className={"mb-5"}>
                        <p className={"proba-pro-bold text-4xl"}>Курс з кібергігієни</p>
                        <p className={"my-3"}>
                            пройти тест з метою підвищення та визначення рівня обізнаності користувачів в сфері
                            кібернетичнії безпеки
                        </p>
                        <p className={"flex mb-2"}>
                            <img src={rectangle} alt=""/>
                            прослухайте лекцію про основи кібернетичної безпеки
                        </p>
                        <p className={"flex mb-2"}>
                            <img src={rectangle} alt=""/>
                            отримайте оцінку ваших знань
                        </p>
                        <p className={"flex mb-2"}>
                            <img src={rectangle} alt=""/>
                            убезпечте себе від інцидентів кібернетичної безпеки
                        </p>
                    </div>

                    <div className={"flex"}>
                        <button
                            className={"bg-black rounded-[150px]  text-white px-10  py-2 flex justify-between items-center proba-pro-medium mr-5"}>
                            <div>Прослухати лекцію</div>
                            <i className="bi bi-arrow-right ml-3 text-lg text-[#AF8742]"></i>
                        </button>

                        <button
                            className={"rounded-[150px]  border-black border-2  px-10  py-2 flex justify-between items-center proba-pro-medium"}>
                            <div>Тест</div>
                            <i className="bi bi-arrow-right ml-3 text-lg "></i>
                        </button>
                    </div>

                </div>
            </div>

            <div className={"bg-[#F9F9F9]  px-[12vw] w-[100%] flex flex-col justify-center"}>
                <div className={"flex text-3xl proba-pro-medium my-5"}>
                    <p>Новини</p>
                </div>
                <div className={"flex  flex-wrap"}>
                    {news.slice(0, 4).map((n,index) => (<NewsCard key={index} news={n}/>))}
                </div>
                <div className={"flex justify-end proba-pro-medium mr-5 mb-10"}>
                    <button>
                        Переглянути всі
                        <i className="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainPage;