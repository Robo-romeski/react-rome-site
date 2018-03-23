import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
// import { TweenLite } from 'gsap';
// import profile from '../images/profile.jpg';
import Card from './Card.js';
import Skills from './Skills.js';
import Footer from './Footer.js';
import kepler from '../images/kepler-ol.gif';
import hubble from '../images/hubble.gif';
import colorforcode from '../images/c4c.png';
import bonita from '../images/bonita.png';
import grahamstak from '../images/graham-stak.png';
import isow from '../images/isow.png';

export default class Works extends Component {

    componentWillUnmount(){
        let hinge = ReactDOM.findDOMNode(this.refs.hinge);
        console.log(hinge);
        ReactDOM.unmountComponentAtNode(hinge);
    }

    render() {
        const Robo = {
            email: "me@jeromeomoore.com",
            phone: "1(347)788-8436",
            skype: "skype:jerome_0_moore?add",
            github: "https://github.com/Robo-romeski",
            linkedin: "https://www.linkedin.com/in/jerome-o-moore"
        }
        return (
            <div className="works-container">
                <div className="works-header">
                    <div className="container">
                        <div className="row">

                            <div className="">
                                <div className="float-right">
                                    <h3> My name is Jerome Moore. I am a tech enthusiast from New York City and a proud U.S. naval veteran. My focuses are developing applications and deploying them for availability, reliability and security. I am currently in the market for Front-end React and DevOps roles.
                        </h3>
                                </div> </div>
                            <div>
                                <br />
                                <p>I am a well versed in many skills surrounding tech; Starting from Linux server administration, to most recently landing into a DevOps/Front-end Development hybrid space. In my 10-year history, I have been a part of some magical projects - contact me and ask me how I can help you with your present initiatives. </p>
                            </div>
                        </div>
                            <Skills/>
                        <hr />

                        <div className="row">
                            <div className="col-md-4">
                                <img src={grahamstak} className="giffies" alt="GrahamStak.com" />
                            </div>
                            <div className="col-md-8">
                                <h4>GrahamStak <span>(DevOps Contracting)</span></h4>
                                <p> This is my latest endeavor - building an automated scaffolding server system from diagramming architecture to completed finished product. running a kubernetes API to deploy docker instances and manage them via ansible playbooks tailored to customer specifications.</p>
                            </div>
                        </div>

                        <hr/>
                        <div className="row">
                            <div className="col-md-4">
                                <img src={kepler} className="giffies" alt="SystemOnGrid.com"/>
                            </div>
                            <div className="col-md-8">
                                <h4>Kepler <span>(Web-based ssh-shell)</span></h4>
                                <p>I was the lead on this revolutionary project; using web sockets and a node proxy server to relay commands back and forth to an OpenStack API instance. Giving shell access through your web browser opens up levels of convenience not known in todays cloud environments.  </p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-4">
                                <img src={hubble} className="giffies" alt="SystemOnGrid.com"/>
                            </div>
                            <div className="col-md-8">
                                <h4>Hubble <span>(NoVNC)</span></h4>
                                <p>Creating the ability for GUI interations on the platform for Linux machines was an interesting project feature
                                    for me; It became a fun experience and taught me a lot more about security and video encoding. 
                                    All in all, an excellent project to be a part of.   </p>
                            </div>
                        </div>

                        <hr />

                        <div className="row">
                            <div className="col-md-4">
                                <img src={colorforcode} className="giffies" alt="ColorForCode.com"/>
                            </div>
                            <div className="col-md-8">
                                <h4>Color For Code <span>(CI/CD integration)</span></h4>
                                <p> I was approached by the owners to automate the deployment pipeline - I used husky.js to access the post deploy git hooks, that trigger off an ansible playbook to download production branch, build production files, then move into the web directory and finally restarts nginx. </p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-4">
                                <img src={isow} className="giffies" alt="ISow.com"/>
                            </div>
                            <div className="col-md-8">
                                <h4>ISow <span>(Backend platform for analytics)</span></h4>
                                <p> aggregated data from database users and google analytics page views to narrow down key metrics and measure performance initiatives.</p>
                            </div>
                        </div>

                        <hr/>

                        <div className="row">
                            <div className="col-md-4">
                                <img src={bonita} className="giffies" alt="JustBonita"/>
                            </div>
                            <div className="col-md-8">
                                <h4>JustBonita <span>(Web Design/Development)</span></h4>
                                <p> one of my favorite projects in my dive into freelancing - 
                                    creating a custom site with a video background, music purchase page 
                                    and blog integration. GSAP.js animations for page transitions 
                                    and mouse overs, responsive design, as well as platform specific 
                                    adaptations (iTunes/Google Play markets). </p>
                            </div>
                        </div>






                    </div>
                </div>
                <div className="hinge animated top-container" ref="hinge" id="hinge">
                    <Card phone={Robo.phone}
                        email={Robo.email}
                        skype={Robo.skype}
                        github={Robo.github}
                        linkedin={Robo.linkedin}
                    />
                </div>
                
                <Footer/>

            </div>
        )
    }
}