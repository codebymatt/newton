import React from 'react';
import mass from '../graphics/mass.svg'
import temp_white from '../graphics/temperature_white.svg'

export default class Metric extends React.Component {
    render() {
        return (
            <div className='card'>
                <img src={mass} />
                <p>Mass</p>
            </div>
        );
    }
}
