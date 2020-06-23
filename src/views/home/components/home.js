import React from 'react';
import { Segment, Image, Grid, Icon, Container } from 'semantic-ui-react';
import src from '../../../styles/img/pampi.png';

const Home = () => {
    return (
        <div>
            <Grid container stackable>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Segment basic>
                            <Image fluid src={src} centered />
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
