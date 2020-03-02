import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Editar from './components/Editar';
import Criar from './components/Criar';
import Mostrar from './components/Mostrar';
// eslint-disable-next-line no-unused-vars
import Appcss from './App.css'
import {
    // eslint-disable-next-line no-unused-vars
    BrowserRouter,
    // eslint-disable-next-line no-unused-vars
    Switch,
  } from "react-router-dom";
  

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>

                <Route exact path='/' component={App} />
                <Route path='/editar/:id' component={Editar} />
                <Route path='/criar' component={Criar} />
                <Route path='/mostrar/:id' component={Mostrar} />
        </div>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
registerServiceWorker();
