import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Sidebar } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
            animation="push"
            inverted
            onHide={handleSidebarHide}
            onHidden={handleSidebarFinishedHiding}
            vertical
            visible={sidebarOpened}
        >
            <Sidebar.Pusher dimmed={sidebarOpened}>
                <Menu.Item
                    as={Link}
                    to="/"
                    active={activeItem === '/'}
                    onClick={handleItemClick}
                >
                    Home
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/admin"
                    active={activeItem === '/admin'}
                    onClick={handleItemClick}
                >
                    Admin
                </Menu.Item>
            </Sidebar.Pusher>
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
