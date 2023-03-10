import React from 'react';
// @ts-ignore
import footerLogo from "./../../assets/footerLogo.svg"
// @ts-ignore
import betaLogo from "./../../assets/Beta.svg"
// @ts-ignore
import signalLogo from "../../assets/SignalLogo.svg"
// @ts-ignore
import topArrow from "../../assets/TopArrow.svg"

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
                        <button className={"mb-4"}>
                            Головна
                        </button>
                    </div>
                    <div>
                        <p className={"text-[#909090]"}>
                            Програмне забезпечення
                        </p>
                    </div>
                    <div>
                        <button>
                            Антивірусне ПЗ
                        </button>
                    </div>
                    <div>
                        <button>
                            Оновлення прошивок і ОС
                        </button>
                    </div>

                    <div>
                        <button>
                            Додаткове ПЗ
                        </button>
                    </div>
                    <div>
                        <p className={"text-[#909090] mt-4"}>
                            Документація
                        </p>
                    </div>
                    <div>
                        <button>
                            Інструкція зі встановлення
                        </button>
                    </div>
                    <div>
                        <button>
                            Налаштування СЕДО
                        </button>
                    </div>


                </div>
                <div className={"col-span-2 proba-pro-bold"}>
                    <div>
                        <button>
                            Фішинг
                        </button>
                    </div>
                    <div>
                        <button>
                            Курс з кібергігієни
                        </button>
                    </div>
                    <div>
                        <button>
                            Новини
                        </button>
                    </div>
                    <div>
                        <button>
                            Контакти
                        </button>
                    </div>

                    <div className={"mt-3"}>
                        <button className={"proba-pro-light"}>
                            Поширені питання
                        </button>
                    </div>
                    <div>
                        <button className={"text-start proba-pro-light"}>
                            Нормативно-правова база
                        </button>
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
                        <button>Написати в Signal</button>
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