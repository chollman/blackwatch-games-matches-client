import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const MenuLinks = ({ activeItem, handleItemClick }) => {
    return (
        <>
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
        </>
    );
};

MenuLinks.propTypes = {
    handleItemClick: PropTypes.func,
};

export default MenuLinks;
