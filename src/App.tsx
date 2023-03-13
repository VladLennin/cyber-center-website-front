import React, {useContext, useEffect} from 'react';
import Wrapper from "./components/main/Wrapper";
import AppRouter from "./router/AppRouter";
import {Context} from "./index";
import {useLocation, useNavigate} from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
    const {store} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth(location).then(res => {
                navigate(res.pathname)
            })
        }
    }, [])


    if(!store.isAuth){
        return (
            <Wrapper>
                <RegistrationPage/>
            </Wrapper>
        )
    }
    return (

        <Wrapper>
            <AppRouter/>
        </Wrapper>
    );
}

export default App;
