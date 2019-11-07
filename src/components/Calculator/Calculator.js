import React, { Component } from 'react';
import './Calculator.css';
import Screen from '../Screen/Screen';
import Keypad from '../Keypad/Keypad';

// Main calculator component. Contains our other calculator components.
class Calculator extends Component {
    render() {
        return (
            <div className="Calculator"> 
            <Screen />
            <Keypad />
            </div>
        );
    }    
}

export default Calculator;