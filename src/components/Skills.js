import React, {Component} from 'react';

export default class SkillsContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            hidden: true,
        }
    }
    toggleSkills = ()=>{
        this.setState({
            hidden:!this.state.hidden
        })
    }
    render(){
        const ease = this.state.hidden ? 'skills': 'skills is-visible';
       return( <div className='easy'>
            <button onClick={this.toggleSkills}>
            Show My Skills!
            </button>
            <ShowMe ease={ease} />
            </div>
       )
    }
}
const ShowMe = (props) => {
    
    return(
        <div className={props.ease}>
        <div className='container'>
        <div className='row'>
        <div className='col-md-6'>
        <h3>DevOps</h3>
        </div>
        <div className='col-md-6'>
        <h3>Front-End</h3>
        </div>
        <h2>Aiyoooooo</h2>
        </div>
        </div>
        </div>
    )
}