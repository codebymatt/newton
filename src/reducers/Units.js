export default function() {
    return [
        {name: 'temp', options: [
            {name: 'cels', verbose:'Celsius'},
            {name: 'fahr', verbose:'Fahrenheit'},
            {name: 'kelv', verbose:'Kelvin'}
        ]},
        {name: 'mass', options: [
            {name: 'gram', verbose:'Gram'},
            {name: 'kilo', verbose:'Kilogram'},
            {name: 'oz', verbose:'Ounce'},
            {name: 'lb', verbose:'Pound'},
            {name: 'st', verbose:'Stone'},
            {name: 'ton', verbose:'Ton'}
        ]},
        {name: 'vel', options: [
            {name: 'kmph', verbose:'Km / Hour'},
            {name: 'mph', verbose:'Miles/Hour'},
            {name: 'mach', verbose:'Mach'}
        ]},
        {name: 'time', options: [
            {name: 'sec', verbose:'Seconds'},
            {name: 'min', verbose:'Minutes'},
            {name: 'hour', verbose:'Hours'}
        ]},
        {name: 'dist', options: [
            {name: 'mm', verbose:'Millimeters'},
            {name: 'cm', verbose:'Centimeters'},
            {name: 'm', verbose:'Meters'},
            {name: 'inch', verbose:'Inches'},
            {name: 'feet', verbose:'Feet'},
            {name: 'mile', verbose:'Miles'},
        ]},
    ]
}
