import React from 'react';
import Typist from 'react-typist';

export default class Kicker extends React.Component {
    render() {
        return (
            <div>
                <h3>Fast and easy unit conversions. You know, for when</h3>
                <Typist stdTypingDelay={0}
                        cursor={{"show": false}}
                    >
                    <Typist.Delay ms={500} />
                    <span>Physicists use Kelvin.</span>
                    <Typist.Backspace count={25} delay={1000} />
                    <Typist.Delay ms={500} />
                    <span>Astronomers use parsecs.</span>
                    <Typist.Backspace count={24} delay={1000} />
                    <Typist.Delay ms={500} />
                    <span>Grandmas recipes are all in ounces.</span>
                    <Typist.Backspace count={35} delay={1000} />
                    <Typist.Delay ms={750} />
                    <span>You like your math done in style.</span>
                </Typist>
            </div>
        );
    }
}
