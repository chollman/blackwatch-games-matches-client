import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Menu, Segment } from 'semantic-ui-react';

import './navbar.scss';

const Navbar = ({ location }) => {
    const [activeItem, setActiveItem] = useState(location.pathname);

    const handleItemClick = (e, { to }) => setActiveItem(to);

    return (
        <Segment className="nav-menu" textAlign="center" vertical>
            <Menu className="Menu" size="large">
                <Container>
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
                    <Menu.Item position="right">
                        <Button as="a" inverted>
                            Log in
                        </Button>
                        <Button
                            as="a"
                            inverted
                            primary
                            style={{ marginLeft: '0.5em' }}
                        >
                            Sign Up
                        </Button>
                    </Menu.Item>
                </Container>
            </Menu>
        </Segment>
    );
};

export default Navbar;
