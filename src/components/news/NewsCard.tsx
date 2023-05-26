import React, {FC} from 'react';
import {INews} from "../../models/INews";
import {Link} from "react-router-dom";
import {RoutesName} from "../../router/RoutesName";


interface NewsProps {
    news: INews
}

const NewsCard: FC<NewsProps> = ({news}) => {
    return (
        <>

            <div
                className={"text-sm max-w-[24vw]   p-2 rounded-xl  m-2"}>
                <div className={"flex justify-center"}>
                    <img className={"rounded-[16px] mb-2  text-center"}
                         src={"http://10.5.113.112:3005/ftp/download/" + news.imgHref}
                         alt="qwe"/>
                </div>


                <div className={"proba-pro-medium text-xl"}>
                    {news.name}
                </div>

                <div className={"max-h-[120px] proba-pro-light mb-2 text-ellipsis overflow-hidden ... "}>
                    {news.content}
                </div>

                <div className={"proba-pro-light text-[#909090]"}>
                    {news.date.split("T")[0]}
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