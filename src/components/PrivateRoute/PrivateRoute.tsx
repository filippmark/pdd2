import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { ApplicationState } from '../../reducers';


export const PrivateRoute = (props: { children: React.ReactNode }) => {
    const isUserLoggedIn = useSelector((state: ApplicationState) => state.signIn.isUserLoggedIn, shallowEqual);

    if(isUserLoggedIn) {
        const {children  } = props;
        return (<>{children}</>)
    } else {
        return <Redirect to='/sign-in'></Redirect>
    }
}