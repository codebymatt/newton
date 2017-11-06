import React, { Component } from 'react';
import { connect } from 'react-redux';

import arrows from '../graphics/arrows.svg';
import selectors from '../graphics/selectors.svg';

class Scalar extends Component {
    constructor(props){
        super(props);
        this.state = {x: '', y: '', rate: 2, selectedMetric: "mass"};
    }

    getMetricOptions(selectedMetric){
        //var unitArray = this.props.units
        //console.log(unitArray)
        return this.props.units.filter((unit) => {
                //console.log(selectedMetric)
                return unit.name == selectedMetric
            }
        )
    }

    renderMetricOptions(selectedMetric) {
        var options = this.getMetricOptions(selectedMetric)[0].options
        console.log(options);
        return options.map((option) => {
            return <option key={option.name}>{option.verbose}</option>
        });
    }

    render () {
        return (
            <div id='scalar-wrapper'>
                <div className='input-wrapper'>
                    <input
                        type='text'
                        name='inputOne'
                        placeholder='0'
                        value={this.state.x}
                        onChange={
                            event => this.setState({
                                x: event.target.value,
                                y: event.target.value * this.state.rate })
                            }
                    />
                    <div className='select-wrapper'>
                        <select>
                            {this.renderMetricOptions(this.state.selectedMetric)}
                        </select>
                        <img className='selectors' src={selectors} />
                    </div>
                </div>
                <img src={arrows} className='arrows' />
                <div className='input-wrapper'>
                    <input
                        type='text'
                        name='inputTwo'
                        placeholder='0'
                        value={this.state.y}
                        onChange={
                            event => this.setState({
                                x: event.target.value * ((1/this.state.rate)),
                                y: event.target.value
                            })
                        }
                    />
                    <div className='select-wrapper'>
                        <select>
                            {this.renderMetricOptions(this.state.selectedMetric)}
                        </select>
                        <img className='selectors' src={selectors} />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        units: state.units
    };
}

export default connect(mapStateToProps)(Scalar)
