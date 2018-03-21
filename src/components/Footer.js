import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component{
    render(){
        return(
            <button className="footer"><Link to="/"><h1>Contact</h1></Link></button>
        )
    }
}