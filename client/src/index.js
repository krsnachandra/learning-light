import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App/';
import registerServiceWorker from './registerServiceWorker';
import CircularProgressbar from 'react-circular-progressbar';


ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
