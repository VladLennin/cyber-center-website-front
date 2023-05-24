import React, {FC, useEffect, useState} from 'react';
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";
import {observe} from "mobx";
import {observer} from "mobx-react-lite";
import {Toast} from "flowbite-react";

interface WrapperProps {
    children: React.ReactNode
}

const Wrapper: FC<WrapperProps> = ({children}) => {

    return (
        <>
            <div className={"absolute right-[50px] top-[50px]"}>
                <Toast>
                  <div>
                      some text
                  </div>
                    <Toast.Toggle/>
                </Toast>
            </div>
            <Header/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </>
    );
};

export default observer(Wrapper)
