import React from 'react';
import {
    Grid,
    List,
    Segment,
    Image,
    Divider,
    Loader,
    Placeholder,
} from 'semantic-ui-react';

const renderUsersList = users => {
    return (
        <List>
            <Divider fitted />
            {users.map(user => {
                return (
                    <React.Fragment key={user.id}>
                        <List.Item>
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
                        </List.Item>
                        <Divider fitted />
                    </React.Fragment>
                );
            })}
        </List>
    );
};

const Users = ({ users }) => {
    if (users.isLoading) {
        return (
            <Grid container stackable verticalAlign="middle">
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Segment
                            className="content-box placeholder-segment"
                            textAlign="center"
                        >
                            <Loader active inverted />
                            <Placeholder fluid inverted>
                                <Placeholder.Line />
                                <Placeholder.Line />
                                <Placeholder.Line />
                                <Placeholder.Line />
                                <Placeholder.Line />
                            </Placeholder>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
    return (
        <Grid container stackable verticalAlign="middle">
            <Grid.Row>
                <Grid.Column width={16}>
                    <Segment className="content-box" textAlign="center">
                        {users.total > 0 && renderUsersList(users.data)}
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Users;
