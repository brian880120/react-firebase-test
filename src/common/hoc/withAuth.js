import React, { useContext } from 'react';
import AuthContext from '../../context/auth/auth.context';
import { Redirect } from 'react-router-dom';

function withAuth(Component) {
    return (props) => {
        const { authState } = useContext(AuthContext);

        if (!authState.isAuthenticated) {
            return <Redirect to='/signin' />
        }

        return (
            <Component {...props} />
        );
    };
}

export default withAuth;
