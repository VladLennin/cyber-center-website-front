import React, {FC} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";

interface BackBtnProps{
    additionalClass?:string;
}
const BackBtn:FC<BackBtnProps> = ({additionalClass}) => {
    const location= useLocation()
    const navigate = useNavigate()
    if(location.pathname==="/"){
        return null
    }
    return (
        <div className={`flex justify-start pt-10 pl-[10vw] proba-pro-medium text-lg mb-5 `+ additionalClass}>
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