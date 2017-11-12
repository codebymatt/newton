// (i) => {return i}

export default function() {
    return [
        {name: 'cels', options: [
            {name: 'cels', f: (i) => {return (i*1).toFixed(2)}}, {name: 'fahr', f: (i) => {return (32 + 9*(i/5))}}, {name: 'kelv', f: (i) => {return (i*1 + 273.15)}}
        ]},
        {name: 'fahr', options: [
            {name: 'cels', f: (i) => { return ((i-32)*(5/9))}}, {name: 'fahr', f: (i) => {return (i*1)}}, {name: 'kelv', f:(i) => {return ((i*1 + 459.67)*(5/9))}}
        ]},
        {name: 'kelv', options: [
            {name: 'cels', f: (i) => {return (i*1 - 273.15)}}, {name: 'fahr', f: (i) => {return (((i*9)/5) - 459.67)}}, {name: 'kelv', f: (i) => {return (i*1)}}
        ]},
        {name: 'sec', options: [
            {name: 'sec', f: (i) => { return (i*1)}}, {name: 'min', f: (i) => {return (i/60)}}, {name: 'hour', f:(i) => {return (i/3600)}}
        ]},
        {name: 'min', options: [
            {name: 'sec', f: (i) => { return (i*60)}}, {name: 'min', f: (i) => {return (i*1)}}, {name: 'hour', f:(i) => {return (i/60)}}
        ]},
        {name: 'hour', options: [
            {name: 'sec', f: (i) => { return (i*3600)}}, {name: 'min', f: (i) => {return (i*60)}}, {name: 'hour', f:(i) => {return (i*1)}}
        ]},
        {name: 'kmph', options: [
            {name: 'kmph', f: (i) => { return (i*1)}}, {name: 'mph', f: (i) => {return (i*0.621371)}}, {name: 'mach', f:(i) => {return (i/1234.8)}}
        ]},
        {name: 'mph', options: [
            {name: 'kmph', f: (i) => { return (i/0.621371)}}, {name: 'mph', f: (i) => {return (i*1)}}, {name: 'mach', f:(i) => {return (i/767.269)}}
        ]},
        {name: 'gram', options: [
            {name: 'gram', f: (i) => { return (i*1)}}, {name: 'kilo', f: (i) => {return (i/1000)}}, {name: 'oz', f:(i) => {return (i/28.3495)}}, {name: 'lb', f:(i) => {return (i/453.592)}}, {name: 'st', f:(i) => {return (i/6350.29)}}, {name: 'ton', f:(i) => {return (i/907185)}}
        ]},
        {name: 'kilo', options: [
            {name: 'gram', f: (i) => { return (i*1000)}}, {name: 'kilo', f: (i) => {return (i*1)}}, {name: 'oz', f:(i) => {return (i*35.274)}}, {name: 'lb', f:(i) => {return (i*2.204)}}, {name: 'st', f:(i) => {return (i*0.157473)}}, {name: 'ton', f:(i) => {return (i*0.00110231)}}
        ]},
        {name: 'oz', options: [
            {name: 'gram', f: (i) => { return (i*28.3495)}}, {name: 'kilo', f: (i) => {return (i/35.274)}}, {name: 'oz', f:(i) => {return (i*1)}}, {name: 'lb', f:(i) => {return (i*0.0625)}}, {name: 'st', f:(i) => {return (i*0.00446429)}}, {name: 'ton', f:(i) => {return (i*0.00003125)}}
        ]},
        {name: 'lb', options: [
            {name: 'gram', f: (i) => { return (i*453.592)}}, {name: 'kilo', f: (i) => {return (i/2.204)}}, {name: 'oz', f:(i) => {return (i/.0625)}}, {name: 'lb', f:(i) => {return (i*1)}}, {name: 'st', f:(i) => {return (i*0.0714286)}}, {name: 'ton', f:(i) => {return (i*0.0005)}}
        ]},
        {name: 'st', options: [
            {name: 'gram', f: (i) => { return (i*6350.29)}}, {name: 'kilo', f: (i) => {return (i*6.35029)}}, {name: 'oz', f:(i) => {return (i*224)}}, {name: 'lb', f:(i) => {return (i*14)}}, {name: 'st', f:(i) => {return (i*1)}}, {name: 'ton', f:(i) => {return (i*0.007)}}
        ]},
        {name: 'ton', options: [
            {name: 'gram', f: (i) => { return (i*907185)}}, {name: 'kilo', f: (i) => {return (i*907.185)}}, {name: 'oz', f:(i) => {return (i*32000)}}, {name: 'lb', f:(i) => {return (i*2000)}}, {name: 'st', f:(i) => {return (i*142.857)}}, {name: 'ton', f:(i) => {return (i*1)}}
        ]},
        {name: 'mm', options: [
            {name: 'mm', f: (i) => { return (i*1)}}, {name: 'cm', f: (i) => {return (i/10)}}, {name: 'm', f:(i) => {return (i/1000)}}, {name: 'inch', f:(i) => {return (i/453.592)}}, {name: 'feet', f:(i) => {return (i/6350.29)}}, {name: 'mile', f:(i) => {return (i/907185)}}
        ]},
        {name: 'cm', options: [
            {name: 'mm', f: (i) => { return (i*1000)}}, {name: 'cm', f: (i) => {return (i*1)}}, {name: 'm', f:(i) => {return (i*35.274)}}, {name: 'inch', f:(i) => {return (i*2.204)}}, {name: 'feet', f:(i) => {return (i*0.157473)}}, {name: 'mile', f:(i) => {return (i*0.00110231)}}
        ]},
        {name: 'm', options: [
            {name: 'mm', f: (i) => { return (i*28.3495)}}, {name: 'cm', f: (i) => {return (i/35.274)}}, {name: 'm', f:(i) => {return (i*1)}}, {name: 'inch', f:(i) => {return (i*0.0625)}}, {name: 'feet', f:(i) => {return (i*0.00446429)}}, {name: 'mile', f:(i) => {return (i*0.00003125)}}
        ]},
        {name: 'inch', options: [
            {name: 'mm', f: (i) => { return (i*453.592)}}, {name: 'cm', f: (i) => {return (i/2.204)}}, {name: 'm', f:(i) => {return (i/.0625)}}, {name: 'inch', f:(i) => {return (i*1)}}, {name: 'feet', f:(i) => {return (i*0.0714286)}}, {name: 'mile', f:(i) => {return (i*0.0005)}}
        ]},
        {name: 'feet', options: [
            {name: 'mm', f: (i) => { return (i*6350.29)}}, {name: 'cm', f: (i) => {return (i*6.35029)}}, {name: 'm', f:(i) => {return (i*224)}}, {name: 'inch', f:(i) => {return (i*14)}}, {name: 'feet', f:(i) => {return (i*1)}}, {name: 'mile', f:(i) => {return (i*0.007)}}
        ]},
        {name: 'mile', options: [
            {name: 'mm', f: (i) => { return (i*907185)}}, {name: 'cm', f: (i) => {return (i*907.185)}}, {name: 'm', f:(i) => {return (i*32000)}}, {name: 'inch', f:(i) => {return (i*2000)}}, {name: 'feet', f:(i) => {return (i*142.857)}}, {name: 'mile', f:(i) => {return (i*1)}}
        ]},
    ]
}
