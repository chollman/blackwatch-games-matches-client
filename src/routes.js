import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Admin from './views/admin';
import Home from './views/home';

const Routes = () => {
    return (
        <Switch>
            <Route path="/admin">
                <Admin />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
};

export default Routes;
