import React, {FC, useContext, useEffect, useState} from 'react';
import BackBtn from "../BackBtn";
import {Context} from "../../index";

interface MainProps {
    children: React.ReactNode
}

const Main: FC<MainProps> = ({children}) => {

    const {store} = useContext(Context)
    return (
        <>
            <div className={" min-h-[77vh] "}>
                {children}
            </div>
        </>

    );
};

export default Main;