import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import store from './store'

import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
document.getElementById('root'));