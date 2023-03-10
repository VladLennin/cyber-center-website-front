import React, {useContext} from "react";
import {Context} from "../index";
import {Route, Routes} from "react-router-dom";
import {RoutesName} from "./RoutesName";
import RequireAuth from "./RequireAuth";

const AppRouter = () => {

    const {store} = useContext(Context)
    return (

        <Routes>
            {/*<Route path={RoutesName.MAIN_PAGE} element={}/>*/}

            {/*<Route element={<RequireRole allowedRole={Roles.ADMIN}/>}>*/}
                <Route path={"/"} element={<div>some page</div>}/>

            {/*</Route>*/}

            {/*<Route element={<RequireAuth/>}>*/}
            {/*    <Route path={"/"} element={<div>some page</div>}/>*/}
            {/*</Route>*/}
        </Routes>
    );
};

export default AppRouter;