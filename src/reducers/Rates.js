// (i) => {return i}

export default function() {
    return [
        {name: 'cels', options: [
            {name: 'cels', f: (i) => {return (i*1).toFixed(2)}}, {name: 'fahr', f: (i) => {return (32 + 9*(i/5)).toFixed(2)}}, {name: 'kelv', f: (i) => {return (i*1 + 273.15).toFixed(2)}}
        ]},
        {name: 'fahr', options: [
            {name: 'cels', f: (i) => { return ((i-32)*(5/9)).toFixed(2)}}, {name: 'fahr', f: (i) => {return (i*1).toFixed(2)}}, {name: 'kelv', f:(i) => {return ((i*1 + 459.67)*(5/9)).toFixed(2)}}
        ]},
        {name: 'kelv', options: [
            {name: 'cels', f: (i) => {return (i*1 - 273.15).toFixed(2)}}, {name: 'fahr', f: (i) => {return (((i*9)/5) - 459.67).toFixed(2)}}, {name: 'kelv', f: (i) => {return (i*1).toFixed(2)}}
        ]},
        {name: 'sec', options: [
            {name: 'sec', f: (i) => { return (i*1).toFixed(2)}}, {name: 'min', f: (i) => {return (i/60).toFixed(2)}}, {name: 'hour', f:(i) => {return (i/3600).toFixed(2)}}
        ]},
        {name: 'min', options: [
            {name: 'sec', f: (i) => { return (i*60).toFixed(2)}}, {name: 'min', f: (i) => {return (i*1).toFixed(2)}}, {name: 'hour', f:(i) => {return (i/60).toFixed(2)}}
        ]},
        {name: 'hour', options: [
            {name: 'sec', f: (i) => { return (i*3600).toFixed(2)}}, {name: 'min', f: (i) => {return (i*60).toFixed(2)}}, {name: 'hour', f:(i) => {return (i*1).toFixed(2)}}
        ]},
        {name: 'kmph', options: [
            {name: 'kmph', f: (i) => { return (i*1).toFixed(2)}}, {name: 'mph', f: (i) => {return (i*0.621371).toFixed(2)}}, {name: 'mach', f:(i) => {return (i/1234.8).toFixed(2)}}
        ]},
        {name: 'mph', options: [
            {name: 'kmph', f: (i) => { return (i/0.621371).toFixed(2)}}, {name: 'mph', f: (i) => {return (i*1).toFixed(2)}}, {name: 'mach', f:(i) => {return (i/767.269).toFixed(2)}}
        ]},
        {name: 'mach', options: [
            {name: 'kmph', f: (i) => { return (i*1234.8).toFixed(2)}}, {name: 'mph', f: (i) => {return (i*767.269).toFixed(2)}}, {name: 'mach', f:(i) => {return (i*1).toFixed(2)}}
        ]},
        {name: 'gram', options: [
            {name: 'gram', f: (i) => { return (i*1).toFixed(2)}}, {name: 'kilo', f: (i) => {return (i/1000).toFixed(2)}}, {name: 'oz', f:(i) => {return (i/28.3495).toFixed(2)}}, {name: 'lb', f:(i) => {return (i/453.592).toFixed(2)}}, {name: 'st', f:(i) => {return (i/6350.29).toFixed(2)}}, {name: 'ton', f:(i) => {return (i/907185).toFixed(2)}}
        ]},
        {name: 'kilo', options: [
            {name: 'gram', f: (i) => { return (i*1000).toFixed(2)}}, {name: 'kilo', f: (i) => {return (i*1).toFixed(2)}}, {name: 'oz', f:(i) => {return (i*35.274).toFixed(2)}}, {name: 'lb', f:(i) => {return (i*2.204).toFixed(2)}}, {name: 'st', f:(i) => {return (i*0.157473).toFixed(2)}}, {name: 'ton', f:(i) => {return (i*0.00110231).toFixed(2)}}
        ]},
        {name: 'oz', options: [
            {name: 'gram', f: (i) => { return (i*28.3495).toFixed(2)}}, {name: 'kilo', f: (i) => {return (i/35.274).toFixed(2)}}, {name: 'oz', f:(i) => {return (i*1).toFixed(2)}}, {name: 'lb', f:(i) => {return (i*0.0625).toFixed(2)}}, {name: 'st', f:(i) => {return (i*0.00446429).toFixed(2)}}, {name: 'ton', f:(i) => {return (i*0.00003125).toFixed(2)}}
        ]},
        {name: 'lb', options: [
            {name: 'gram', f: (i) => { return (i*453.592).toFixed(2)}}, {name: 'kilo', f: (i) => {return (i/2.204).toFixed(2)}}, {name: 'oz', f:(i) => {return (i/.0625).toFixed(2)}}, {name: 'lb', f:(i) => {return (i*1).toFixed(2)}}, {name: 'st', f:(i) => {return (i*0.0714286).toFixed(2)}}, {name: 'ton', f:(i) => {return (i*0.0005).toFixed(2)}}
        ]},
        {name: 'st', options: [
            {name: 'gram', f: (i) => { return (i*6350.29).toFixed(2)}}, {name: 'kilo', f: (i) => {return (i*6.35029).toFixed(2)}}, {name: 'oz', f:(i) => {return (i*224).toFixed(2)}}, {name: 'lb', f:(i) => {return (i*14).toFixed(2)}}, {name: 'st', f:(i) => {return (i*1).toFixed(2)}}, {name: 'ton', f:(i) => {return (i*0.007).toFixed(2)}}
        ]},
        {name: 'ton', options: [
            {name: 'gram', f: (i) => { return (i*907185).toFixed(2)}}, {name: 'kilo', f: (i) => {return (i*907.185).toFixed(2)}}, {name: 'oz', f:(i) => {return (i*32000).toFixed(2)}}, {name: 'lb', f:(i) => {return (i*2000).toFixed(2)}}, {name: 'st', f:(i) => {return (i*142.857).toFixed(2)}}, {name: 'ton', f:(i) => {return (i*1).toFixed(2)}}
        ]},
        {name: 'mm', options: [
            {name: 'mm', f: (i) => { return (i*1).toFixed(2)}}, {name: 'cm', f: (i) => {return (i/10).toFixed(2)}}, {name: 'm', f:(i) => {return (i/1000).toFixed(2)}}, {name: 'inch', f:(i) => {return (i/453.592).toFixed(2)}}, {name: 'feet', f:(i) => {return (i/6350.29).toFixed(2)}}, {name: 'mile', f:(i) => {return (i/907185).toFixed(2)}}
        ]},
        {name: 'cm', options: [
            {name: 'mm', f: (i) => { return (i*1000).toFixed(2)}}, {name: 'cm', f: (i) => {return (i*1).toFixed(2)}}, {name: 'm', f:(i) => {return (i*35.274).toFixed(2)}}, {name: 'inch', f:(i) => {return (i*2.204).toFixed(2)}}, {name: 'feet', f:(i) => {return (i*0.157473).toFixed(2)}}, {name: 'mile', f:(i) => {return (i*0.00110231).toFixed(2)}}
        ]},
        {name: 'm', options: [
            {name: 'mm', f: (i) => { return (i*28.3495).toFixed(2)}}, {name: 'cm', f: (i) => {return (i/35.274).toFixed(2)}}, {name: 'm', f:(i) => {return (i*1).toFixed(2)}}, {name: 'inch', f:(i) => {return (i*0.0625).toFixed(2)}}, {name: 'feet', f:(i) => {return (i*0.00446429).toFixed(2)}}, {name: 'mile', f:(i) => {return (i*0.00003125).toFixed(2)}}
        ]},
        {name: 'inch', options: [
            {name: 'mm', f: (i) => { return (i*453.592).toFixed(2)}}, {name: 'cm', f: (i) => {return (i/2.204).toFixed(2)}}, {name: 'm', f:(i) => {return (i/.0625).toFixed(2)}}, {name: 'inch', f:(i) => {return (i*1).toFixed(2)}}, {name: 'feet', f:(i) => {return (i*0.0714286).toFixed(2)}}, {name: 'mile', f:(i) => {return (i*0.0005).toFixed(2)}}
        ]},
        {name: 'feet', options: [
            {name: 'mm', f: (i) => { return (i*6350.29).toFixed(2)}}, {name: 'cm', f: (i) => {return (i*6.35029).toFixed(2)}}, {name: 'm', f:(i) => {return (i*224).toFixed(2)}}, {name: 'inch', f:(i) => {return (i*14).toFixed(2)}}, {name: 'feet', f:(i) => {return (i*1).toFixed(2)}}, {name: 'mile', f:(i) => {return (i*0.007).toFixed(2)}}
        ]},
        {name: 'mile', options: [
            {name: 'mm', f: (i) => { return (i*907185).toFixed(2)}}, {name: 'cm', f: (i) => {return (i*907.185).toFixed(2)}}, {name: 'm', f:(i) => {return (i*32000).toFixed(2)}}, {name: 'inch', f:(i) => {return (i*2000).toFixed(2)}}, {name: 'feet', f:(i) => {return (i*142.857).toFixed(2)}}, {name: 'mile', f:(i) => {return (i*1).toFixed(2)}}
        ]},
    ]
}
