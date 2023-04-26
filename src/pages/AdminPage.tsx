import React from 'react';
import {Link} from "react-router-dom";
import {RoutesName} from "../router/RoutesName";

const AdminPage = () => {
    return (
        <>
            <div className={"flex flex-col justify-center items-center w-[100%] mt-5"}>
                <div className={"bg-white px-[10vw] "}>
                    <div className={"proba-pro-light text-[40px] flex flex-col items-center mb-5"}>
                        <div className={"flex flex-col items-start"}>
                            <p>Вітаємо на Адмін панелі</p>
                            <span className={"proba-pro-bold"}>Центра кібернетичної безпеки ІТС 🇺🇦</span>
                        </div>
                    </div>
                </div>
                <div className={"bg-[#F9F9F9] grid grid-cols-1 px-[12vw]"}>

                    <div className={"bg-[#F9F9F9] rounded-xl grid grid-cols-2  gap-10 p-8 mb-10"}>
                        <Link to={RoutesName.ADMIN_NEWS_PAGE}>
                            <div
                                className={"hover:cursor-pointer rounded-xl bg-[#F9F9F9] hover:bg-white hover:scale-105 duration-200 hover:shadow p-5"}>
                                <i className=" text-5xl text-[#899771] bi bi-newspaper"></i>
                                <div className={"mt-3"}>
                                    <p className={"proba-pro-bold"}>Додати Новину</p>
                                    <p>
                                        підтримуйте блог з найцікавішими новинами у сфері кіберзахисту усього світу!
                                        Редагуйте, додавайте, видаляйте!
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link to={RoutesName.ADMIN_ANT_PZ_PAGE}>
                            <div
                                className={"hover:cursor-pointer rounded-xl bg-[#F9F9F9] hover:bg-white hover:scale-105 duration-200 hover:shadow p-5"}>
                                <i className="text-5xl text-[#899771] bi bi-virus2"></i>
                                <div className={"mt-3"}>
                                    <p className={"proba-pro-bold"}>Додати антивірусне ПЗ</p>
                                    <p>
                                        додайте нову актуальну версію антивірусного програмного забезпечення до бази
                                    </p>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
                <div className={"bg-[#FFFF] grid grid-cols-1 px-[12vw]"}>
                    <div className={"bg-[#FFFFF] rounded-xl grid grid-cols-2  gap-10 p-8 mb-10"}>
                        <Link to={RoutesName.ADMIN_USERS_PAGE}>
                            <div
                                className={"hover:cursor-pointer rounded-xl bg-[#FFFF] hover:bg-[#F9F9F9] hover:scale-105 duration-200 hover:shadow p-5"}>
                                <i className="text-5xl text-[#899771] bi bi-person-video2"></i>
                                <div className={"mt-3"}>
                                    <p className={"proba-pro-bold"}>Бази користувачів</p>
                                    <p>
                                        переглянте дані користувачів веб-додатку
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link to={RoutesName.ADMIN_UPDATES_PAGE}>
                            <div
                                className={"hover:cursor-pointer rounded-xl bg-[#FFFF] hover:bg-[#F9F9F9] hover:scale-105 duration-200 hover:shadow p-5"}>
                                <i className="text-5xl text-[#899771]  bi bi-microsoft"></i>
                                <div className={"mt-3"}>
                                    <p className={"proba-pro-bold"}>Додати оновлення для прошивок і ОС</p>
                                    <p>
                                        додайте актуальну версію прошивки або операційної системи до бази
                                    </p>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>

                <div className={"bg-[#F9F9F9] grid grid-cols-1 px-[12vw]"}>
                    <div className={"bg-[#F9F9F9] rounded-xl grid grid-cols-2  gap-10 p-8 mb-10"}>
                        <Link to={RoutesName.ADMIN_ADDITIONAL_PZ_PAGE}>
                            <div
                                className={" hover:cursor-pointer rounded-xl bg-[#F9F9F9] hover:bg-white hover:scale-105 duration-200 hover:shadow p-5"}>
                                <i className="text-5xl text-[#899771]  bi bi-qr-code-scan"></i>
                                <div className={"mt-3"}>
                                    <p className={"proba-pro-bold"}>Додати додаткове ПЗ</p>
                                    <p>
                                        додайте додаткове програмне забезпечення до бази
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link to={RoutesName.ADMIN_FISHING_PAGE}>
                            <div
                                className={"hover:cursor-pointer rounded-xl bg-[#F9F9F9] hover:bg-white hover:scale-105 duration-200 hover:shadow p-5"}>
                                <i className="text-5xl text-[#899771]  bi bi-bug"></i>
                                <div className={"mt-3"}>
                                    <p className={"proba-pro-bold"}>Поповнити Фішинг базу</p>
                                    <p>
                                        додайте нові актуальні приклади загроз у вигляді Фішингу
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminPage;