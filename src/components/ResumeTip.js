import React, { Component } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';


export default class ResumeTip extends Component {

    render() {
      let tooltip = <Tooltip id={this.props.id}>{this.props.tooltip}</Tooltip>;

      return (
        <OverlayTrigger
          overlay={tooltip}
          placement="left"
          delayShow={300}
          delayHide={150}
        >
          <a href={this.props.href}>{this.props.children}</a>
        </OverlayTrigger>
      );
    }
  };
