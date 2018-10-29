import React, { Component } from "react";
import Film from './Film.js';


class Film extends Component {
    render(){
        return 
        <div className="Movie">
            <h3 className="movie-title">{this.props.title}</h3>
            <a href={this.props.link} className="url">More Info</a>
          
            
        </div>
        
    }
}

export default Film;