import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { TweenMax, TweenLite } from 'gsap';
// import Parallax from 'parallax.js';

export default class ParallaxLayer extends Component {

  render(){
    return (
      <li className="layer"
      data-depth={this.props.depth}>
      {this.props.children}
      </li>);
  }
}
