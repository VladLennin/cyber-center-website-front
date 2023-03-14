import React, {FC, useEffect, useState} from 'react';
import BackToMainBtn from "../BackToMainBtn";

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