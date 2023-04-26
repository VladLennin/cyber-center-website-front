import React from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";

const BackBtn = () => {
    const location= useLocation()
    const navigate = useNavigate()
    if(location.pathname==="/"){
        return null
    }
    return (
        <div className={"flex justify-start pt-10 pl-[10vw] proba-pro-medium text-lg mb-5 "}>
            <button className={"flex hover:text-[#AF8742] duration-200"} onClick={()=>{
            navigate(-1)
            }
            }>
                <i className="bi bi-arrow-left mr-2"></i>
                <p>Назад</p>
            </button>
        </div>
    );
};

export default BackBtn;