import React, {FC} from 'react';
import {INews} from "../../models/INews";
import NewsCard from "./NewsCard";


interface NewsRowProps {
    color: boolean;
    news: INews[]
}

const NewsRow: FC<NewsRowProps> = ({color, news}) => {
    if (color) {
        return (
            <div className={"grid grid-cols-4 gap-16 bg-[#F9F9F9] my-5 px-10"}>
                {news.map(item => (
                    <NewsCard news={item}/>
                ))}
            </div>
        );
    }
    return (
        <div className={"grid grid-cols-4 gap-16 bg-white my-5 px-10"}>
            {news.map(item => (
                <NewsCard news={item}/>
            ))}
        </div>
    );


};

export default NewsRow;