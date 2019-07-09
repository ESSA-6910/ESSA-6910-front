import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import './res/css/index.css';
import App from './res/js/components/App';
import store from "./res/js/store/rootStore";
import * as serviceWorker from './res/js/serviceWorker';

render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
    , document.getElementById('root')
)

serviceWorker.unregister()