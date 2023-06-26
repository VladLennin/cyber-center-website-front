import React, {FC} from 'react';
import {INews} from "../../models/INews";
import {Link} from "react-router-dom";
import {RoutesName} from "../../router/RoutesName";
import {FTP_URL_DOWNLOAD} from "../../http";
import ReactHtmlParser from 'html-react-parser';
// @ts-ignore
import tsnLogo from "../../assets/tsnLogo.png"
// @ts-ignore
import cyberLogo from "../../assets/headerLogo.svg"

interface NewsProps {
    news: INews
}

const NewsCard: FC<NewsProps> = ({news}) => {


    return (
        <>

            <div
                className={"text-sm max-w-[24vw]   p-2 rounded-xl  m-2"}>
                <div className={"flex justify-center"}>
                    {
                        news.img_href.includes("https")
                            ?
                            <img className={"rounded-[16px] mb-2  text-center"}
                                 src={news.img_href}
                                 alt="qwe"/>
                            :
                            <img className={"rounded-[16px] mb-2  text-center"}
                                 src={FTP_URL_DOWNLOAD + news.img_href}
                                 alt="qwe"/>
                    }

                </div>

                <div className={"proba-pro-medium text-xl"}>
                    {ReactHtmlParser(news.title)}
                </div>

                <div className={"max-h-[120px] proba-pro-light mb-2 text-ellipsis overflow-hidden ... "}>
                    {ReactHtmlParser(news.content)}
                </div>

                <div className={"flex justify-between mb-4 items-center"}>
                    <div className={"proba-pro-light text-[#909090]"}>
                        {news?.date_pub.split("T")[1].split(":")[0]}:{news?.date_pub.split("T")[1].split(":")[1]} {news?.date_pub.split("T")[0]}
                    </div>
                    {
                        news.img_href.includes("https") ?
                            <img className={"h-5"} src={tsnLogo} alt=""/>
                            :
                            <div className={"bg-[#232323] px-2 py-1 rounded"}>
                                <img className={"h-8"} src={cyberLogo} alt=""/>

                            </div>
                    }
                </div>

                <div className={"flex justify-end"}>
                    <Link className={"hover:text-[#AF8742] duration-100"} to={RoutesName.NEWS_PAGE + "/" + news.id}>
                        Детальніше
                    </Link>
                </div>

            </div>
        </>


    );
};

export default NewsCard;