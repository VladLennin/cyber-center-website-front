import React, {FC, useEffect, useState} from 'react';
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";

interface WrapperProps {
    children: React.ReactNode
}

const Wrapper: FC<WrapperProps> = ({children}) => {

    return (
        <>
            <Header/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </>
    );
};

export default Wrapper
