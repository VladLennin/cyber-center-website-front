import React, {FC, useContext} from 'react';
import {Context} from "../index";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {RoutesName} from "./RoutesName";


const RequireAuth: FC = () => {
    const {store} = useContext(Context)
    const location = useLocation()
    return (
        store.isAuth
            ?
            <Outlet/>
            :
            <Navigate to={RoutesName.REGISTRATION_PAGE} state={{from: location}} replace/>
    )
};

export default RequireAuth;