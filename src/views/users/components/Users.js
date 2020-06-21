import React from 'react';
import { Grid, List, Segment, Image, Divider } from 'semantic-ui-react';

const renderUsersList = users => {
    return (
        <List>
            {users.map(user => {
                return (
                    <List.Item key={user.id}>
                        <Segment basic>
                            <Image
                                src={user.avatar}
                                size="mini"
                                verticalAlign="middle"
                                circular
                                spaced="right"
                            />
                            {user.first_name} {user.last_name}
                        </Segment>
                        <Divider />
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
