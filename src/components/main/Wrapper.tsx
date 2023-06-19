import React, {FC, useContext} from 'react';
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import ToastCustom from "../ToastCustom";
import MainSpinner from "../spinner/MainSpinner";

interface WrapperProps {
    children: React.ReactNode
}

const Wrapper: FC<WrapperProps> = ({children}) => {

    const {store} = useContext(Context)

    return (
        <>
            {
                store.isLoading &&
                <MainSpinner/>
            }
            <div className={(store.isLoading ? " overflow-hidden h-screen " : "")}>
                <div className={"fixed right-[50px] top-[50px] z-50"}>
                    {store.toasts.map((toggle, index) => (
                        <ToastCustom key={index} toast={toggle}/>
                    ))}
                </div>
                <Header/>
                <Main>
                    {children}
                </Main>
                <Footer/>
            </div>
        </>
    );
};

export default observer(Wrapper)
