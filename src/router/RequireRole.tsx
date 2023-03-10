import React, {FC, useContext} from 'react';
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {RoutesName} from "./RoutesName";
import {Context} from "../index";
import {Roles} from "../models/Roles";

interface RequireRolesProps {
    allowedRole: Roles
}

const RequireRole: FC<RequireRolesProps> = ({allowedRole}) => {
    const {store} = useContext(Context)
    const location = useLocation()
    return (
        store?.user?.role === allowedRole
            ?
            <Outlet/>
            :
            <Navigate to={RoutesName.UNAUTHORIZED} state={{from: location}} replace/>
    );
};

export default RequireRole;