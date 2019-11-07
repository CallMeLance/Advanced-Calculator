import React, { Component } from 'react';
import './Calculator.css';
import Screen from '../Screen/Screen';

// Main calculator component. Contains our other calculator components.
class Calculator extends Component {
    render() {
        return (
            <div className="Calculator"> 
            <Screen />
            </div>
        );
    }    
}

export default Calculator;