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

        this.metricHandler = this.metricHandler.bind(this);
        this.changeLeft = this.changeLeft.bind(this);
        this.changeRight = this.changeRight.bind(this);
        this.state = { selected: "temp", left: "cels", right: "fahr"}
    }

    metricHandler(metric) {
        var left = this.getMetricOptions(metric)[0].options[0].name;
        var right = left;
        this.setState({ selected: metric, left: left, right: right });
    }

    changeLeft(val) {
        this.setState({ left: val });
    }

    changeRight(val) {
        this.setState({ right: val });
    }

    getMetricOptions(selectedMetric){
        return this.props.units.filter((unit) => {
                return unit.name == selectedMetric
            }
        )
    }

    render() {
        return (
            <div>
                <Title />
                <Kicker />
                <Inputs selectedMetric={this.state.selected} left={this.state.left} right={this.state.right} changeLeft={this.changeLeft} changeRight={this.changeRight}/>
                <CardDisplay handler={this.metricHandler} selected={this.state.selected}/>
                <Info />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        units: state.units
    };
}

export default connect(mapStateToProps)(App)
