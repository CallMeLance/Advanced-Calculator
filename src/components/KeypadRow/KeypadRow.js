import React, { Component } from 'react';
import './KeypadRow.css';

class KeypadRow extends Component {
    render() {
        return (
            <div className="KeypadRow">
                {this.props.children}2
            </div>
            
        )
    }
}

export default KeypadRow;