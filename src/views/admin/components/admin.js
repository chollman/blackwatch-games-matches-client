import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

const Admin = () => {
    return (
        <Grid container stackable verticalAlign="middle">
            <Grid.Row>
                <Grid.Column width={16}>
                    <Segment className="content-box" textAlign="center">
                        Admin
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Admin;
