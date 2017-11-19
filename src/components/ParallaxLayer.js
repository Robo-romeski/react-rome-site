import React, { Component } from 'react';

export default class ParallaxLayer extends Component {

  render(){
    return (
      <li className="layer"
      data-depth={this.props.depth}>
      {this.props.children}
      </li>);
  }
}
