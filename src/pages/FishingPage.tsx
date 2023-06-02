import React from 'react';
import FishingCard from "../components/cards/FishingCard";
import {IFishing} from "../models/IFishing";

const FishingPage = () => {

    const fishingCards: IFishing[] = [
        {
            img: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg",
            date: new Date(),
            id: 1,
            fakeSender: "asdasd@mail.ru",
            sender: "ministOfDefence@mil.gov.ua",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem corporis dolor dolorum eum fugit laborum magnam magni molestiae mollitia nesciunt numquam odit perferendis quasi, quia quo, sit tenetur velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem corporis dolor dolorum eum fugit laborum magnam magni molestiae mollitia nesciunt numquam odit perferendis quasi, quia quo, sit tenetur velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem corporis dolor dolorum eum fugit laborum magnam magni molestiae mollitia nesciunt numquam odit perferendis quasi, quia quo, sit tenetur velit."
        } as IFishing,
        {
            img: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg",
            date: new Date(),
            id: 1,
            fakeSender: "asdasd@mail.ru",
            sender: "ministOfDefence@mil.gov.ua",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem corporis dolor dolorum eum fugit laborum magnam magni molestiae mollitia nesciunt numquam odit perferendis quasi, quia quo, sit tenetur velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem corporis dolor dolorum eum fugit laborum magnam magni molestiae mollitia nesciunt numquam odit perferendis quasi, quia quo, sit tenetur velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem corporis dolor dolorum eum fugit laborum magnam magni molestiae mollitia nesciunt numquam odit perferendis quasi, quia quo, sit tenetur velit."
        } as IFishing,
        {
            img: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg",
            date: new Date(),
            id: 1,
            fakeSender: "asdasd@mail.ru",
            sender: "ministOfDefence@mil.gov.ua",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem corporis dolor dolorum eum fugit laborum magnam magni molestiae mollitia nesciunt numquam odit perferendis quasi, quia quo, sit tenetur velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem corporis dolor dolorum eum fugit laborum magnam magni molestiae mollitia nesciunt numquam odit perferendis quasi, quia quo, sit tenetur velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem corporis dolor dolorum eum fugit laborum magnam magni molestiae mollitia nesciunt numquam odit perferendis quasi, quia quo, sit tenetur velit."
        } as IFishing,
        {
            img: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg",
            date: new Date(),
            id: 1,
            fakeSender: "asdasd@mail.ru",
            sender: "ministOfDefence@mil.gov.ua",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem corporis dolor dolorum eum fugit laborum magnam magni molestiae mollitia nesciunt numquam odit perferendis quasi, quia quo, sit tenetur velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem corporis dolor dolorum eum fugit laborum magnam magni molestiae mollitia nesciunt numquam odit perferendis quasi, quia quo, sit tenetur velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem corporis dolor dolorum eum fugit laborum magnam magni molestiae mollitia nesciunt numquam odit perferendis quasi, quia quo, sit tenetur velit."
        } as IFishing,
        {
            img: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg",
            date: new Date(),
            id: 1,
            fakeSender: "asdasd@mail.ru",
            sender: "ministOfDefence@mil.gov.ua",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem corporis dolor dolorum eum fugit laborum magnam magni molestiae mollitia nesciunt numquam odit perferendis quasi, quia quo, sit tenetur velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem corporis dolor dolorum eum fugit laborum magnam magni molestiae mollitia nesciunt numquam odit perferendis quasi, quia quo, sit tenetur velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem corporis dolor dolorum eum fugit laborum magnam magni molestiae mollitia nesciunt numquam odit perferendis quasi, quia quo, sit tenetur velit."
        } as IFishing,
        {
            img: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg",
            date: new Date(),
            id: 1,
            fakeSender: "asdasd@mail.ru",
            sender: "ministOfDefence@mil.gov.ua",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem corporis dolor dolorum eum fugit laborum magnam magni molestiae mollitia nesciunt numquam odit perferendis quasi, quia quo, sit tenetur velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem corporis dolor dolorum eum fugit laborum magnam magni molestiae mollitia nesciunt numquam odit perferendis quasi, quia quo, sit tenetur velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem corporis dolor dolorum eum fugit laborum magnam magni molestiae mollitia nesciunt numquam odit perferendis quasi, quia quo, sit tenetur velit."
        } as IFishing,
    ]

    return (<>
            <div className={"flex justify-start items-center min-h-[77vh]  flex-col proba-pro-medium"}>

                <p className={"proba-pro-bold text-[6vh]"}>Фішинг
                    <i className="bi bi-exclamation-triangle ml-4"></i>
                </p>
                <p className={"proba-pro-light w-[28vw] text-center"}>
                    Загальна база електронних листів, які містять шкідливі файли або посилання.
                    Пошук можливий по ймовірно зловмисному відправнику або по змісту повідомлення
                </p>

                <div className={"flex justify-center my-5"}>
                    <div className={"flex rounded-[150px] border border-black items-center pr-5"}>
                        <input type="text" className={'rounded-l-[150px] w-[30vw] focus:border-none border-none'}/>
                        <div className={"flex justify-center ml-2"}>
                            <i className="bi bi-search"></i>
                        </div>
                    </div>

                    <div className={"ml-4"}>
                        <input className={"rounded-[150px] border border-black"} type="date"/>
                    </div>
                </div>
                {fishingCards.map((card, index) => (
                    <div className={(index % 2 === 0 ? "bg-[#F9F9F9] " : "bg-white ") + " w-screen flex justify-center"}>
                        <FishingCard cardData={card}/>
                    </div>
                ))}

            </div>
        </>
    );
};

export default FishingPage;