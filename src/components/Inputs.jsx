import React from 'react';
import Scalar from './Scalar.jsx';

export default class Inputs extends React.Component {
    render () {
        return (
            <div id='inputs-wrapper'>
                <div id='input-text'>
                    Pick a quantity to convert, then pick which units you want
                </div>
                <Scalar />
            </div>
        );
    }
}
