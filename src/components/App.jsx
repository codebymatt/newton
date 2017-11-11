import React from 'react';
import { connect } from 'react-redux';

import Title from './Title.jsx';
import Kicker from './Kicker.jsx';
import Info from './Info.jsx';
import Inputs from './Inputs.jsx';
import CardDisplay from '../containers/CardDisplay.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.metricHandler = this.metricHandler.bind(this);
        this.state = { selected: "temp" }
    }

    metricHandler(metric) {
        this.setState({ selected: metric });
        console.log("Works to here! Selected is: " + this.state.selected)
    }

    render() {
        return (
            <div>
                <Title />
                <Kicker />
                <Inputs selectedMetric={this.state.selected}/>
                <CardDisplay handler={this.metricHandler} selected={this.state.selected}/>
                <Info />
            </div>
        );
    }
}

/*function mapStateToProps(state) {
    return {
        selected: state.selected
    };
}

export default connect(mapStateToProps)(App)
*/
