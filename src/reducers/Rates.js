// (i) => {return i}

export default function() {
    return [
        {name: 'cels', options: [
            {name: 'cels', f: (i) => {return i.toFixed(2)}}, {name: 'fahr', f: (i) => {return (32 + 9*(i/5)).toFixed(2)}}, {name: 'kelv', f: (i) => {return (i*1 + 273.15).toFixed(2)}}
        ]},
        {name: 'fahr', options: [
            {name: 'cels', f: (i) => { return ((i-32)*(5/9)).toFixed(2)}}, {name: 'fahr', f: (i) => {return i.toFixed(2)}}, {name: 'kelv', f:(i) => {return ((i*1 + 459.67)*(5/9)).toFixed(2)}}
        ]},
        {name: 'kelv', options: [
            {name: 'cels', f: (i) => {return (i*1 - 273.15).toFixed(2)}}, {name: 'fahr', f: (i) => {return (((i*9)/5) - 459.67).toFixed(2)}}, {name: 'kelv', f: (i) => {return (i*1).toFixed(2)}}
        ]}
    ]
}
