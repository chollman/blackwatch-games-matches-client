import React from 'react';
import {
    Segment,
    Image,
    Grid,
    Icon,
    Container,
    Header,
} from 'semantic-ui-react';

import './../home.scss';

const Home = () => {
    return (
        <>
            <Segment className="home-main" placeholder inverted basic vertical>
                <Container textAlign="center">
                    <Header>
                        <h1>Matches Creator</h1>
                    </Header>
                </Container>
            </Segment>
            <Segment basic vertical>
                <Grid container stackable>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image
                                fluid
                                src="https://instagram.faep5-1.fna.fbcdn.net/v/t51.2885-19/s320x320/51379337_264214921155196_3132253399102259200_n.jpg?_nc_ht=instagram.faep5-1.fna.fbcdn.net&_nc_ohc=SWB5JCvd66oAX_dbudz&oh=7b9e353a703394a75bbabe4473d258a6&oe=5F1A29AF"
                                alt="@pampibasset"
                                rounded
                                centered
                            />
                        </Grid.Column>
                        <Grid.Column
                            width={8}
                            stretched
                            verticalAlign="middle"
                            textAlign="center"
                        >
                            Pampita the Basset
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment basic vertical>
                <Container>
                    <Segment className="content-box" textAlign="center">
                        Visitenla en
                        <a
                            style={{ color: '#02affe' }}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/pampibasset/?hl=es-la"
                        >
                            <Icon size="large" name="instagram" />
                            @pampibasset
                        </a>
                    </Segment>
                </Container>
            </Segment>
        </>
    );
};

export default Home;
