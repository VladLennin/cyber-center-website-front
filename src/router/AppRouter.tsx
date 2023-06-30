import React, {useContext} from "react";
import {Context} from "../index";
import {Route, Routes, useLocation} from "react-router-dom";
import {RoutesName} from "./RoutesName";
import RequireAuth from "./RequireAuth";
import RegistrationPage from "../pages/RegistrationPage";
import MainPage from "../pages/MainPage";
import ContactsPage from "../pages/ContactsPage";
import ProfilePage from "../pages/ProfilePage";
import DeepStateMapPage from "../pages/DeepStateMapPage";
import FishingPage from "../pages/FishingPage";
import AllCoursesPage from "../pages/AllCoursesPage";
import NewsPage from "../pages/NewsPage";
import RequireRole from "./RequireRole";
import {Roles} from "../models/enum/Roles";
import AdminPage from "../pages/AdminPage";
import AdditionalPZ from "../pages/PZpages/AdditionalPZ";
import AntivirusesPZ from "../pages/PZpages/AntivirusesPZ";
import UpdatePZ from "../pages/PZpages/UpdatePZ";
import UnauthorizedPage from "../pages/UnauthorizedPage";
import TestResultPage from "../pages/TestResultPage";
import AddAntPzPage from "../pages/AdminPages/AddAntPzPage";
import UsersPage from "../pages/AdminPages/UsersPage";
import AddUpdatePage from "../pages/AdminPages/AddUpdatePage";
import AddAdditionalPzPage from "../pages/AdminPages/AddAdditionalPzPage";
import AddFishingExamplePage from "../pages/AdminPages/AddFishingExamplePage";
import BackBtn from "../components/BackBtn";
import FishingCardPage from "../pages/FishingCardPage";
import AddNewsPage from "../pages/AdminPages/AddNewsPage";
import NewsPageDetailed from "../pages/NewsPageDetailed";
import LicensePage from "../pages/AdminPages/LicensePage";
import AddCoursePage from "../pages/AdminPages/AddCoursePage";
import CoursePage from "../pages/CoursePage";

const AppRouter = () => {

    const {store} = useContext(Context)
    const location = useLocation()
    return (
        <>
            {!(location.pathname === "/deepstatemap")
                &&
                <BackBtn/>
            }

            <Routes>
                {!store.isAuth ?
                    <Route path={RoutesName.REGISTRATION_PAGE} element={<RegistrationPage/>}/>
                    :
                    <Route path={RoutesName.REGISTRATION_PAGE} element={<MainPage/>}/>
                }

                {
                    store.isAuth ?
                        <Route path={RoutesName.UNAUTHORIZED} element={<MainPage/>}/>
                        :
                        <Route path={RoutesName.UNAUTHORIZED} element={<UnauthorizedPage/>}/>
                }

                <Route path={RoutesName.DEEP_STATE_MAP_PAGE} element={<DeepStateMapPage/>}/>
                <Route path={RoutesName.FISHING_PAGE} element={<FishingPage/>}/>
                <Route path={RoutesName.COURSES_PAGE} element={<AllCoursesPage/>}/>
                <Route path={RoutesName.NEWS_PAGE} element={<NewsPage/>}/>
                <Route path={RoutesName.NEWS_PAGE + "/:id"} element={<NewsPageDetailed/>}/>
                <Route path={RoutesName.CONTACTS_PAGE} element={<ContactsPage/>}/>
                <Route path={RoutesName.TEST_RESULT_PAGE} element={<TestResultPage/>}/>
                <Route path={RoutesName.MAIN_PAGE} element={<MainPage/>}/>
                <Route path={RoutesName.FISHING_CARD_PAGE + "/:id"} element={<FishingCardPage/>}/>
                <Route path={RoutesName.COURSES_PAGE + "/:id"} element={<CoursePage/>}/>

                <Route element={<RequireRole allowedRole={Roles.ADMIN.toString()}/>}>
                    <Route path={RoutesName.ADMIN_PAGE} element={<AdminPage/>}/>
                    <Route path={RoutesName.ADMIN_NEWS_PAGE} element={<AddNewsPage/>}/>
                    <Route path={RoutesName.ADMIN_ANT_PZ_PAGE} element={<AddAntPzPage/>}/>
                    <Route path={RoutesName.ADMIN_USERS_PAGE} element={<UsersPage/>}/>
                    <Route path={RoutesName.ADMIN_UPDATES_PAGE} element={<AddUpdatePage/>}/>
                    <Route path={RoutesName.ADMIN_ADDITIONAL_PZ_PAGE} element={<AddAdditionalPzPage/>}/>
                    <Route path={RoutesName.ADMIN_FISHING_PAGE} element={<AddFishingExamplePage/>}/>
                    <Route path={RoutesName.ADMIN_LICENSE_KEYS} element={<LicensePage/>}/>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Route path={RoutesName.ADMIN_CREATE_COURSE} element={<AddCoursePage/>}/>
                </Route>

                <Route element={<RequireAuth/>}>
                    <Route path={RoutesName.PROFILE_PAGE} element={<ProfilePage/>}/>
                    <Route path={RoutesName.ADDITIONAL_PZ} element={<AdditionalPZ/>}/>
                    <Route path={RoutesName.ANTIVIRUSES_PAGE} element={<AntivirusesPZ/>}/>
                    <Route path={RoutesName.UPDATES_PAGE} element={<UpdatePZ/>}/>
                </Route>
            </Routes>


        </>

    );
};

export default AppRouter;