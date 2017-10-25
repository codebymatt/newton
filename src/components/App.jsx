import React from 'react';

import Title from './Title.jsx';
import Kicker from './Kicker.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Title />
                <Kicker />
            </div>
        );
    }
}
