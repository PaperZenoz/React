import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import SamuraiApp from "./App";


ReactDOM.render(
    <SamuraiApp/>, document.getElementById('root'));


serviceWorker.unregister();






