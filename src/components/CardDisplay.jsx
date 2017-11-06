import React from 'react';
import {Metric} from './Metric.jsx'
import mass from '../graphics/mass.svg'
import massWhite from '../graphics/mass-white.svg'
import temp from '../graphics/temp.svg'
import tempWhite from '../graphics/temp-white.svg'
import vel from '../graphics/vel.svg'
import velWhite from '../graphics/vel-white.svg'
import time from '../graphics/time.svg'
import timeWhite from '../graphics/time-white.svg'
import dist from '../graphics/dist.svg'
import distWhite from '../graphics/dist-white.svg'

export default class CardDisplay extends React.Component {
    render() {
        return (
            <div id='CardDisplay'>
                <Metric image={mass} metric='Mass' />
                <Metric image={temp} metric='Temperature' />
                <Metric image={vel} metric='Velocity' />
                <Metric image={time} metric='Time' />
                <Metric image={dist} metric='Distance' />
            </div>
        );
    }
}
