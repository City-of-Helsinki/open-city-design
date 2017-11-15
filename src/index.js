import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bootstarp from 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
