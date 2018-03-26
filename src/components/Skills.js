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
        const { hidden } = this.state;
        const btn = !hidden ? 'btn-dark': 'btn-skills';
        // const ease = this.state.hidden ? 'skills': 'skills is-visible';
       return( <div className='easy'>
            <button className={`btn ${btn}`} onClick={this.toggleSkills}>
            {hidden? 'Show My Skills!': 'Hide Skills'}
            </button>
            <ShowMe hidden={hidden} />
            </div>
       )
    }
}
const ShowMe = ({hidden}) => {
    const style = hidden ? { height: '0' } : null;
    const visy = !hidden ? 'skills-transition is-visible' : 'skills-transition';
    return(
        <div style={style} className={`skills ${visy}`}>
        <div className='container headroom'>
        <div className='row'>
        <div className='col-md-6'>
        <h3>DevOps</h3>
        </div>
        <div className='col-md-6'>
        <h3>Front-End</h3>
        </div>
        </div>
        <div className='row headroom'>
        <div className='col-md-6 skills-devops'>
        <div className='row'>
        <div className='col-6'>
        <ul>
    <li>Ansible</li>
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        </li> <br/>
    <li>Docker</li>    
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
    <li>Kubernetes</li>    
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
    <li>Bash</li>    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
    <li>Linux</li>    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>

        <li>nGinx</li>    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        </li> <br/>
    <li>Jenkins</li>    
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
</ul>
        </div>
        <div className='col-6'>
        <ul>
    <li>Mobile Emulation</li>    
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
    <li>Redis</li>    
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
    <li>Nagios</li>    
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        </li> <br/>
    <li>ELK stack</li>    
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
    <li>Selenium</li>    
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
    <li>Sentry.js</li>    
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
        <li>AWS</li>    
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
            </ul>
        </div>
        </div>
        </div>
        
        <div className='col-md-6 skills-front'>
        <div className='row'>
        <div className='col-6'>
        <ul>
    <li>HTML</li>
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        </li> <br/>
    <li>CSS3</li>
    <ul>
    <li>SASS</li>
        <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
        <li>Grid/Flexbox</li>
        <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
        <li>Transitions/ <br/>Animations</li>
        <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
        <li>Bootstrap</li>    
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        </li> <br/>
        </ul>
        
    <li>JavaScript(ES6)</li>
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
        </ul>
        </div>
        <div className='col-6'>
<ul>
    <li>React</li>
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
    <li>Node.js</li>
    <ul>
    <li>NPM </li>
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        </li> <br/>
        <li>API's </li>
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
        <li>Core Modules</li>
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
    </ul>
    <li>SQL</li>
    <ul>
    <li>MySQL</li>
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        </li> <br/>
        <li>PostGreSQL</li>
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
        </ul>
        <li>NoSQL</li>
        <ul><li>MongoDB</li>
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star    "></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
            </ul>
</ul>


        </div>
        </div>


        </div>
        </div>
        </div>
        </div>
    )
}