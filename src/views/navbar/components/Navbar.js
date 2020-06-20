import React from 'react';
import PropTypes from 'prop-types';

import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

import '../navbar.scss';

const NavbarWithRoutes = ({ location }) => {
    return (
        <>
            <NavbarDesktop location={location} />
            <NavbarMobile location={location} />
        </>
    );
};

NavbarWithRoutes.propTypes = {
    location: PropTypes.object.isRequired,
};

export default NavbarWithRoutes;
