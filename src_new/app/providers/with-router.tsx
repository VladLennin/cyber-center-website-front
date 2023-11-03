import React, {Suspense, useEffect} from "react";
import {BrowserRouter, useLocation} from "react-router-dom";
// import LoadingSpinner from "shared/ui/LoadingSpinner/LoadingSpinner";

function ScrollToTop() {
    const {pathname} = useLocation();
    useEffect(() => {
        // window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

export const withRouter = (component: () => React.ReactNode) => () => (
    <BrowserRouter>
        <ScrollToTop/>
        {/*<Suspense fallback={<LoadingSpinner padding={"10vh 10vw"} containerHeight={"100vh"} spinnerHeight={"100px"} spinnerWidth={"100px"}/>}>*/}
        {/*    {component()}*/}
        {/*</Suspense>*/}
    </BrowserRouter>
);