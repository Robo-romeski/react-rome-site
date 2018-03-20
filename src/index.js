import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './components/css/bootstrap/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './components/css/animate.css';
import './components/css/home.css';


import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// import './index.css';

ReactDOM.render(<BrowserRouter>
                    <App />
                    </BrowserRouter>, 
                    document.getElementById('root'));

registerServiceWorker();
