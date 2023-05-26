import React from 'react';
import BackBtn from "../components/BackBtn";

const ContactsPage = () => {
    return (
        <>
            <div className={"flex justify-start items-center min-h-[77vh] flex-col proba-pro-medium mb-10 mt-5"}>
                <p className={"proba-pro-bold text-[6vh] "}>Контакти
                    <i className="bi bi-telephone ml-4"></i>
                </p>
                <div className={"border rounded shadow p-10 "}>
                    <div className={"flex justify-center proba-pro-light mb-5"}>
                        <p className={"w-[35vw] text-lg"}>
                            При написанні листів та відправки їх електронною поштою, прохання повідомляти своє прізвище,
                            ім'я та
                            по-батькові,
                            зворотну адресу і контактні телефони для оперативного вирішення ваших питань та надання
                            адресної
                            допомоги.
                        </p>
                    </div>

                    <div className={"h-[1.5px] bg-gray-600 px-10 mb-5"}></div>

                    <div className={"flex justify-between px-5 mb-5"}>
                        <p className={" text-2xl"}>Адреса електронної пошти</p>
                        <p className={"text-xl proba-pro-light"}>csoc@post.mil.gov.ua</p>
                    </div>
                    <div className={"h-[1.5px] bg-gray-600 px-10 mb-5"}></div>
                    <div className={"flex justify-between px-5 mb-5"}>
                        <p className={" text-2xl"}>Черговий ЦКБ ІТС ЗС України</p>
                        <p className={"text-xl proba-pro-light"}>(62) 348-54</p>
                    </div>
                    <div className={"flex justify-between px-5 mb-5"}>
                        <p className={"mr-5  text-2xl"}>Адміністратор безпеки АСУ ЗС України (антивірусна
                            підтримка) </p>
                        <p className={"text-xl proba-pro-light"}>(62) 234-85</p>
                    </div>
                    <div className={"flex justify-between px-5 mb-5"}>
                        <p className={"text-2xl"}>Оператор аналітик ЦКБ ІТС ЗС України </p>
                        <div>
                            <p className={"text-xl proba-pro-light"}>
                                (62) 490-20
                            </p>
                            <p className={"text-xl proba-pro-light"}>
                                (62) 490-21
                            </p>
                        </div>
                    </div>

                    <div className={"h-[1.5px] bg-gray-600 px-10 mb-5"}></div>

                    <div className={"flex justify-between px-5 mb-5"}>
                        <p className={"text-2xl w-[45vw]"}>Центр технічного захисту інформації (надання консультацій зі
                            створення
                            КТ3І на ОІД, КС3І в ІТС для підрозділів звʼязку ЗС України)</p>
                        <div>
                            <p className={"text-xl proba-pro-light mb-1"}>
                                (62) 39-990
                            </p>
                            <p className={"text-xl proba-pro-light mb-1"}>
                                (62) 39-991
                            </p>
                            <p className={"text-xl proba-pro-light mb-1"}>
                                41-249
                            </p>
                            <p className={"text-xl proba-pro-light mb-1"}>
                                14-994
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactsPage;