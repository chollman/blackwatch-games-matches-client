import React from 'react';
import { Segment, Image, Grid, Icon } from 'semantic-ui-react';
import src from '../../../styles/img/pampi.png';

const Home = () => {
    return (
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
            <Grid.Row>
                <Grid.Column width={16}>
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
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Home;
