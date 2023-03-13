import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {Link} from "react-router-dom";
import {RoutesName} from "../router/RoutesName";

const NewsPage = () => {

    const {store} = useContext(Context)

    return (
        <div>
            <Link to={RoutesName.ADMIN_PAGE}>
                Go to admin
            </Link>
        </div>
    );
};

export default NewsPage;