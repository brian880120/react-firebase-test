import React, { useContext } from 'react';
import RootContext from '../../../context/root/root.context';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../../context/auth/auth.service';

function SignedInLinks() {
    const { dispatch } = useContext(RootContext);

    const onSignOut = (e) => {
        e.preventDefault();
        signOut(dispatch);
    };

    return (
        <ul className="right">
            <li>
                <NavLink to="/create">New Project</NavLink>
            </li>
            <li>
                <a href="/" onClick={onSignOut}>Log Out</a>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating pink lighten-1">NN</NavLink>
            </li>
        </ul>
    );
}

export default SignedInLinks;
