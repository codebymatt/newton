import React from 'react';
import Metric from './Metric.jsx'

export default class CardDisplay extends React.Component {
    render() {
        return (
            <div id='CardDisplay'>
                <Metric />
                <Metric />
                <Metric />
                <Metric />
                <Metric />
            </div>
        );
    }
}
