import React, { Component } from 'react';
import { connect } from 'react-redux';

import Metric from '../components/Metric.jsx'

class CardDisplay extends Component {
    renderMetrics() {
        //console.log(this.props.metrics)
        return this.props.metrics.map((metric) => {
            return (
                <Metric {key={metric.name} image={metric.image} id={metric.name} name={metric.verbose} cardClass={metric.cardClass} handler={this.props.handler} appSelected={this.props.selected}}/>
            );
        });
    }

    /*changeHighlight(name) {
        var old = this.props.metrics.map((metric) => {
            return metric.cardClass == "highlighted";
        })[0];

        this.setState({
            old.cardClass="highlighted";
        })
    }*/

    render() {
        return (
            <div id='CardDisplay'>
                {this.renderMetrics()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        metrics: state.metrics
    };
}

export default connect(mapStateToProps)(CardDisplay);
