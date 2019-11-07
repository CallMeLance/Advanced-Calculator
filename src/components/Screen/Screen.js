import React, { Component } from 'react';
import '../Screen/Screen.css';
import ResultsScreen from '../ResultsScreen/ResultsScreen';
import ComputationScreen from '../ComputationScreen/ComputationScreen';

// Component that holds the results screen and calculation screen 
class Screen extends Component {
    render() {
        return (
            <div className='Screen'>
                <ResultsScreen>
                 0
                </ResultsScreen>

                <ComputationScreen>
                    2+3 
                </ComputationScreen>
            </div>
        );
    }
}

export default Screen;