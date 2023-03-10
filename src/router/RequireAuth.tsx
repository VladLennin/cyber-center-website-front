import React, {FC, useContext} from 'react';
import {Context} from "../index";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {RoutesName} from "./RoutesName";

interface AuthProps {

}

const RequireAuth: FC<AuthProps> = ({}) => {
    const {store} = useContext(Context)
    const location = useLocation()
    return (
        store.isAuth
            ?
            <Outlet/>
            :
            <Navigate to={RoutesName.LOGIN_PAGE} state={{from: location}} replace/>
    )
};

export default RequireAuth;