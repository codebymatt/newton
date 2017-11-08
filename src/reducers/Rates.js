// (i) => {return i}

export default function() {
    return [
        {name: 'cels', options: [
            {name: 'cels', f: (i) => {return i}}, {name: 'fahr', f: (i) => {return 32 + 9*(i/5)}}, {name: 'kelv', f: (i) => {return i*1 + 273.15}}
        ]},
        {name: 'fahr', options: [
            {name: 'cels', f: (i) => {return (i*1 - 32)*(5/9)}}, {name: 'fahr', f: (i) => {return i}}, {name: 'kelv', f:(i) => {return (i*1 + 459.67)*(5/9)}}
        ]},
        {name: 'kelv', options: [
            {name: 'cels', f: (i) => {return i*1 - 273.15}}, {name: 'fahr', f: (i) => {return ((i*9)/5) - 459.67}}, {name: 'kelv', f: (i) => {return i}}
        ]}
    ]
}
