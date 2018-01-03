import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TweenMax, TweenLite } from 'gsap';
import ParallaxScene from './ParallaxScene.js';
import ParallaxLayer from './ParallaxLayer.js';
import ResumeTip from './ResumeTip.js';
import { Tooltip } from 'react-bootstrap';

const Robo = {
  email: "me@jeromeomoore.com",
  phone: "1(347)788-8436"
}

export default class Top extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div className="contain">
        <ParallaxScene>
          <ParallaxLayer depth={0.4}>
            <div id="home-page" className="container-fluid">
              <div id="inner-container" className="container">
                <div className="row">
                  <div className="col-md-6 logo_box animated zoomInLeft">
                    <h1>JEROME O. MOORE</h1>
                    <Tooltip placement="right" className="in" id="tooltip-right">
                      Tooltip right
                    </Tooltip>
                  </div>
                  <div className="col-md-6">
                    <h2>connect with me!</h2>
                    <ul className="info">
                      <li>
                        <h3>P</h3>
                        <p><a className="reslink" href={`tel:${Robo.phone}`}>{Robo.phone}</a></p>
                      </li>
                      <li>
                        <h3>E</h3>
                        <p><a className="reslink" href={`mailto:${Robo.email}`}>{Robo.email}</a></p>
                      </li>
                      <li>
                        <h3>W</h3>
                        <p className="reslink finga" onClick={this.toggleScreen}>My Works</p>
                      </li>
                      <li>
                        <h3>S</h3>
                        <p className="social">
                          <a href="skype:jerome_0_moore?add"><i className="fa fa-skype fa-3x tw"></i></a>
                          <a href="https://github.com/Robo-romeski" target="_blank"><i className="fa fa-github-square fa-3x tw"></i></a>
                          <a href="https://www.linkedin.com/in/jerome-moore-31bb3620" target="_blank"><i className="fa fa-linkedin-square fa-3x tw"></i></a>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxLayer>
        </ParallaxScene>
      </div>
    );
  }
}
