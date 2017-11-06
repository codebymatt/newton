import React from 'react';
import arrows from '../graphics/arrows.svg';
import selectors from '../graphics/selectors.svg';

export default class Scalar extends React.Component {
    constructor(props){
        super(props);
        this.state = {x: '', y: '', output: 3, forwardRate: 2, backwardRate: 0.5};
    }

    //convertRight = (x, rate) => (
    //    return x * rate;
    //)



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
                                y: event.target.value * this.state.forwardRate })
                            }
                    />
                    <div className='select-wrapper'>
                        <select>
                            <option value='celsius'>Celsius</option>
                            <option value='fahrenheit'>Fahrenheit</option>
                            <option value='kelvin'>Kelvin</option>
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
                                x: event.target.value * this.state.backwardRate,
                                y: event.target.value
                            })
                        }
                    />
                    <div className='select-wrapper'>
                        <select>
                            <option value='celsius'>Celsius</option>
                            <option value='fahrenheit'>Fahrenheit</option>
                            <option value='kelvin'>Kelvin</option>
                        </select>
                        <img className='selectors' src={selectors} />
                    </div>
                </div>
            </div>
        );
    }
}
