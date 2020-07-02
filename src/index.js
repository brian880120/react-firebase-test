import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppFirebase from './config/firebase-config';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './index.css';

AppFirebase.init();

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route component={App} />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
