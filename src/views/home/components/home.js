import React from 'react';
import {
    Segment,
    Image,
    Grid,
    Icon,
    Container,
    Header,
} from 'semantic-ui-react';

const Home = () => {
    return (
        <div>
            <Container>
                <Segment className="npb" basic textAlign="center">
                    <Header>
                        <h1>Matches Creator</h1>
                    </Header>
                </Segment>
            </Container>
            <Grid container stackable>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Segment basic>
                            <Image
                                fluid
                                src="https://instagram.faep5-1.fna.fbcdn.net/v/t51.2885-19/s320x320/51379337_264214921155196_3132253399102259200_n.jpg?_nc_ht=instagram.faep5-1.fna.fbcdn.net&_nc_ohc=SWB5JCvd66oAX_dbudz&oh=7b9e353a703394a75bbabe4473d258a6&oe=5F1A29AF"
                                alt="@pampibasset"
                                rounded
                                centered
                            />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={8} stretched>
                        <Segment basic textAlign="center" placeholder>
                            Pampita the Basset
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Container>
                <Segment className="content-box" textAlign="center">
                    Visitenla en
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/pampibasset/?hl=es-la"
                    >
                        <Icon size="large" name="instagram" />
                        @pampibasset
                    </a>
                </Segment>
            </Container>
        </div>
    );
};

export default Home;
