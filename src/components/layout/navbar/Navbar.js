import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from '../signedin-link/SignedInLinks';
import SignedOutLinks from '../signedout-link/SignedOutLinks';

function Navbar() {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">
                    MarioPlan
                </Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    );
}

export default Navbar;