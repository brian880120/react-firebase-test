import React, { useContext } from 'react';
import AuthContext from '../../context/auth/auth.context';
import { Redirect } from 'react-router-dom';
import AppFirebase from '../../config/firebase-config';

function withAuth(Component) {
    return (props) => {
        const { authState } = useContext(AuthContext);

        console.log(AppFirebase.getFirebase().auth().currentUser);
        console.log(authState.isAuthenticated);
        if (!authState.isAuthenticated) {
            return <Redirect to='/signin' />
        }

        return (
            <Component {...props} />
        );
    };
}

export default withAuth;
