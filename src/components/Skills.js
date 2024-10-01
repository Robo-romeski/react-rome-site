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
        <div className='row headroom'>
        <div className='col-md-12 skills-devops'>

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
        <i className="fa fa-star"></i>
        </li> <br/>
    <li>Kubernetes</li>    
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
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

        <li>Argo</li>    
        <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
    <li>Jenkins</li>    
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
        <br/>
        <li>Kubernetes</li>    
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
        <li>Prometheus</li>    
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
    <li>Packer</li>    
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
        <li>Datadog</li>    
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
        <li>Databricks</li>    
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
    <li>GCP</li>    
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
    <li>Azure</li>    
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
    <li>Crossplane</li>    
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
    <li>Python</li>    
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
        <li>AWS</li>    
    <li><i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
        </li> <br/>
        <br/>
        <li>Terraform</li>    
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
        
        </div>
        </div>
        </div>
    )
}