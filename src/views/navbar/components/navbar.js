import React from 'react';

import NavbarDesktop from './navbar-desktop';
import NavbarMobile from './navbar-mobile';

import '../navbar.scss';

const NavbarWithRoutes = ({ location }) => {
    return (
        <>
            <NavbarDesktop location={location} />
            <NavbarMobile location={location} />
        </>
    );
};

export default NavbarWithRoutes;
