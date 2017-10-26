import React from 'react';

import Title from './Title.jsx';
import Kicker from './Kicker.jsx';
import Info from './Info.jsx';
import Inputs from './Inputs.jsx';
import CardDisplay from './CardDisplay.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Title />
                <Kicker />
                <Inputs />
                <CardDisplay />
                <Info />
            </div>
        );
    }
}
