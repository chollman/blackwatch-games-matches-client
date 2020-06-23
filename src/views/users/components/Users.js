import React from 'react';
import {
    Grid,
    List,
    Segment,
    Divider,
    Loader,
    Placeholder,
} from 'semantic-ui-react';
import InlineError from '../../../ui/error';
import ImageLoader from '../../../ui/imageLoader';

const renderUsersList = users => {
    return (
        <List>
            <Divider fitted />
            {users.map(user => {
                return (
                    <React.Fragment key={user.id}>
                        <List.Item>
                            <Segment basic>
                                <ImageLoader
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

const renderLoading = () => {
    return (
        <Segment basic>
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
        </Segment>
    );
};

const renderError = error => {
    return (
        <Segment basic>
            <Grid container stackable verticalAlign="middle">
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Segment
                            placeholder
                            className="content-box placeholder-segment"
                            textAlign="center"
                        >
                            <InlineError error={error} />
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
};

const Users = ({ users }) => {
    if (users.isLoading) {
        return renderLoading();
    }
    if (users.error) {
        return renderError(users.error);
    }
    return (
        <Segment basic>
            <Grid container stackable verticalAlign="middle">
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Segment className="content-box" textAlign="center">
                            {users.total > 0 && renderUsersList(users.data)}
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
};

export default Users;
