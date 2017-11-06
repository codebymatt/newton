import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Metric} from '../components/Metric.jsx'

class CardDisplay extends Component {
    renderMetrics() {
        return this.props.metrics.map((metric) => {
            return (
                <Metric key={metric.name} image={metric.image} name={metric.verbose} cardClass={metric.cardClass} />
            );
        });
    }
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
