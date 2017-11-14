import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TweenMax, TweenLite } from 'gsap';
import Parallax from 'parallax.js';
import ParallaxScene from './ParallaxScene.js';
import ParallaxLayer from './ParallaxLayer.js';
import Cascade from '../Cascade.css';
import Background from '../Background.css';


let i = 0;
const Email = "me@jeromeomoore.com";

export default class Top extends Component {
  constructor(props) {
      super(props);
  }

_handle(){
  this.setState({ahoj: i++ });
}

  getInitialState(){
    return {ahoj:i}
  }
render(){

  return (
    <div>
    <ParallaxScene>
    <ParallaxLayer depth={0.2}><div style={Background}></div></ParallaxLayer>
    <ParallaxLayer depth={0.6}>

    <div style={Cascade} id="content">
      <div ref="logobox" id="logobox" className="logo_box animated zoomInLeft"><h1>Jerome<br/>O.<br/>Moore</h1></div>
      <div ref="mainbox" className="main_box">
        <h2> Connect With Me!<br/><span></span></h2>

        <ul className="info">
          <li>
            <h3>P</h3>
            <p>1-347-788-8436<br/></p>
          </li>
           <li>
            <h3>E</h3>
            <p><a className="reslink" href={`mailto:${Email}`}>email me</a></p>
          </li>
          <li>
            <h3>W</h3>
            <p><a target="_blank" className="reslink">My Works</a></p>
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
    </ParallaxLayer>
    </ParallaxScene>
    </div>
    );
  }
}
