import React from 'react';

import Title from './Title.jsx';
import Kicker from './Kicker.jsx';
import Info from './Info.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Title />
                <Kicker />
                <Info />
            </div>
        );
    }
}
