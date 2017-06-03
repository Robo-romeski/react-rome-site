import React, { Component } from 'react';

class primarydiv extends Component {
  render() {
    return (
<div id="content">
  <div id="logobox" className="logo_box animated zoomInLeft"><h1>Jerome<br/>O.<br/>Moore</h1></div>          
  <div className="main_box">
    <h2>Coming Soon!<br/><span>In the mean time you can connect with me with the information below...</span></h2>
    
    <ul className="info">
      <li>
        <h3>P</h3>
        <p>1-347-788-8436<br/></p>
      </li>
       <li>
        <h3>E</h3>
        <p><a className="reslink" href="mailto:me@jeromeomoore.com?Subject=Hello">me@jeromeomoore.com</a></p>
      </li>
      <li>
        <h3>R</h3>
        <p><a target="_blank" className="reslink">My Resume</a></p>
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
    );
  }
}

export default primarydiv;
