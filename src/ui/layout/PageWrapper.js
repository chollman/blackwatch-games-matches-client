import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../views/navbar';

const PageWrapper = ({ children, location, color }) => {
    return (
        <div className="bgm-page-wrapper">
            <Navbar location={location} color={color} />
            {children}
        </div>
    );
};

PageWrapper.prototype = {
    children: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    color: PropTypes.string,
};

export default PageWrapper;
