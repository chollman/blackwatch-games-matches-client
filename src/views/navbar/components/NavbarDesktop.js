import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Menu,
    Segment,
    Responsive,
    Visibility,
    Transition,
} from 'semantic-ui-react';

import MenuLinks from './MenuLinks';

const NavbarDesktop = ({ location, color }) => {
    const [activeItem, setActiveItem] = useState(location.pathname);
    const [fixed, setFixed] = useState(false);

    const handleItemClick = (e, { to }) => setActiveItem(to);

    const navbarFixed = fixed ? 'nav-fixed' : '';

    return (
        <Responsive
            className="bgm-navbar-desktop"
            minWidth={Responsive.onlyTablet.minWidth}
        >
            <Visibility
                once={false}
                onBottomPassed={() => setFixed(true)}
                onBottomPassedReverse={() => setFixed(false)}
            >
                <Segment
                    className={`nav-menu desktop ${navbarFixed}`}
                    textAlign="center"
                    basic
                    inverted={!!color}
                    color={color}
                >
                    <Transition
                        unmountOnHide={true}
                        visible={!fixed}
                        animation="slide up"
                        duration={300}
                    >
                        <Container className="bg-menu">
                            <Menu pointing secondary>
                                <MenuLinks
                                    activeItem={activeItem}
                                    handleItemClick={handleItemClick}
                                />
                                <Menu.Item position="right">Login</Menu.Item>
                            </Menu>
                        </Container>
                    </Transition>
                    <Transition
                        unmountOnHide={true}
                        visible={fixed}
                        animation="slide down"
                        duration={500}
                    >
                        <Menu fixed="top" pointing secondary>
                            <Container className="bg-menu">
                                <MenuLinks
                                    activeItem={activeItem}
                                    handleItemClick={handleItemClick}
                                />
                                <Menu.Item position="right">Login</Menu.Item>
                            </Container>
                        </Menu>
                    </Transition>
                </Segment>
            </Visibility>
        </Responsive>
    );
};

NavbarDesktop.propTypes = {
    location: PropTypes.object.isRequired,
};

export default NavbarDesktop;
