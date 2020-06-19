import React from 'react';
import { Container, Segment, Header, Icon, Image } from 'semantic-ui-react';
import src from './img/test-image.png';

const Home = () => {
    return (
        <Container>
            <Segment textAlign="center" vertical>
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
