import React from 'react';
import { Grid, List, Segment } from 'semantic-ui-react';

const renderUsersList = users => {
    return (
        <List>
            {users.map(user => {
                return (
                    <List.Item key={user.id}>
                        {user.first_name} {user.last_name}
                    </List.Item>
                );
            })}
        </List>
    );
};

const Users = ({ users }) => {
    return (
        <Grid container stackable verticalAlign="middle">
            <Grid.Row>
                <Grid.Column width={16}>
                    <Segment className="content-box" textAlign="center">
                        {users && users.length && renderUsersList(users)}
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Users;
