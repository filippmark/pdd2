import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { ApplicationState } from '../../reducers';


export const PrivateRoute = (props: { children: React.ReactNode, path: string; exact: boolean }) => {
    const isUserLoggedIn = useSelector((state: ApplicationState) => state.signIn.isUserLoggedIn, shallowEqual);
    const { path, exact, children } = props;

    return (
        <Route path={path} exact={exact}>
            {
                isUserLoggedIn ?
                    (<> {children} </>)
                    :
                    <Redirect to='/sign-in'></Redirect>
            }
        </Route>
    );
}