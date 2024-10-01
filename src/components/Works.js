import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateTransition } from '../actions/transition-actions';
// import { TweenLite } from 'gsap';
// import profile from '../images/profile.jpg';
import Card from './Card.js';
import Skills from './Skills.js';
import Footer from './Footer.js';
import kepler from '../images/kepler-ol.gif';
import hubble from '../images/hubble.gif';
import colorforcode from '../images/c4c.png';
import procore from '../images/procore.png';
import easymetrics from '../images/easymetrics.png'
import grahamstak from '../images/graham-stak.png';
import igt from '../images/ingeniousthought.png';
import isow from '../images/isow.png';
import romecode from '../images/romecode.jpg';

class Works extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const Robo = {
            email: "me@jeromeomoore.com",
            phone: "1(347)788-8436",
            skype: "skype:jerome_0_moore?add",
            github: "https://github.com/Robo-romeski",
            linkedin: "https://www.linkedin.com/in/jerome-o-moore"
        }
        const transition = this.props.transition;

        return (
            <div className="works-container">
                <div className="works-header">
                    <div className="container">
                        <div className="row">

                            <div className="">
                                <div className="float-right">
                                    <h3> My name is Jerome Moore. I am a tech enthusiast from New York City and a proud U.S. naval veteran. My focuses are developing applications and deploying them for availability, reliability and security. I am currently in the market for Cloud Architect, SRE and DevOps roles.
                        </h3>
                                </div> </div>
                            <div>
                                <br />
                                <p>I am a versatile technology professional with 15 years of experience, starting with Linux server administration and evolving into the DevOps hybrid space. Throughout my career, I’ve contributed to numerous innovative projects, including building scalable infrastructure, implementing automation, and enhancing system reliability. My skill set covers a broad range, and I specialize in aligning technical solutions with business objectives. Contact me to discuss how I can support your current initiatives with my expertise.</p>
                            </div>
                        </div>
                        <Skills />

                        <hr />

                        <div className="row">
                            <div className="col-md-4">
                                <img src={procore} className="giffies profile-space" alt="Procore.com" />
                            </div>
                            <div className="col-md-8">
                                <h4>Procore </h4>
                                <p> Started out as part of an embedded SRE team that spearheaded a \"You build it, you run it\" movement - decoupling the monolith ruby codebase into supported microservices. Created the pipeline, packaged necessary infrastructure into re-usable modules, and consulted developer in areas of friction. Now I am part of the team that manages the compute platform (Kubernetes) responsible for cluster upgrades & maintainence. </p>
                            </div>
                        </div>

                        <hr />

                        <div className="row">
                            <div className="col-md-4">
                                <img src={easymetrics} className="giffies profile-space" alt="easymetrics.com" />
                            </div>
                            <div className="col-md-8">
                                <h4>EasyMetrics </h4>
                                <p> 
                                As a consultant, I led the observability efforts for their products, utilizing OpenTelemetry to build comprehensive dashboards, manage metric exporters, and oversee multiple Prometheus gateways. I packaged observability code using Infrastructure as Code (IaC) with a convention that streamlined the process of adding new clusters. Additionally, I implemented an alerting system and established an on-call rotation for the development team.</p>
                            </div>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col-md-4">
                                <img src={romecode} className="giffies" alt="Romecode.com" />
                            </div>
                            <div className="col-md-8">
                                <h4>RomeCode </h4>
                                <p> Most Recently I have been a w-9 contractor through my LLC; My focus projects include an Apache Airflow ETL email pipeline from Databricks to an AWS ECS cluster that kicked off a SQS/Lambda function, sending out 2 million emails daily; A deploy dev-to-prod CI/CD pipeline (gitlab), A monitoring/escalation plan with datadog &#38; pagerduty, and an elasticsearch cluster with node autoscaling (based off of heap size and cpu load)</p>
                            </div>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col-md-4">
                                <img src={igt} className="giffies" alt="GrahamStak.com" />
                            </div>
                            <div className="col-md-8">
                                <h4>Ingenious Thought Tech Exploration Program</h4>
                                <p> This is by far the most passionate I have felt about a project in a long time. As the acting Executive Director of this teaching program, I have developed and cultivated this STEM program from the ground up. I created the curriculum, actively manage organizational relationships, And orchestrate the day to day activities. focusing on front-end tech, we are also integrating robotics and game development.</p>
                            </div>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col-md-4">
                                <img src={grahamstak} className="giffies" alt="GrahamStak.com" />
                            </div>
                            <div className="col-md-8">
                                <h4>GrahamStak <span></span></h4>
                                <p> As project lead, I was put in charge of building and automating/scaffolding customer cloud systems from diagrammed architecture to completion. using docker/ansible/jenkins/k8s/terraform/DC/OS, prometheus for monitoring.</p>
                            </div>
                        </div>

                        <hr />
                        <div className="row">
                            <div className="col-md-4">
                                <img src={kepler} className="giffies" alt="SystemOnGrid.com" />
                            </div>
                            <div className="col-md-8">
                                <h4>Kepler <span>(Web-based ssh-shell)</span></h4>
                                <p>I spearheaded this revolutionary project; using web sockets and a node proxy server to relay commands back and forth to an OpenStack API instance, Giving our users shell access through their web browser. (A novel idea at the time lol) </p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-4">
                                <img src={hubble} className="giffies" alt="SystemOnGrid.com" />
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
                                <img src={colorforcode} className="giffies" alt="ColorForCode.com" />
                            </div>
                            <div className="col-md-8">
                                <h4>Color For Code <span>(CI/CD integration)</span></h4>
                                <p> I was approached by the owners to automate their deployment pipeline from scratch - my first foray into husky.js. Post deploy git hooks, custom ansible playbook (download and package artifacts, build production files), run custom unit/load tests in dev env before push to prod. </p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-4">
                                <img src={isow} className="giffies" alt="ISow.com" />
                            </div>
                            <div className="col-md-8">
                                <h4>ISow <span>(Backend platform for analytics)</span></h4>
                                <p>I was hired as a consultant - mainly to assist in development of a custom cms platform written in PHP, as well as creating an aggregated data platform for metrics and reporting. Tying in user tendencies with forecasting to deliver simple predictive analysis dashboards.</p>
                            </div>
                        </div>

                        <hr />
                    </div>
                </div>
                {transition &&
                    <div className="hinge animated top-container" ref="hinge" id="hinge">
                        <Card phone={Robo.phone}
                            email={Robo.email}
                            skype={Robo.skype}
                            github={Robo.github}
                            linkedin={Robo.linkedin}
                        />
                    </div>
                }

                <Footer />

            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return { transition: state.transition }
}

function mapActionsToProps(dispatch, props) {
    return { onUpdateTransition: (bool, router) => dispatch(updateTransition(bool, router)), }
}

export default connect(mapStateToProps, mapActionsToProps)(Works);

