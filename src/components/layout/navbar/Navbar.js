import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/auth/auth.context';
import SignedInLinks from '../signedin-link/SignedInLinks';
import SignedOutLinks from '../signedout-link/SignedOutLinks';

function Navbar() {
    const { authState } = useContext(AuthContext);

    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">
                    MarioPlan
                </Link>
                {
                    authState.isAuthenticated ?
                        <SignedInLinks /> :
                        <SignedOutLinks />
                }
            </div>
        </nav>
    );
}

export default Navbar;