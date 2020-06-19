import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

import Navbar from './views/navbar/components/navbar';
import Home from './views/home/containers/home';
import Admin from './views/admin/containers/admin';

import './App.scss';

function App() {
    return (
        <Router history={history}>
            <div>
                <Navbar location={history.location} />
                <Switch>
                    <Route path="/admin">
                        <Admin />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
