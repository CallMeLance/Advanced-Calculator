import React, { Component } from 'react';
import './ResultsScreen.css';

class ResultsScreen extends Component {
    render() {
        return (
            <div className='ResultsScreen'> 
            {this.props.children } 
            </div>
        );
    }
}

export default ResultsScreen;