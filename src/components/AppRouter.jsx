import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth)

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={route.component} key={route.path}/>
                )}
                <Route path='*' element={<Navigate to="/posts" replace />}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={route.component} key={route.path}/>
                )}
                <Route path='*' element={<Navigate to="/login" replace />}/>
            </Routes>
    );
};

{/*<Route path='/about' element={<About/>}/>*/}
{/*<Route path='/posts/*' element={<Posts/>}/>*/}
{/*<Route path='/posts/:id' element={<PostIdPage/>}/>*/}
{/*<Route path='/error' element={<Error/>}/>*/}

export default AppRouter;