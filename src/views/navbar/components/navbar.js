import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Segment } from 'semantic-ui-react';

import './navbar.scss';

const Navbar = ({ pushed, location }) => {
    const [activeItem, setActiveItem] = useState(location.pathname);

    const handleItemClick = (e, { to }) => setActiveItem(to);

    return (
        <Segment
            className={`nav-menu ${pushed ? 'pushed' : ''}`}
            textAlign="center"
            basic
        >
            <Container>
                <Menu className="content-box bg-menu" pointing secondary>
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
                </Menu>
            </Container>
        </Segment>
    );
};

export default Navbar;
