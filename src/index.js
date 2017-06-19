import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import * as comp from '@blueprintjs/core'
import * as comp from "teselagen-react-components"

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
