import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import PageWrapper from './ui/layout/PageWrapper';
import Admin from './views/admin';
import Home from './views/home';
import Users from './views/users';

const Routes = ({ location }) => {
    return (
        <Switch>
            <Route path="/admin">
                <PageWrapper location={location}>
                    <Admin />
                </PageWrapper>
            </Route>
            <Route path="/usuarios">
                <PageWrapper location={location}>
                    <Users />
                </PageWrapper>
            </Route>
            <Route path="/">
                <PageWrapper location={location} color="black">
                    <Home />
                </PageWrapper>
            </Route>
        </Switch>
    );
};

Routes.propTypes = {
    location: PropTypes.object.isRequired,
};

export default Routes;
