import React, { useContext } from 'react';
import AuthContext from '../../../context/auth/auth.context';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../../context/auth/auth.service';

function SignedInLinks() {
    const { authDispatch } = useContext(AuthContext);

    const onSignOut = (e) => {
        e.preventDefault();
        signOut(authDispatch);
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
