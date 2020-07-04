import React, { useContext } from 'react';
import RootContext from '../../context/root/root.context';
import { Redirect } from 'react-router-dom';

function withAuth(Component) {
    return (props) => {
        const {
            state: { auth },
        } = useContext(RootContext);

        if (!auth.isAuthenticated) {
            return <Redirect to='/signin' />
        }

        return (
            <Component {...props} />
        );
    };
}

export default withAuth;
