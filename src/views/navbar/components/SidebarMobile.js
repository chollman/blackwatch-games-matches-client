import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Sidebar } from 'semantic-ui-react';
import MenuLinks from './MenuLinks';

const SidebarMobile = ({
    location,
    sidebarOpened,
    handleSidebarHide,
    handleSidebarFinishedHiding,
}) => {
    const [activeItem, setActiveItem] = useState(location.pathname);
    const handleItemClick = (e, { to }) => {
        setActiveItem(to);
        handleSidebarHide();
    };
    return (
        <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            icon="labeled"
            onHide={handleSidebarHide}
            onHidden={handleSidebarFinishedHiding}
            vertical
            visible={sidebarOpened}
            width="thin"
        >
            <MenuLinks
                activeItem={activeItem}
                handleItemClick={handleItemClick}
            />
        </Sidebar>
    );
};

SidebarMobile.propTypes = {
    location: PropTypes.object.isRequired,
    sidebarOpened: PropTypes.bool,
    handleSidebarHide: PropTypes.func,
    handleSidebarFinishedHiding: PropTypes.func,
};

export default SidebarMobile;
