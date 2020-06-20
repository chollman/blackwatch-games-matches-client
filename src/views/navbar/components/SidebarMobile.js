import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
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
            animation="overlay"
            inverted
            icon="labeled"
            onHide={handleSidebarHide}
            onHidden={handleSidebarFinishedHiding}
            vertical
            visible={sidebarOpened}
            width="thin"
        >
            <Menu.Item
                as={Link}
                to="/"
                active={activeItem === '/'}
                onClick={handleItemClick}
            >
                <Icon name="home" size="large" />
            </Menu.Item>
            <Menu.Item
                as={Link}
                to="/usuarios"
                active={activeItem === '/usuarios'}
                onClick={handleItemClick}
            >
                Usuarios
            </Menu.Item>
            <Menu.Item
                as={Link}
                to="/admin"
                active={activeItem === '/admin'}
                onClick={handleItemClick}
            >
                Admin
            </Menu.Item>
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
