import React, { Component } from 'react';
import { connect } from 'react-redux';

import arrows from '../graphics/arrows.svg';
import selectors from '../graphics/selectors.svg';

class Scalar extends Component {
    constructor(props){
        super(props);
        var f = (c) => {return 32 + 9*(c/5)}
        var b = (h) => {return (h-32)*(5/9)}
        //this.state = { forwardRate: f, backwardRate: b};
    }

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

    getResult(start, end, input) {
        var options = this.props.rates.filter((unit) => {
            return unit.name == start
        })[0];
        var rate = options.options.filter((result) => {
            return result.name == end
        })[0];
        return rate.f(input)
    }

    render () {
        return (
            <div id='scalar-wrapper'>
                <div className='input-wrapper'>
                    <input
                        type='text'
                        name='inputOne'
                        placeholder='0.0'
                        value={this.props.x}
                        onChange={
                            event => {
                                this.props.changeX(event.target.value);
                                this.props.changeY(this.getResult(this.props.left, this.props.right, event.target.value))
                            }
                        }
                    />
                    <div className='select-wrapper'>
                        <select
                            onChange={
                                //event => {this.setState({
                                //    x: this.state.x
                                //});
                                (event) => {
                                    this.props.changeLeft(event.target.value);
                                    this.props.changeX(this.getResult(this.props.right, event.target.value, this.props.y))
                                }
                                //}
                            }
                            value={this.props.left}
                        >
                            {this.renderMetricOptions(this.props.selectedMetric)}
                        </select>
                        <img className='selectors' src={selectors} />
                    </div>
                </div>
                <img src={arrows}
                     className='arrows'
                     onClick={
                         () => {
                             this.props.changeLeft(this.props.right);
                             this.props.changeRight(this.props.left);
                             this.props.changeY(this.getResult(this.props.right, this.props.left, this.props.x));
                         }
                 }
                />
                <div className='input-wrapper'>
                    <input
                        type='text'
                        name='inputTwo'
                        placeholder='0.0'
                        value={this.props.y}
                        onChange={
                            event => {
                                this.props.changeY(event.target.value);
                                this.props.changeX(this.getResult(this.props.right, this.props.left, event.target.value))
                            }
                        }
                        /*onChange={
                            event => this.setState({
                                x: this.getResult(this.props.right, this.props.left, event.target.value),
                                y: event.target.value
                            })
                        }*/
                    />
                    <div className='select-wrapper'>
                        <select
                            onChange={
                                event => {
                                    this.props.changeRight(event.target.value);
                                    this.props.changeY(this.getResult(this.props.left, event.target.value, this.props.x))
                                }
                            }
                            value={this.props.right}
                        >
                            {this.renderMetricOptions(this.props.selectedMetric)}
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
