import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import App from 'containers/App/App.jsx';

import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/sass/light-bootstrap-dashboard.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';
import './assets/css/index.css';
import './assets/css/datatable.css';


import Main from './Main'



ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path="/register" name="register" component={Main}/>
            <Route path="/" name="Home" component={App}/>
        </Switch>
    </BrowserRouter>
),document.getElementById('root'));
