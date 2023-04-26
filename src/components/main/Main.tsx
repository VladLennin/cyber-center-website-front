import React, {FC, useEffect, useState} from 'react';
import BackBtn from "../BackBtn";

interface MainProps {
    children: React.ReactNode
}

const Main: FC<MainProps> = ({children}) => {
    return (
        <>
            <div className={"min-h-[77vh]"}>
                {children}
            </div>
        </>

    );
};

export default Main;