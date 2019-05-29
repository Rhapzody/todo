import React from 'react';
import ReactDOM from 'react-dom';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './index.css';
import * as ons from 'onsenui';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Redux
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";

//Check Local Storage
if (!localStorage.getItem('todo-list')) {
    localStorage.setItem('todo-list', JSON.stringify([]));   
}

//Select Platform Theme
ons.platform.select('ios');

//Create Redux Store
const store = createStore(reducers, {});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
