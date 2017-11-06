import React, { Component } from 'react';
import { connect } from 'react-redux';

import arrows from '../graphics/arrows.svg';
import selectors from '../graphics/selectors.svg';

class Scalar extends Component {
    constructor(props){
        super(props);
        var f = function(c) {return 32 + 9*(c/5)}
        var b = function(h) {return (h-32)*(5/9)}
        this.state = { x: '', y: '', forwardRate: f, backwardRate: b, left: 'cels', right: 'fahr', selectedMetric: "temp" };
    }
    //(d) => return 32 + 5*(d/9)
    getMetricOptions(selectedMetric){
        return this.props.units.filter((unit) => {
                return unit.name == selectedMetric
            }
        )
    }

    renderMetricOptions(selectedMetric) {
        var options = this.getMetricOptions(selectedMetric)[0].options
        return options.map((option) => {
            return <option key={option.name} value={option.name} >{option.verbose}</option>
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
                                //y: event.target.value * this.state.rate })
                                y: this.state.forwardRate(event.target.value) })
                            }
                    />
                    <div className='select-wrapper'>
                        <select
                            onChange={
                                event => this.setState({
                                    left: event.target.value
                                })
                            }
                            value={this.state.left}
                        >
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
                                x: this.state.backwardRate(event.target.value),
                                y: event.target.value
                            })
                        }
                    />
                    <div className='select-wrapper'>
                        <select
                            onChange={
                                event => this.setState({
                                    right: event.target.value
                                })
                            }
                            value={this.state.right}
                        >
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
        units: state.units,
        rates: state.rates
    };
}

export default connect(mapStateToProps)(Scalar)
