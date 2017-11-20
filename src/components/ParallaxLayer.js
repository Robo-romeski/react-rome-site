import React, { Component } from 'react';

export default class ParallaxLayer extends Component {

  render(){
    return (
      <div className="layer"
      data-depth={this.props.depth}>
      {this.props.children}
      </div>);
  }
}
