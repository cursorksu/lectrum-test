import React from 'react';

import {BrowserRouter as Router, Redirect, Route, Switch,} from 'react-router-dom';
import {MainLayout} from './layout/MainLayout';
import {Registration} from './pages/Registration';
import {Login} from './pages/Login';
import {CVPreview} from './pages/CVPreview';
import {CV} from './pages/CV';

export default function Navigator() {
    // const isUserAuth = useSelector(store => store.user.email)
    const isUserAuth = true;

    return (
        <Router>
            <Switch>
                <MainLayout>
                    <Route
                        exact
                        path="/"
                        name="Login Page"
                        component={Login}
                    />
                    <Route
                        exact
                        path="/register"
                        name="Registration Page"
                        component={Registration}
                    />
                    {
                        isUserAuth
                        ?
                            <>
                                <Route
                                    exact
                                    path="/cv"
                                    name="CV Page"
                                    component={CV}
                                />
                                <Route
                                    exact
                                    path="/cv-preview"
                                    name="CV Preview Page"
                                    component={CVPreview}
                                />
                            </>
                            : <Redirect path={"/login"}/>
                    }

                </MainLayout>
            </Switch>
        </Router>
    );
}