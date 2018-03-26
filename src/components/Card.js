import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateTransition } from '../actions/transition-actions';
import { withRouter } from 'react-router-dom';

class Card extends Component {
  constructor(props){
    super(props);
}
onUpdateTransition = async () => {
    await this.props.updateTransition(true, this.props.history);
    this.props.history.push('/works');
    // debugger
}
    render(){
      var style = {
        color: 'white',
      }
        return (
            <div id="home-page" className="container-fluid">
            <div id="inner-container" className="container">
              <div className="row">
                <div className="col-md-6 logo_box">
                  <div className=""><h1>JEROME O. MOORE</h1></div>
                  <h4 className="title-name">Cross Functional Technologist</h4>
                </div>
                
                <div className="col-md-6">
                  <h2 style={style}>connect with me!</h2>
                  <ul className="info">
                    <li>
                      <h3>E-mail</h3>
                      <p><a className="reslink" href={`mailto:${this.props.email}`}>{this.props.email}</a></p>
                    </li>
                    <li onClick={this.onUpdateTransition}>
                      <h3 className="finga">Portfolio</h3>
                      <p ><p className="reslink finga">My Works</p></p>
                    </li>
                    <li>
                      <h3>Social</h3>
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

function mapStateToProps(state, props)  {
  return {transition : state.transition}
}

function mapActionsToProps(dispatch, props) {
  return {updateTransition: (bool, router) => dispatch(updateTransition(bool, router)),}
}
export default withRouter(connect(mapStateToProps, mapActionsToProps)(Card));