import React, {Component} from 'react';
import loadGif from '../images/loader.gif';

export default class Loading extends Component{
    render(){
        return(
            <div className="pre-loader">
            <div className="status">
            <img src={loadGif}/>
            </div>
            </div>
        )
    }
}