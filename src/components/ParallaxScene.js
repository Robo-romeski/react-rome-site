import React, { Component } from 'react';
import Parallax from 'parallax-js';

export default class ParallaxScene extends Component {


  componentDidMount(){
    new Parallax(this.refs.scene);
    // this._renderContent(this.props);
  }
  render(){
    return(
      <div ref="scene" data-friction-x="0.5"
        data-friction-y="0.1"
        data-pointer-events="true"
        data-relative-input="true"
        data-calibrate-x="true"
        data-limit-x="5"
        data-limit-y="5"
        data-scalar-x="5"
        data-scalar-y="5">
      {this.props.children}
     </div>);
  }
}
