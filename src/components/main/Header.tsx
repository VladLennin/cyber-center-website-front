import React, {useContext, useState} from 'react';
// @ts-ignore
import gerb from "./../../assets/Герб.svg"
// @ts-ignore
import headerLogo from "../../assets/headerLogo.svg"
// @ts-ignore
import shield from "../../assets/shield-virus-protection.svg"
// @ts-ignore
import programmingCode from "../../assets/programming-code.svg"
// @ts-ignore
import updatePz from "../../assets/Sim, Refresh, Update.svg"
// @ts-ignore
import vector from "../../assets/Vector.svg"
import {Link} from "react-router-dom";
import {RoutesName} from "../../router/RoutesName";
import Modal from "../modals/Modal";
import LoginModal from "../modals/LoginModal";
import {Context} from "../../index";

const Header = () => {

    const [pzFlag1, setPzFlag1] = useState<boolean>(false);
    const [pzFlag2, setPzFlag2] = useState<boolean>(false);
    const {store} = useContext(Context)
    const [modal, setModal] = useState(false);
    const closeModal = () => {
        setModal(false)
    };

    const openModal = () => {
        setModal(true)
    };

    return (
        <>
            <LoginModal modal={modal} closeModal={closeModal}/>
            <div id={"header"} className={"flex justify-around items-center bg-[#444C37] p-2 "}>
                <div className={""}>
                    <img src={headerLogo} alt="asd"/>
                </div>

                <div>
                    <img src={gerb} alt="asd"/>
                </div>

                <div className={"flex justify-between proba-pro-medium text-white"}>
                    <button className={"mr-5"}>
                        <Link to={RoutesName.REGISTRATION_PAGE}>
                            Реєстрація
                        </Link>
                    </button>

                    <button onClick={() => openModal()}
                            className={"border border-white border-[1.5px] rounded-[150px] w-[100px] h-[35px]"}>
                        Вхід
                    </button>
                    <button onClick={() => {
                        store.logout()
                    }}>logout</button>
                </div>
            </div>

            <div className={"bg-[#1B1B1BF2] flex justify-around text-white px-[10vw] py-2"}>
                <button className={"hover:text-[#AF8742] duration-200 "}>
                    <Link to={RoutesName.MAIN_PAGE}>
                        Головна
                    </Link>
                </button>

                <div className={"relative"}>
                    <button onMouseEnter={() => {
                        setPzFlag1(true)
                    }} onMouseLeave={() => {
                        setTimeout(() => setPzFlag1(false), 1000)

                    }} className={"hover:text-[#AF8742] duration-200 "}>
                        Програмне забезпечення
                    </button>
                    {(pzFlag1 || pzFlag2) &&
                        <>
                            <div className={"absolute top-[42px] left-20"}>
                                <img src={vector} alt=""/>
                            </div>
                            <div
                                onMouseEnter={() => setPzFlag2(true)}
                                onMouseLeave={() => {
                                    setPzFlag2(false)
                                }}
                                className={"absolute mt-[25px] opacity-[95%] bg-[#1B1B1BF2] z-30 w-[275px] px-5 py-3"}>
                                <Link className={" hover:text-[#AF8742] duration-200"} to={RoutesName.ANTIVIRUSES_PAGE}>
                                    <button className={"flex mb-2"}>
                                        <img src={shield} alt="" className={"mr-2"}/>
                                        <span>Антивірусне ПЗ</span>
                                    </button>
                                </Link>
                                <Link className={" hover:text-[#AF8742] duration-200"} to={RoutesName.UPDATES_PAGE}>
                                    <button className={"flex mb-2"}>
                                        <i className="bi bi-microsoft text-[#444C37] mr-2 ml-1"></i>
                                        <span>Оновлення прошивок і ОС</span>
                                    </button>
                                </Link>
                                <Link className={" hover:text-[#AF8742] duration-200"} to={RoutesName.ADDITIONAL_PZ}>
                                    <button className={"flex mb-2 mr-2 "}>
                                        <img className={"mr-2"} src={programmingCode} alt=""/>
                                        <span>Додаткове ПЗ</span>
                                    </button>
                                </Link>
                            </div>
                        </>

                    }

                </div>

                <Link className={" hover:text-[#AF8742] duration-200"} to={RoutesName.DOCUMENTS_PAGE}>
                    <button>
                        Документація
                    </button>
                </Link>

                <Link className={" hover:text-[#AF8742] duration-200"} to={RoutesName.FISHING_PAGE}>
                    <button>
                        Фішинг
                    </button>
                </Link>

                <Link className={" hover:text-[#AF8742] duration-200"} to={RoutesName.CYBER_COURSE_PAGE}>
                    <button>
                        Курс з кібергігієни
                    </button>
                </Link>

                <Link className={" hover:text-[#AF8742] duration-200"} to={RoutesName.NEWS_PAGE}>
                    <button>
                        Новини
                    </button>
                </Link>

                <Link className={" hover:text-[#AF8742] duration-200"} to={RoutesName.CONTACTS_PAGE}>
                    <button>
                        Контакти
                    </button>
                </Link>
            </div>


        </>

    );
};

export default Header;