import React, {FC} from 'react';
import {INews} from "../../models/INews";
import {Link} from "react-router-dom";


interface NewsProps {
    news: INews
}

const NewsCard: FC<NewsProps> = ({news}) => {
    return (
        <Link to={news.link}>
            <div className={"text-sm] w-[16vw] mr-10"}>
                <img className={"rounded-[16px]"} src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} alt="qwe"/>

                <div className={"proba-pro-medium text-xl"}>
                    {news.title}
                </div>

                <div className={"proba-pro-light h-[100px] text-ellipsis overflow-hidden ... "}>
                    {news.content}
                </div>

                <div className={"proba-pro-light text-[#909090]"}>
                    {news.date}
                </div>
            </div>
        </Link>

    );
};

export default NewsCard;