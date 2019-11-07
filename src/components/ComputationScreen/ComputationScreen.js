import React, { Component } from 'react';
import './ComputationScreen.css';

class ComputationScreen extends Component {
    render() {
        return (
            <div className='ComputationScreen'> 
                 {this.props.children } 
            </div>
        );
    }
}

export default ComputationScreen;