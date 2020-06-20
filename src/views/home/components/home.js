import React from 'react';
import { Segment, Header, Icon, Image, Grid } from 'semantic-ui-react';
import src from '../../../styles/img/test-image.png';

const Home = () => {
    return (
        <Grid container stackable verticalAlign="middle">
            <Grid.Row>
                <Grid.Column width={16}>
                    <Segment className="content-box" textAlign="center">
                        <Header icon>
                            <Icon name="pdf file outline" />
                            Home
                            <Segment vertical>
                                <Image fluid src={src} centered />
                            </Segment>
                            <Segment vertical>
                                <Image fluid src={src} centered />
                            </Segment>
                            <Segment vertical>
                                <Image fluid src={src} centered />
                            </Segment>
                            <Segment vertical>
                                <Image fluid src={src} centered />
                            </Segment>
                            <Segment vertical>
                                <Image fluid src={src} centered />
                            </Segment>
                            <Segment vertical>
                                <Image fluid src={src} centered />
                            </Segment>
                        </Header>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Home;
