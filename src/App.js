import React from 'react';
import { Router } from 'react-router-dom';
import history from './history';

import NavbarWithRoutes from './views/navbar';

import 'semantic-ui-css/semantic.min.css';
import './styles/global.scss';

const App = () => {
    return (
        <Router history={history}>
            <div className="bgm">
                <NavbarWithRoutes location={history.location} />
            </div>
        </Router>
    );
};

export default App;
