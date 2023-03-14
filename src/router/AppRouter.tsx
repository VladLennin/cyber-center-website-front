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
import DocumentsPage from "../pages/DocumentsPage";
import FishingPage from "../pages/FishingPage";
import CyberCoursePage from "../pages/CyberCoursePage";
import NewsPage from "../pages/NewsPage";
import RequireRole from "./RequireRole";
import {Roles} from "../models/Roles";
import AdminPage from "../pages/AdminPage";
import AdditionalPZ from "../pages/PZpages/AdditionalPZ";
import AntivirusesPZ from "../pages/PZpages/AntivirusesPZ";
import UpdatePZ from "../pages/PZpages/UpdatePZ";
import UnauthorizedPage from "../pages/UnauthorizedPage";
import TestResultPage from "../pages/TestResultPage";

const AppRouter = () => {

    const {store} = useContext(Context)
    return (

        <Routes>
            <Route path={RoutesName.REGISTRATION_PAGE} element={<RegistrationPage/>}/>
            <Route path={RoutesName.DOCUMENTS_PAGE} element={<DocumentsPage/>}/>
            <Route path={RoutesName.FISHING_PAGE} element={<FishingPage/>}/>
            <Route path={RoutesName.CYBER_COURSE_PAGE} element={<CyberCoursePage/>}/>
            <Route path={RoutesName.NEWS_PAGE} element={<NewsPage/>}/>
            <Route path={RoutesName.MAIN_PAGE} element={<MainPage/>}/>
            <Route path={RoutesName.UNAUTHORIZED} element={<UnauthorizedPage/>}/>
            <Route path={RoutesName.CONTACTS_PAGE} element={<ContactsPage/>}/>
            <Route path={RoutesName.TEST_RESULT_PAGE} element={<TestResultPage/>}/>


            <Route element={<RequireRole allowedRole={Roles.ADMIN.toString()}/>}>
                <Route path={RoutesName.ADMIN_PAGE} element={<AdminPage/>}/>
            </Route>

            <Route element={<RequireAuth/>}>
                <Route path={RoutesName.PROFILE_PAGE} element={<ProfilePage/>}/>
                <Route path={RoutesName.ADDITIONAL_PZ} element={<AdditionalPZ/>}/>
                <Route path={RoutesName.ANTIVIRUSES_PAGE} element={<AntivirusesPZ/>}/>
                <Route path={RoutesName.UPDATES_PAGE} element={<UpdatePZ/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;