import React, {FC, useContext} from 'react';
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import ToastCustom from "../ToastCustom";

interface WrapperProps {
    children: React.ReactNode
}

const Wrapper: FC<WrapperProps> = ({children}) => {

    const {store} = useContext(Context)

    return (
        <>
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
        </>
    );
};

export default observer(Wrapper)
