export default function() {
    return [
        {name: 'temp', options: [
            {name: 'cels', verbose:'Celsius'},
            {name: 'fahr', verbose:'Fahrenheit'},
            {name: 'kelv', verbose:'Kelvin'}
        ]},
        {name: 'mass', options: [
            {name: 'kilo', verbose:'Kilogram'},
            {name: 'oz', verbose:'Pound'},
            {name: 'st', verbose:'Stone'}
        ]}
    ]
}
