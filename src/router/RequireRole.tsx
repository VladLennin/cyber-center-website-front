import React, {FC, useContext} from 'react';
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {RoutesName} from "./RoutesName";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

interface RequireRolesProps {
    allowedRole: string
}

const RequireRole: FC<RequireRolesProps> = ({allowedRole}) => {
    const {store} = useContext(Context)
    const location = useLocation()
    console.log(store.userRoles.filter(role => role === allowedRole).length >= 1)
    console.log(store.userRoles)
    return (
        store.userRoles.includes(allowedRole)
            ?
            <Outlet/>
            :
            <Navigate to={RoutesName.UNAUTHORIZED} state={{from: location}} replace/>
    );
};

export default observer(RequireRole);