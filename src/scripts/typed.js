import Typed from 'typed.js';

var options = {
    strings: [
        "Americans use Fahrenheit.",
        "Nerds use <i>parsecs</i>. Seriously.",
        "You inherit your grandma's recipes in ounces."
    ],
    typeSpeed: 30
}

var typed = new Typed('.element', {
    stringsElement: '#typedStrings'
});
