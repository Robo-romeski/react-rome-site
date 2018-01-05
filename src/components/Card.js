import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Card extends Component {
    render(){
        return (
            <div id="home-page" className="container-fluid">
            <div id="inner-container" className="container">
              <div className="row">
                <div className="col-md-6 logo_box animated zoomInLeft">
                  <h1>JEROME O. MOORE</h1>
                </div>
                <div className="col-md-6">
                  <h2>connect with me!</h2>
                  <ul className="info">
                    <li>
                      <h3>P</h3>
                      <p><a className="reslink" href={`tel:${this.props.phone}`}>{this.props.phone}</a></p>
                    </li>
                    <li>
                      <h3>E</h3>
                      <p><a className="reslink" href={`mailto:${this.props.email}`}>{this.props.email}</a></p>
                    </li>
                    <li>
                      <h3>W</h3>
                      <Link to='/works'><p className="reslink finga">My Works</p></Link>
                    </li>
                    <li>
                      <h3>S</h3>
                      <p className="social">
                        <a href={this.props.skype}><i className="fa fa-skype fa-3x tw"></i></a>
                        <a href={this.props.github} target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square fa-3x tw"></i></a>
                        <a href={this.props.linkedin} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square fa-3x tw"></i></a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
    }
}