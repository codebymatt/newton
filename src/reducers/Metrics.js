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

export default function() {
    return [
        { name: 'mass', verbose: 'Mass', image: mass, cardClass: 'card' },
        { name: 'temp', verbose: 'Temperature', image: tempWhite, cardClass: 'highlighted' },
        { name: 'vel', verbose: 'Velocity', image: vel, cardClass: 'card' },
        { name: 'time', verbose: 'Time', image: time, cardClass: 'card' },
        { name: 'dist', verbose: 'Distance', image: dist, cardClass: 'card' },
    ]
}
