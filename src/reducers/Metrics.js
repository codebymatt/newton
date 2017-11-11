import { changeClass, TOGGLE_HIGHLIGHT } from '../actions/Metrics.js';

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

/*export default function() {
    return [
        { name: 'mass', verbose: 'Mass', image: mass, cardClass: 'card' },
        { name: 'temp', verbose: 'Temperature', image: tempWhite, cardClass: 'highlighted' },
        { name: 'vel', verbose: 'Velocity', image: vel, cardClass: 'card' },
        { name: 'time', verbose: 'Time', image: time, cardClass: 'card' },
        { name: 'dist', verbose: 'Distance', image: dist, cardClass: 'card' },
    ]
}*/

const initialState = [
    { name: 'mass', verbose: 'Mass', image: mass, cardClass: 'card' },
    { name: 'temp', verbose: 'Temperature', image: tempWhite, cardClass: 'highlighted' },
    { name: 'vel', verbose: 'Velocity', image: vel, cardClass: 'card' },
    { name: 'time', verbose: 'Time', image: time, cardClass: 'card' },
    { name: 'dist', verbose: 'Distance', image: dist, cardClass: 'card' }
];

function metrics(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_HIGHLIGHT:
            return state.map((metric, id) => {
                if (action.older == metric.name && action.newer == metric.name) {
                    return Object.assign({}, metric, {
                        cardClass: 'highlighted',
                    })
                }
                else if (metric.name === action.older) {
                    var oldImageName = "img/" + action.older + ".svg"
                    return Object.assign({}, metric, {
                        cardClass: 'card',
                        image: oldImageName
                    })
                } else if (metric.name === action.newer) {
                    var imageName = "img/" + action.newer + "-white.svg"
                    return Object.assign({}, metric, {
                        cardClass: 'highlighted',
                        image: imageName
                    })
                }
                return metric
            })
        default:
            return state
    }
}

export default metrics;
