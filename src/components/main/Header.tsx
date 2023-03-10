import React from 'react';
// @ts-ignore
import gerb from "./../../assets/Герб.svg"
// @ts-ignore
import headerLogo from "../../assets/headerLogo.svg"

const Header = () => {
    return (
        <>
            <div className={"flex justify-around items-center bg-[#444C37] p-2 "}>
                <div className={""}>
                    <img src={headerLogo} alt="asd"/>
                </div>

                <div>
                    <img src={gerb} alt="asd"/>
                </div>

                <div className={"flex justify-between proba-pro-medium text-white"}>
                    <button className={"mr-5"}>
                        Реєстрація
                    </button>

                    <button className={"border border-white border-[1.5px] rounded-[150px] w-[100px] h-[35px]"}>
                        Вхід
                    </button>
                </div>
            </div>

            <div className={"bg-[#1B1B1BF2] flex justify-around text-white px-[10vw] py-2"}>
                <button className={"hover:text-[#AF8742] duration-200 "}>
                    Головна
                </button>

                <button className={"hover:text-[#AF8742] duration-200 "}>
                    Програмне забезпечення
                </button>

                <button className={"hover:text-[#AF8742] duration-200 "}>
                    Документація
                </button>

                <button className={"hover:text-[#AF8742] duration-200 "}>
                    Фішинг
                </button>

                <button className={"hover:text-[#AF8742] duration-200 "}>
                    Курс з кібергігієни
                </button>

                <button className={"hover:text-[#AF8742] duration-200 "}>
                    Новини
                </button>

                <button className={"hover:text-[#AF8742] duration-200 "}>
                    Контакти
                </button>

            </div>
        </>

    );
};

export default Header;