import React from 'react';
import { TweenLite } from 'gsap';
import ReactDOM from 'react-dom';
import './components/css/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './components/css/home.css';
import './components/css/animate.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
