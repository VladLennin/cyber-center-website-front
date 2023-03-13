import React, {useContext} from "react";
import {Context} from "../index";
import {Route, Routes} from "react-router-dom";
import {RoutesName} from "./RoutesName";
import RequireAuth from "./RequireAuth";
import RegistrationPage from "../pages/RegistrationPage";
import MainPage from "../pages/MainPage";
import ContactsPage from "../pages/ContactsPage";
import ProfilePage from "../pages/ProfilePage";
import {observe} from "mobx";

const AppRouter = () => {

    const {store} = useContext(Context)
    return (

        <Routes>
            <Route path={RoutesName.REGISTRATION_PAGE} element={<RegistrationPage/>}/>
            <Route path={RoutesName.MAIN_PAGE} element={<MainPage/>}/>

            {/*<Route path={RoutesName.MAIN_PAGE} element={}/>*/}

            {/*<Route element={<RequireRole allowedRole={Roles.ADMIN}/>}>*/}

            {/*</Route>*/}

            <Route element={<RequireAuth/>}>
                <Route path={RoutesName.PROFILE_PAGE} element={<ProfilePage/>}/>

            </Route>
        </Routes>
    );
};

export default AppRouter;