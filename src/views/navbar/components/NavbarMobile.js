import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Menu,
    Segment,
    Responsive,
    Icon,
    Sidebar,
} from 'semantic-ui-react';

import SidebarMobile from './SidebarMobile';

const NavbarMobile = ({ location }) => {
    const [sidebarOpened, setSidebarOpened] = useState(false);
    const [sidebarOpenedOrAnimating, setSidebarAnimationFinished] = useState(
        false
    );

    const handleSidebarHide = () => setSidebarOpened(false);
    const handleToggle = () => {
        setSidebarAnimationFinished(true);
        setSidebarOpened(true);
    };
    const handleSidebarFinishedHiding = () =>
        setSidebarAnimationFinished(false);

    const fixedHeight = sidebarOpenedOrAnimating ? 'fixed-height' : '';

    return (
        <Responsive
            className="bgm-navbar-mobile"
            as={Sidebar.Pushable}
            maxWidth={Responsive.onlyMobile.maxWidth}
        >
            <SidebarMobile
                location={location}
                handleSidebarHide={handleSidebarHide}
                sidebarOpened={sidebarOpened}
                handleSidebarFinishedHiding={handleSidebarFinishedHiding}
            />
            <Sidebar.Pusher className={fixedHeight} dimmed={sidebarOpened}>
                <Segment className="nav-menu mobile" textAlign="center" basic>
                    <Menu size="large" pointing secondary>
                        <Container className="bg-menu">
                            <Menu.Item onClick={handleToggle}>
                                <Icon name="sidebar" />
                            </Menu.Item>
                            <Menu.Item position="right">Login</Menu.Item>
                        </Container>
                    </Menu>
                </Segment>
            </Sidebar.Pusher>
        </Responsive>
    );
};

NavbarMobile.propTypes = {
    location: PropTypes.object.isRequired,
};

export default NavbarMobile;
