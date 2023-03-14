import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {RoutesName} from "../router/RoutesName";

const BackToMainBtn = () => {
    const location= useLocation()
    if(location.pathname==="/"){
        return null
    }
    return (
        <div className={"flex justify-start pt-10 pl-[10vw] proba-pro-medium text-lg mb-5 "}>
            <Link className={"flex hover:text-[#AF8742] duration-200"} to={RoutesName.MAIN_PAGE}>
                <i className="bi bi-arrow-left mr-2"></i>
                <p>На головну</p>
            </Link>
        </div>
    );
};

export default BackToMainBtn;