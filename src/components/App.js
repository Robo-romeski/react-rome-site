import React, { Component } from 'react';
import Top from './Top.js';
import Works from './Works.js';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Top} />
        <Route exact path="/works" component={Works} />
        <Route exact path="/works/:transition" component={Works} />
      </div>
    );
  }
}

export default App;
