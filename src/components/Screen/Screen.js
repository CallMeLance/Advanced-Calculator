import React, { Component } from 'react';
import '../Screen/Screen.css';
import ResultsScreen from '../ResultsScreen/ResultsScreen';

// Component that holds the results screen and calculation screen 
class Screen extends Component {
    render() {
        return (
            <div className='Screen'>
                <ResultsScreen>
                 0
                </ResultsScreen>
            </div>
        );
    }
}

export default Screen;