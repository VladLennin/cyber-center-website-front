import React, {FC} from 'react';
import {IFishing} from "../../models/IFishing";
import {Link} from "react-router-dom";
import {RoutesName} from "../../router/RoutesName";
import {FTP_URL_DOWNLOAD, FTP_URL_UPLOAD} from "../../http";

interface FishingCardProps {
    cardData: IFishing
}

const FishingCard: FC<FishingCardProps> = ({cardData}) => {
    return (
        <div className={"grid grid-cols-12 w-[50vw] my-14 gap-4"}>
            <div className={"col-span-12 flex justify-center  "}>
                <img className={"w-1/2"} src={FTP_URL_DOWNLOAD + cardData.img} alt=""/>
            </div>
            <div className={"col-span-10"}>
                <div className={"flex"}>
                    <p className={" bg-[#AF8742] px-2 py-1 text-white"}>
                        {cardData.date.split('T')[0]}
                    </p>
                </div>

                <div className={"flex proba-pro-light items-center mb-1"}>
                    <p className={"text-[#909090] mr-3"}>Номер кейсу:</p>
                    <p>{cardData.id}</p>
                </div>

                <div className={"flex proba-pro-light items-center mb-1"}>
                    <p className={"text-[#909090] mr-3"}>Підробний відправник:</p>
                    <p>{cardData.fakeSender}</p>
                </div>

                <div className={"flex proba-pro-light items-center mb-1"}>
                    <p className={"text-[#909090] mr-3"}>Відправник(зловмисник):</p>
                    <p>{cardData.sender}</p>
                </div>

                <div className={"flex proba-pro-light items-center"}>
                    <p>{cardData.description}</p>
                </div>
            </div>

            <div className={"col-span-2 flex flex-col justify-end"}>
                <Link className={"flex hover:text-[#AF8742] duration-200"}
                      to={RoutesName.FISHING_CARD_PAGE + "/" + cardData.id}>
                    <p> Детальніше</p>
                    <i className="bi bi-arrow-right"></i>
                </Link>
            </div>

        </div>
    );
};

export default FishingCard;