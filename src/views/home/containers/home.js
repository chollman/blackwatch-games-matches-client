import React from 'react';
import { Container, Segment, Header, Icon, Image } from 'semantic-ui-react';
import src from './img/test-image.png';

const Home = () => {
    return (
        <Container>
            <Segment className="content-box" textAlign="center">
                <Header icon>
                    <Icon name="pdf file outline" />
                    Home
                    <Segment vertical>
                        <Image fluid src={src} centered />
                    </Segment>
                </Header>
            </Segment>
        </Container>
    );
};

export default Home;
