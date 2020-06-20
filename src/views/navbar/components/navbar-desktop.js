import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Container,
    Menu,
    Segment,
    Responsive,
    Visibility,
} from 'semantic-ui-react';

import Routes from '../../../routes';

const NavbarDesktop = ({ location }) => {
    const [activeItem, setActiveItem] = useState(location.pathname);
    const [fixed, setFixed] = useState(false);

    const handleItemClick = (e, { to }) => setActiveItem(to);
    const hideFixedMenu = () => setFixed(false);
    const showFixedMenu = () => setFixed(true);

    const navbarFixed = fixed ? 'nav-fixed' : '';

    return (
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Visibility
                once={false}
                onBottomPassed={showFixedMenu}
                onBottomPassedReverse={hideFixedMenu}
            >
                <Segment
                    className={`nav-menu desktop ${navbarFixed}`}
                    textAlign="center"
                    basic
                >
                    <Menu fixed={fixed ? 'top' : null} pointing secondary>
                        <Container className="bg-menu">
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
                            <Menu.Item position="right">Login</Menu.Item>
                        </Container>
                    </Menu>
                </Segment>
            </Visibility>
            <Routes />
        </Responsive>
    );
};

NavbarDesktop.propTypes = {
    location: PropTypes.object.isRequired,
};

export default NavbarDesktop;
