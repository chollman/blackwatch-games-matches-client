import React from 'react';
import PropTypes from 'prop-types';

import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

import '../navbar.scss';

const Navbar = ({ location, color }) => {
    return (
        <>
            <NavbarDesktop location={location} color={color} />
            <NavbarMobile location={location} />
        </>
    );
};

Navbar.propTypes = {
    location: PropTypes.object.isRequired,
    color: PropTypes.string,
};

export default Navbar;
