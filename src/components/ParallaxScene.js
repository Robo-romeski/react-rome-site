import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { TweenMax, TweenLite } from 'gsap';
import Parallax from 'parallax-js';

export default class ParallaxScene extends Component {


  componentDidMount(){
    new Parallax(this.refs.scene);
    // this._renderContent(this.props);

  }
  render(){
    return(
      <ul ref="scene" data-friction-x="0.1"
        data-friction-y="0.1"
        data-pointer-events="true"
        data-relative-input="true"
        data-calibrate-x="true"
        data-limit-x="50"
        data-limit-y="50"
        data-scalar-x="25"
        data-scalar-y="15">
      {this.props.children}
     </ul>);
  }
}
