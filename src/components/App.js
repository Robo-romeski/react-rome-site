import React, { Component } from 'react';
import Top from './Top.js';
import Works from './Works.js';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Top} />
        <Route exact path="/works" component={Works} />
      </div>
    );
  }
}

export default App;
