import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Menu,
    Segment,
    Responsive,
    Visibility,
} from 'semantic-ui-react';

import Routes from '../../../routes';
import MenuLinks from './MenuLinks';

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
                            <MenuLinks
                                activeItem={activeItem}
                                handleItemClick={handleItemClick}
                            />
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
