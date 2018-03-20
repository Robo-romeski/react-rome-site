import React, { Component } from 'react';
// import { TweenMax, TweenLite } from 'gsap';
import ParallaxScene from './ParallaxScene.js';
import ParallaxLayer from './ParallaxLayer.js';
import Card from './Card.js';

const Robo = {
  email: "me@jeromeomoore.com",
  phone: "1(347)788-8436",
  skype: "skype:jerome_0_moore?add",
  github: "https://github.com/Robo-romeski",
  linkedin: "https://www.linkedin.com/in/jerome-o-moore"
}

export default class Top extends Component {
  render() {

    return (
      <div className="top-container fadeInDown animated">
      <div className="contain">
        <ParallaxScene>
          <ParallaxLayer depth={0.4}>
            <Card phone={Robo.phone}
                  email={Robo.email} 
                  skype={Robo.skype}
                  github={Robo.github}
                  linkedin={Robo.linkedin}
                    />
          </ParallaxLayer>
        </ParallaxScene>
      </div>
      </div>
    );
  }
}
