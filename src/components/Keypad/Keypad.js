import React, { Component } from 'react';
import './Keypad.css';
import KeypadRow from '../KeypadRow/KeypadRow';

class Keypad extends Component {
    render() {
        return (
            <div className='Keypad'> 
                {/* row 1 */}
                <KeypadRow>
            
                </KeypadRow>

                {/* row 2 */}
                <KeypadRow>
                    
                </KeypadRow>

                {/* row 3 */}
                <KeypadRow>
                    
                </KeypadRow>

                {/* row 4 */}
                <KeypadRow>
                    
                </KeypadRow>

                {/* row 5 */}
                <KeypadRow>
                    
                </KeypadRow>
            </div>
        );
    }
}

export default Keypad;