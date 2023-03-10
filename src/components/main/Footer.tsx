import React from 'react';
// @ts-ignore
import footerLogo from "./../../assets/footerLogo.svg"
// @ts-ignore
import betaLogo from "./../../assets/Beta.svg"
// @ts-ignore
import signalLogo from "../../assets/SignalLogo.svg"
// @ts-ignore
import topArrow from "../../assets/TopArrow.svg"
import {RoutesName} from "../../router/RoutesName";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className={"grid grid-cols-12 bg-[#232323] px-[10vw] text-[12px] text-white py-5 gap-10 footer"}>
                <div className={"col-span-3"}>
                    <div className={""}>
                        <img src={footerLogo} alt=""/>
                    </div>
                    <div className={"flex items-start justify-center mt-8 mb-2"}>
                        <img src={betaLogo} className={"mr-3 ]"} alt=""/>
                        <p className={"text-[12px] proba-pro-light "}>
                            Портал працює у тестовому режимі. Окремі функції можуть не працювати. Якщо ви маєте
                            зауваження або пропозиції, будь ласка, напишіть нам: csoc@post.mil.gov.ua
                        </p>
                    </div>
                    <div>
                        <p className={"text-[12px]"}>© Центр кібернетичної безпеки ІТС - 2023</p>
                    </div>
                </div>
                <div className={"col-span-2 "}>
                    <div>
                        <Link className={" hover:text-[#AF8742] duration-200"} to={RoutesName.MAIN_PAGE}>
                            <button className={"mb-4"}>
                                Головна
                            </button>
                        </Link>
                    </div>
                    <div>
                        <p className={"text-[#909090]"}>
                            Програмне забезпечення
                        </p>
                    </div>
                    <div>
                        <Link className={" hover:text-[#AF8742] duration-200"} to={RoutesName.ANTIVIRUSES_PAGE}>
                            <button>
                                Антивірусне ПЗ
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link className={" hover:text-[#AF8742] duration-200"} to={RoutesName.UPDATES_PAGE}>
                            <button>
                                Оновлення прошивок і ОС
                            </button>
                        </Link>
                    </div>

                    <div>
                        <Link className={" hover:text-[#AF8742] duration-200"} to={RoutesName.ADDITIONAL_PZ}>
                            <button>
                                Додаткове ПЗ
                            </button>
                        </Link>
                    </div>
                    <div>
                        <p className={"text-[#909090] mt-4"}>
                            Документація
                        </p>
                    </div>
                    <div>
                        <Link className={" hover:text-[#AF8742] duration-200"} to={RoutesName.FISHING_PAGE}>
                            <button>
                                Інструкція зі встановлення
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link className={" hover:text-[#AF8742] duration-200"} to={RoutesName.FISHING_PAGE}>
                            <button>
                                Налаштування СЕДО
                            </button>
                        </Link>
                    </div>


                </div>
                <div className={"col-span-2 proba-pro-bold"}>
                    <div>
                        <Link className={" hover:text-[#AF8742] duration-200"} to={RoutesName.FISHING_PAGE}>
                            <button>
                                Фішинг
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link className={" hover:text-[#AF8742] duration-200"} to={RoutesName.CYBER_COURSE_PAGE}>
                            <button>
                                Курс з кібергігієни
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link className={" hover:text-[#AF8742] duration-200"} to={RoutesName.NEWS_PAGE}>
                            <button>
                                Новини
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link className={" hover:text-[#AF8742] duration-200"} to={RoutesName.CONTACTS_PAGE}>
                            <button>
                                Контакти
                            </button>
                        </Link>
                    </div>

                    <div className={"mt-3"}>
                        <Link className={" hover:text-[#AF8742] duration-200"} to={RoutesName.FAQ}>
                            <button className={"proba-pro-light"}>
                                Поширені питання
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link className={" hover:text-[#AF8742] duration-200"} to={RoutesName.LAW_BASE}>

                            <button className={"text-start proba-pro-light"}>
                                Нормативно-правова база
                            </button>
                        </Link>
                    </div>

                </div>

                <div className={"col-span-3 flex flex-col justify-between h-[60%]"}>

                    <div>
                        <p>
                            Звʼязатися з нами:
                        </p>
                    </div>

                    <div>
                        <p>
                            <span className={"text-[#909090]"}>ATC:</span> 62 374 82
                        </p>
                    </div>

                    <div>
                        <p>
                            <span className={"text-[#909090]"}>ЗСУ-002:</span> 368 64
                        </p>
                    </div>

                    <div>
                        <p>
                            <span className={"text-[#909090]"}>Електронна пошта:</span> csoc@post.mil.gov.ua
                        </p>
                    </div>

                    <div className={"flex"}>
                        <img className={"mr-5"} src={signalLogo} alt=""/>
                        <Link className={" hover:text-[#AF8742] duration-200"} to={RoutesName.SIGNAL}>
                            <button>Написати в Signal</button>
                        </Link>
                    </div>
                </div>

                <div className={"col-span-2 h-[100%] flex flex-col justify-center items-center"}>
                    <button>
                        <img src={topArrow} alt=""/>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Footer;