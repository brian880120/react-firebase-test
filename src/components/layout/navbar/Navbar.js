import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RootContext from '../../../context/root/root.context';
import SignedInLinks from '../signedin-link/SignedInLinks';
import SignedOutLinks from '../signedout-link/SignedOutLinks';

function Navbar() {
    const {
        state: {
            auth,
            profile,
        },
    } = useContext(RootContext);

    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">
                    MarioPlan
                </Link>
                {
                    auth.isAuthenticated ?
                        <SignedInLinks profile={profile} /> :
                        <SignedOutLinks />
                }
            </div>
        </nav>
    );
}

export default Navbar;