import React from 'react';
import Scalar from '../containers/Scalar.jsx';

export default class Inputs extends React.Component {
    render () {
        return (
            <div id='inputs-wrapper'>
                <div id='input-text'>
                    Pick a quantity to convert, then pick which units you want
                </div>
                <Scalar selectedMetric={this.props.selectedMetric} left={this.props.left} right={this.props.right} changeRight={this.props.changeRight} changeLeft={this.props.changeLeft}/>
            </div>
        );
    }
}
