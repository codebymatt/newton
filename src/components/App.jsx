import React from 'react';
import { connect } from 'react-redux';

import Title from './Title.jsx';
import Kicker from './Kicker.jsx';
import Info from './Info.jsx';
import Inputs from './Inputs.jsx';
import CardDisplay from '../containers/CardDisplay.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Title />
                <Kicker />
                <Inputs selectedMetric={this.props.selected.selected}/>
                <CardDisplay />
                <Info />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selected: state.selected
    };
}

export default connect(mapStateToProps)(App)
